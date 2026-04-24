import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { z } from "zod";

const payloadSchema = z.object({
  projects: z.array(z.any()).default([]),
  members: z.array(z.any()).default([]),
});

async function getWorkspaceId(userId: string) {
  const membership = await prisma.workspaceMembership.findFirst({
    where: { userId },
    select: { workspaceId: true },
    orderBy: { createdAt: "asc" },
  });
  return membership?.workspaceId ?? null;
}

/**
 * Get team-shared workspace payload.
 */
export async function GET() {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as any)?.id ?? null;
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const workspaceId = await getWorkspaceId(userId);
  if (!workspaceId) return new Response("Workspace not found", { status: 404 });

  const data = await prisma.workspaceData.findUnique({
    where: { workspaceId },
    select: { payload: true, updatedAt: true },
  });

  return Response.json({
    payload: data?.payload ?? { projects: [], members: [] },
    updatedAt: data?.updatedAt?.toISOString() ?? null,
  });
}

/**
 * Replace team-shared workspace payload.
 */
export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as any)?.id ?? null;
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const workspaceId = await getWorkspaceId(userId);
  if (!workspaceId) return new Response("Workspace not found", { status: 404 });

  const json = await req.json().catch(() => null);
  const parsed = payloadSchema.safeParse(json?.payload ?? json);
  if (!parsed.success) return new Response("Invalid payload", { status: 400 });

  const saved = await prisma.workspaceData.upsert({
    where: { workspaceId },
    create: { workspaceId, payload: parsed.data },
    update: { payload: parsed.data },
    select: { updatedAt: true },
  });

  return Response.json({ ok: true, updatedAt: saved.updatedAt.toISOString() });
}


import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  workspaceName: z.string().min(2).max(80),
});

/**
 * Create a new user and (if first user) a new workspace owned by them.
 * If workspace already exists for this email (user exists), return 409.
 */
export async function POST(req: Request) {
  const form = await req.formData();
  const parsed = schema.safeParse({
    email: String(form.get("email") ?? "").toLowerCase(),
    password: String(form.get("password") ?? ""),
    workspaceName: String(form.get("workspaceName") ?? "").trim(),
  });

  if (!parsed.success) {
    return new Response("Invalid input", { status: 400 });
  }

  const existing = await prisma.user.findUnique({
    where: { email: parsed.data.email },
    select: { id: true },
  });
  if (existing) return new Response("User already exists", { status: 409 });

  const passwordHash = await bcrypt.hash(parsed.data.password, 12);

  const userCount = await prisma.user.count();
  const isFirstUser = userCount === 0;

  const workspace = isFirstUser
    ? await prisma.workspace.create({
        data: {
          name: parsed.data.workspaceName,
          data: { create: { payload: { projects: [], members: [] } } },
        },
        select: { id: true },
      })
    : await prisma.workspace.findFirst({
        select: { id: true },
        orderBy: { createdAt: "asc" },
      });

  if (!workspace) return new Response("Workspace missing", { status: 500 });

  await prisma.user.create({
    data: {
      email: parsed.data.email,
      passwordHash,
      memberships: {
        create: {
          workspaceId: workspace.id,
          role: isFirstUser ? "owner" : "member",
        },
      },
    },
  });

  return Response.redirect(new URL("/auth/signin", req.url), 303);
}


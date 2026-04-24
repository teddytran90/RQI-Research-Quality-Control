import { readFile } from "node:fs/promises";
import { join } from "node:path";
import Script from "next/script";

/**
 * Render the legacy static HTML inside Next.js,
 * while serving /assets/* via route handlers.
 */
export default async function Page() {
  const legacyIndexPath = join(process.cwd(), "index.html");
  const legacyHtml = await readFile(legacyIndexPath, "utf8");

  const bodyMatch = legacyHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const rawBody = bodyMatch?.[1] ?? "";

  const bodyHtml = rawBody
    .replaceAll('href="./assets/styles.css"', 'href="/assets/styles.css"')
    .replaceAll('src="./assets/app.js"', 'src="/assets/app.js"');

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <Script src="/assets/app.js" strategy="afterInteractive" />
    </>
  );
}


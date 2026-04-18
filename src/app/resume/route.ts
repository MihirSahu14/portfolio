import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

export async function GET() {
  const filePath = path.join(process.cwd(), "src", "data", "Mihir Sahu Resume.pdf");
  const fileBuffer = await readFile(filePath);

  return new Response(new Uint8Array(fileBuffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Mihir_Sahu_Resume.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}

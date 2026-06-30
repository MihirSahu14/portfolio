import { readResumePdf, resumeFileName } from "@/lib/resume";

export const runtime = "nodejs";

export async function GET() {
  const fileBuffer = await readResumePdf();

  return new Response(new Uint8Array(fileBuffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${resumeFileName}"`,
      "Cache-Control": "no-store",
    },
  });
}

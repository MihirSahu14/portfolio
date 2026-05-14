import { readResumePdf, resumeFileName } from "@/lib/resume";

export const runtime = "nodejs";

export async function GET() {
  const fileBuffer = await readResumePdf();

  return new Response(new Uint8Array(fileBuffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${resumeFileName}"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}

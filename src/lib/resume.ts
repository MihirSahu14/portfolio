import { readFile } from "node:fs/promises";
import path from "node:path";

export const resumeFileName = "Mihir_Sahu_Resume.pdf";

export async function readResumePdf() {
  const filePath = path.join(process.cwd(), "src", "data", "Mihir Sahu Resume.pdf");

  return readFile(filePath);
}

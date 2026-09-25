import Link from "next/link";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";

const resumePdf = "/Mihir_Sahu_Resume.pdf";

export default function ResumePage() {
  return (
    <SiteShell scene="scene-about">
      <Section title="Resume" kicker="Character Sheet">
        <div className="mb-6 flex flex-wrap gap-3">
          <Link className="pixel-nav" href="/">
            ← HOME
          </Link>
          <a className="pixel-button" href={resumePdf} download>
            DOWNLOAD PDF
          </a>
          <a className="pixel-button" href={resumePdf} target="_blank" rel="noreferrer">
            OPEN PDF
          </a>
          <a className="pixel-button" href="mailto:mihirs1410@gmail.com">
            EMAIL ME
          </a>
        </div>
        {/* ponytail: phone browsers can't embed PDFs, so they get the OPEN PDF button only */}
        <object
          className="hidden h-[78vh] min-h-[36rem] w-full border-4 border-[var(--border)] bg-white shadow-[6px_6px_0_0_var(--shadow)] md:block"
          data={resumePdf}
          type="application/pdf"
        >
          <div className="pixel-card">
            <p className="text-base leading-8 text-[var(--muted)]">
              Your browser cannot show the PDF preview here.
            </p>
            <a className="pixel-button mt-4" href={resumePdf} download>
              DOWNLOAD PDF
            </a>
          </div>
        </object>
      </Section>
    </SiteShell>
  );
}

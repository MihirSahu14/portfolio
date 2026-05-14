import Link from "next/link";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";

export default function ResumePage() {
  return (
    <SiteShell
      title="Resume"
      eyebrow="Character Sheet"
      description="Preview my resume in the browser, or download the PDF if you want a local copy."
      scene="scene-about"
    >
      <Section title="Mihir Sahu Resume" kicker="PDF Preview">
        <div className="mb-6 flex flex-wrap gap-3">
          <a className="pixel-button" href="/resume/download" download>
            DOWNLOAD PDF
          </a>
          <Link className="pixel-button" href="/contact">
            CONTACT
          </Link>
        </div>
        <object
          className="h-[78vh] min-h-[36rem] w-full border-4 border-[var(--border)] bg-white shadow-[6px_6px_0_0_var(--shadow)]"
          data="/resume/file"
          type="application/pdf"
        >
          <div className="pixel-card">
            <p className="text-base leading-8 text-[var(--muted)]">
              Your browser cannot show the PDF preview here.
            </p>
            <a className="pixel-button mt-4" href="/resume/download" download>
              DOWNLOAD PDF
            </a>
          </div>
        </object>
      </Section>
    </SiteShell>
  );
}

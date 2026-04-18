import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { experienceItems } from "@/data/site";

export default function ExperiencePage() {
  return (
    <SiteShell
      title="Experience"
      eyebrow="Campaign History"
      description="A mix of software engineering, research, AI, and game-focused work across labs, internships, and collaborative builds."
      scene="scene-experience"
    >
      <Section title="Work, Research, and Build History" kicker="Timeline">
        <div className="grid gap-4">
          {experienceItems.map((item) => (
            <article key={`${item.org}-${item.title}`} className="pixel-card">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl uppercase">{item.title}</h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.24em] text-[var(--accent)]">
                    {item.org} | {item.location}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                  {item.period}
                </span>
              </div>
              <ul className="mt-5 space-y-3 text-base leading-8 text-[var(--muted)]">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>+ {bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}

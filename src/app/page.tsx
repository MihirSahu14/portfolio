import Link from "next/link";
import { FeatureCard } from "@/components/feature-card";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { experienceItems, featuredGames, featuredProjects, githubPath, skills } from "@/data/site";

// ponytail: swap for your Calendly URL once you have one
const contactHref = "mailto:mihirs1410@gmail.com";

const inlineLink = "text-[var(--accent-text)] underline underline-offset-4";

// Brand marks, drawn inside pixel-button squares so they read as clickable.
const linkedinPath =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 4.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

const socialIcons = [
  { label: "GitHub", href: "https://github.com/MihirSahu14", path: githubPath, viewBox: "0 0 16 16" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/msahu14", path: linkedinPath, viewBox: "0 0 24 24" },
];

const skillRows: [string, string[]][] = [
  ["AI", skills.ai],
  ["Engineering", skills.engineering],
  ["Game Dev", skills.gameDev],
];

export default function Home() {
  return (
    <SiteShell scene="scene-home" spriteKind="home">
      <section className="pt-12 sm:pt-24">
        <p className="pixel-eyebrow">Player One</p>
        <h1 className="mt-4 text-4xl uppercase sm:text-6xl">Mihir Sahu</h1>
        <p className="mt-4 text-xl text-[var(--accent-text)] sm:text-2xl">
          AI Engineer · San Francisco
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          I build LLM agents and the products around them: memory, MCP tooling, evals and
          human-approval loops. Latest:{" "}
          <a className={inlineLink} href="https://intern-brain.vercel.app" target="_blank" rel="noreferrer">
            Intern
          </a>
          , a shared memory layer for agents, and{" "}
          <a className={inlineLink} href="https://gamegold.vercel.app/" target="_blank" rel="noreferrer">
            GameGold
          </a>
          , an AI game design platform. I also make games. UW-Madison CS + Data Science, 2026.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="#projects" className="pixel-button">
            View Projects
          </Link>
          <a href={contactHref} className="pixel-nav">
            Contact Me
          </a>
        </div>
        <div className="mt-6 flex gap-3">
          {socialIcons.map((icon) => (
            <a
              key={icon.label}
              className="pixel-nav social-icon"
              href={icon.href}
              target="_blank"
              rel="noreferrer"
              aria-label={icon.label}
              title={icon.label}
            >
              <svg viewBox={icon.viewBox} width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d={icon.path} />
              </svg>
            </a>
          ))}
        </div>
      </section>

      <Section id="experience" title="Experience" kicker="Campaign History">
        <div className="grid gap-6">
          {experienceItems.map((item) => (
            <article key={`${item.org}-${item.title}`} className="info-card">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg uppercase">
                  {item.title} · <span className="text-[var(--accent-text)]">{item.org}</span>
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  {item.period} · {item.location}
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-base leading-7 text-[var(--muted)]">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>+ {bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects" kicker="Build Log">
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((card) => (
            <FeatureCard key={card.title} card={card} />
          ))}
        </div>
      </Section>

      <Section id="games" title="Games" kicker="Playable Work">
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredGames.map((card) => (
            <FeatureCard key={card.title} card={card} />
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills" kicker="Unlocked">
        <dl className="grid gap-4 text-base leading-7">
          {skillRows.map(([label, items]) => (
            <div key={label} className="sm:flex sm:gap-4">
              <dt className="w-32 shrink-0 uppercase text-[var(--accent-text)]">{label}</dt>
              <dd className="text-[var(--muted)]">{items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </SiteShell>
  );
}

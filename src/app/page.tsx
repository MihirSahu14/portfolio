import Link from "next/link";
import { FeatureCard } from "@/components/feature-card";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import {
  aboutCopy,
  featuredGames,
  featuredProjects,
  heroStats,
  homeHighlights,
  socialLinks,
} from "@/data/site";

export default function Home() {
  return (
    <SiteShell
      title="Mihir Sahu"
      eyebrow="Player One"
      description="Software Engineer + Game Designer"
      scene="scene-home"
      spriteKind="home"
    >
      <section className="hero-screen">
        <div className="hero-copy">
          <p className="pixel-eyebrow">Start Screen</p>
          <h2 className="mt-5 max-w-4xl text-5xl uppercase sm:text-6xl lg:text-7xl">
            I build software, systems, and game worlds.
          </h2>
          <p className="mt-8 max-w-2xl text-2xl leading-9 text-[var(--muted)]">
            My work sits between engineering and design. Sometimes that means AI and backend
            systems, sometimes it means mechanics, UI, and building things that people actually
            want to interact with.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/projects" className="pixel-button">
              PROJECTS
            </Link>
            <Link href="/games" className="pixel-button">
              GAMES
            </Link>
            <Link href="/about" className="pixel-button">
              ABOUT ME
            </Link>
          </div>
        </div>

        <aside className="hero-card">
          <p className="pixel-eyebrow">Quick Loadout</p>
          <div className="mt-6 grid gap-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="pixel-stat">
                <span className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                  {stat.label}
                </span>
                <strong className="text-sm uppercase sm:text-base">{stat.value}</strong>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t-4 border-dashed border-[var(--border)] pt-6">
            <p className="text-lg leading-8 text-[var(--muted)]">
              CS, game design, research, and product thinking all end up in the same place for me:
              making systems feel intentional.
            </p>
          </div>
        </aside>
      </section>

      <div className="mt-20 grid gap-8 lg:grid-cols-3">
        {homeHighlights.map((card) => (
          <FeatureCard key={card.title} card={card} />
        ))}
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-2">
        <Section title="Computer Science" kicker="Main Track">
          <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">{aboutCopy.cs}</p>
        </Section>
        <Section title="Game Design" kicker="Side Path">
          <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">{aboutCopy.games}</p>
        </Section>
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-2">
        <Section title="Featured Projects" kicker="Engineering">
          <div className="grid gap-5">
            {featuredProjects.slice(0, 2).map((card) => (
              <FeatureCard key={card.title} card={card} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/projects" className="pixel-button">
              SEE ALL PROJECTS
            </Link>
          </div>
        </Section>
        <Section title="Featured Games" kicker="Play">
          <div className="grid gap-5">
            {featuredGames.slice(0, 2).map((card) => (
              <FeatureCard key={card.title} card={card} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/games" className="pixel-button">
              SEE ALL GAMES
            </Link>
          </div>
        </Section>
      </div>

      <div className="mt-20" />
      <Section title="Contact" kicker="Open Channel">
        <div className="grid gap-4 md:grid-cols-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="pixel-card"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                {link.label}
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">{link.value}</p>
            </a>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}

import { FeatureCard } from "@/components/feature-card";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { featuredGames } from "@/data/site";

export default function GamesPage() {
  return (
    <SiteShell
      title="Games"
      eyebrow="Playable Work"
      description="This page is for the part of me that likes mechanics, mood, iteration, and building worlds that feel like they have rules."
      scene="scene-games"
      spriteKind="games"
    >
      <Section title="Game Design and Development" kicker="Bonus Stage">
        <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">
          My game work is where design and engineering blur together the most. I care about
          mechanics, pacing, player readability, and the technical decisions that make a game feel
          tighter instead of heavier.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {featuredGames.map((card) => (
            <FeatureCard key={card.title} card={card} />
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}

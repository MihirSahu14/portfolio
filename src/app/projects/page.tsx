import { FeatureCard } from "@/components/feature-card";
import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { featuredProjects } from "@/data/site";

export default function ProjectsPage() {
  return (
    <SiteShell
      title="Projects"
      eyebrow="Build Log"
      description="This is the software side of my work: products, AI tooling, backend systems, and experiments that start technical and end up user-facing."
      scene="scene-projects"
      spriteKind="projects"
    >
      <Section title="Software, AI, and Product Work" kicker="Main Quest">
        <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">
          I wanted this page separate from my games page so the engineering work has room to stand
          on its own. These projects are where I explore architecture, APIs, data flow, and
          shipping something that feels coherent.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((card) => (
            <FeatureCard key={card.title} card={card} />
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}

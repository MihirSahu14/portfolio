import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { aboutCopy, skills } from "@/data/site";

export default function AboutPage() {
  return (
    <SiteShell
      title="About Me"
      eyebrow="Character Select"
      description="I care about good systems, good interfaces, and work that has an actual point to it."
      scene="scene-about"
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Section title="How I Think" kicker="Origin Story">
          <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">
            <p>{aboutCopy.intro}</p>
            <p>{aboutCopy.cs}</p>
            <p>{aboutCopy.games}</p>
          </div>
        </Section>

        <Section title="Skill Tree" kicker="Unlocked">
          <div className="space-y-7">
            <SkillBlock title="Engineering" items={skills.engineering} />
            <SkillBlock title="Game Development" items={skills.gameDev} />
            <SkillBlock title="AI + Research" items={skills.ai} />
          </div>
        </Section>
      </div>
    </SiteShell>
  );
}

function SkillBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-lg uppercase">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="pixel-tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

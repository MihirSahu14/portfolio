import { Section } from "@/components/section";
import { SiteShell } from "@/components/site-shell";
import { socialLinks } from "@/data/site";

export default function ContactPage() {
  return (
    <SiteShell
      title="Contact"
      eyebrow="Open Channel"
      description="If you want to talk software, games, design, or just something interesting to build, reach out."
      scene="scene-contact"
    >
      <Section title="Reach Out" kicker="Transmission">
        <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Email is the best way to reach me right now, and the links below are the fastest way to
          see what I am building.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
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

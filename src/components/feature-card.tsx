import { FeatureCard as FeatureCardType, githubPath } from "@/data/site";

export function FeatureCard({ card }: { card: FeatureCardType }) {
  const links = [
    { label: "Demo", url: card.href, icon: <span aria-hidden="true">{"▶︎"}</span> },
    {
      label: "Code",
      url: card.code,
      icon: (
        <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
          <path d={githubPath} />
        </svg>
      ),
    },
  ].filter((link) => link.url);

  // Boxed only when it has something to click; the buttons inside are the click targets.
  return (
    <article className={`${links.length ? "pixel-card" : "info-card"} h-full`}>
      <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent-text)]">
        {card.subtitle}
      </p>
      <h3 className="mt-4 text-xl uppercase">{card.title}</h3>
      <p className="mt-4 text-base leading-8 text-[var(--muted)]">{card.description}</p>
      {links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              className="pixel-nav gap-2"
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${card.title} ${link.label.toLowerCase()}`}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

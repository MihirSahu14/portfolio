import { FeatureCard as FeatureCardType } from "@/data/site";

export function FeatureCard({ card }: { card: FeatureCardType }) {
  const content = (
    <>
      <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
        {card.subtitle}
      </p>
      <h3 className="mt-4 text-xl uppercase">{card.title}</h3>
      <p className="mt-4 text-base leading-8 text-[var(--muted)]">{card.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {card.tags.map((tag) => (
          <span key={tag} className="pixel-tag">
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  if (card.href) {
    const isExternal = card.href.startsWith("http");

    return (
      <a
        className="pixel-card block h-full"
        href={card.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        aria-label={`Open ${card.title}`}
      >
        {content}
      </a>
    );
  }

  return (
    <article className="pixel-card h-full">
      {content}
    </article>
  );
}

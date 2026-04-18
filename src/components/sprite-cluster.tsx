type SpriteItem = {
  src: string;
  alt: string;
  className: string;
};

const spriteSets: Record<string, SpriteItem[]> = {
  home: [
    { src: "/art/sprites/cloud.svg", alt: "", className: "sprite cloud-a" },
    { src: "/art/sprites/cloud.svg", alt: "", className: "sprite cloud-b" },
  ],
  projects: [
    { src: "/art/sprites/tech-monitor.svg", alt: "", className: "sprite tech-a" },
    { src: "/art/sprites/tech-chip.svg", alt: "", className: "sprite tech-b" },
    { src: "/art/sprites/tech-rocket.svg", alt: "", className: "sprite tech-c" },
  ],
  games: [
    { src: "/art/sprites/game-controller.svg", alt: "", className: "sprite game-a" },
    { src: "/art/sprites/game-slime.svg", alt: "", className: "sprite game-b" },
    { src: "/art/sprites/game-sword.svg", alt: "", className: "sprite game-c" },
  ],
  default: [
    { src: "/art/sprites/cloud.svg", alt: "", className: "sprite cloud-a" },
  ],
};

export function SpriteCluster({ kind = "default" }: { kind?: string }) {
  const sprites = spriteSets[kind] ?? spriteSets.default;

  return (
    <div className="sprite-layer" aria-hidden="true">
      {sprites.map((sprite, index) => (
        <img
          key={`${sprite.src}-${index}`}
          src={sprite.src}
          alt={sprite.alt}
          className={sprite.className}
        />
      ))}
    </div>
  );
}

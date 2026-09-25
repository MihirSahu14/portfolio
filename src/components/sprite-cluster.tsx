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

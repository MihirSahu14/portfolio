import { ReactNode } from "react";

export function Section({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker: string;
  children: ReactNode;
}) {
  return (
    <section className="pixel-panel section-panel">
      <p className="pixel-eyebrow">{kicker}</p>
      <h2 className="mt-2 text-2xl uppercase sm:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

import { ReactNode } from "react";

export function Section({
  id,
  title,
  kicker,
  children,
}: {
  id?: string;
  title: string;
  kicker: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-6 pt-14 sm:pt-20">
      <p className="pixel-eyebrow">{kicker}</p>
      <h2 className="mt-2 text-2xl uppercase sm:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

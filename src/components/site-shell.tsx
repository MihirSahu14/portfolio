import Link from "next/link";
import { ReactNode } from "react";
import { navItems, resumeLink, socialLinks } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { SpriteCluster } from "@/components/sprite-cluster";

export function SiteShell({
  title,
  eyebrow,
  description,
  scene = "scene-default",
  spriteKind = "default",
  children,
}: {
  title: string;
  eyebrow: string;
  description?: string;
  scene?: string;
  spriteKind?: string;
  children: ReactNode;
}) {
  return (
    <div className={`scene min-h-screen text-[var(--text)] ${scene}`}>
      <div className="scene-backdrop" aria-hidden="true">
        <div className="scene-atmosphere" />
        <div className="scene-celestial">
          <div className="scene-moon" />
          <div className="scene-sun" />
        </div>
      </div>
      <div className="scene-stars pointer-events-none fixed inset-0" />
      <SpriteCluster kind={spriteKind} />
      <div className="scene-content relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <header className="site-header mb-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="pixel-eyebrow">{eyebrow}</p>
              <h1 className="mt-4 text-3xl uppercase sm:text-4xl">{title}</h1>
              {description ? (
                <p className="mt-5 max-w-2xl text-xl leading-8 text-[var(--muted)]">{description}</p>
              ) : null}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <ThemeToggle />
              <Link className="pixel-button" href={resumeLink.href}>
                RESUME
              </Link>
              <a className="pixel-button" href="mailto:mihirs1410@gmail.com">
                CONTACT
              </a>
            </div>
          </div>
          <nav className="mt-8 flex flex-wrap gap-3">
            {navItems.map((item) => (
              <Link key={item.href} className="pixel-nav" href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="site-footer mt-14">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm text-[var(--muted)]">
              I build software, games, and systems that are meant to be explored.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  download={link.download}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="pixel-nav"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

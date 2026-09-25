import Link from "next/link";
import { ReactNode } from "react";
import { navItems, resumeLink, socialLinks } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { SpriteCluster } from "@/components/sprite-cluster";

export function SiteShell({
  scene = "scene-default",
  spriteKind = "default",
  children,
}: {
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
      <div className="scene-content relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <header className="site-header">
          <nav className="flex flex-wrap items-center gap-2 sm:justify-end">
            {navItems.map((item) => (
              <Link key={item.href} className="pixel-nav section-link" href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="pixel-button" href={resumeLink.href}>
              Resume
            </Link>
            <ThemeToggle />
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="site-footer mt-16 flex flex-wrap gap-3 border-t-2 border-dashed border-[var(--border)] pt-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="pixel-nav"
            >
              {link.label}
            </a>
          ))}
        </footer>
      </div>
    </div>
  );
}

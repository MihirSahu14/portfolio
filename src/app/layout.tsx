import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mihir Sahu | AI Engineer",
  description:
    "Mihir Sahu, AI engineer in San Francisco. Builds LLM agents, MCP tooling and full-stack AI products. UW-Madison CS + Data Science, 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-scroll-behavior="smooth"
      className="h-full scroll-smooth"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

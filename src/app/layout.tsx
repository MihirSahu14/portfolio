import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mihir Sahu | Software Engineer and Game Developer",
  description:
    "Portfolio for Mihir Sahu, a UW-Madison Computer Science and Game Design student building software systems and game experiences.",
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

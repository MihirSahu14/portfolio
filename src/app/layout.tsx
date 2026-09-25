import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Mihir Sahu | AI Engineer";
const description =
  "Mihir Sahu, AI engineer in San Francisco. Builds LLM agents, MCP tooling and full-stack AI products. UW-Madison CS + Data Science, 2026.";

// openGraph tags are what LinkedIn/Slack read to build link previews
export const metadata: Metadata = {
  metadataBase: new URL("https://www.mihirsahu.dev"),
  title,
  description,
  openGraph: { title, description, url: "/", siteName: "Mihir Sahu", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b1020" },
    { media: "(prefers-color-scheme: light)", color: "#b9d9f2" },
  ],
};

// Runs before paint so the saved/system theme applies without a flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t!=="dark"&&t!=="light")t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=t}catch(e){}`;

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
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

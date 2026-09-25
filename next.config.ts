import type { NextConfig } from "next";

// Old multi-page URLs now point at sections of the one-page home.
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#skills", permanent: true },
      { source: "/experience", destination: "/#experience", permanent: true },
      { source: "/projects", destination: "/#projects", permanent: true },
      { source: "/games", destination: "/#games", permanent: true },
      { source: "/contact", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;

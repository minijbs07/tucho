import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Si vas a usar github pages SIN dominio personalizado (es decir, en minijbs07.github.io/tucho),
  // descomenta la siguiente línea:
  basePath: "/tucho",
};

export default nextConfig;
// Force deploy update

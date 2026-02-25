import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/proxy/ds/:path*",
        destination: "https://nextstaging.aspirelearning.app/api/ds/:path*",
      },
    ];
  },
};

export default nextConfig;

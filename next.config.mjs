/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 2678400,
    // formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "newmodels.io",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "assets.newmodels.io",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "assets.wkk.pyw.mybluehost.me",
        port: "",
        pathname: "**",
      },
    ],
  },
}

export default nextConfig

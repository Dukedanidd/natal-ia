/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      // NextJS <Image> component needs to whitelist domains for src={}
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;

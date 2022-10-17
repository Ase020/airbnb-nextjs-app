/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiYXNlam5yIiwiYSI6ImNsOWNuZjlsajAxZXMzeHFydmh0YWdkZW0ifQ.HdVuQbtp9t6uGI1JGQ1lcg",
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    clientId: process.env.clientId,
    authority: process.env.authority,
    clientSecret: process.env.clientSecret,
    redirectUri: process.env.redirectUri,
  },
  appDir: true,
};

module.exports = nextConfig

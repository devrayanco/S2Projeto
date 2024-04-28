/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cantao.vteximg.com.br',
          },
        ],
      },
};

export default nextConfig;

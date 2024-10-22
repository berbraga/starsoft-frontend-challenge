/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ['softstar.s3.amazonaws.com'], // Adicione o domínio aqui
  },
};

export default nextConfig;

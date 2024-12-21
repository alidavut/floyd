import { NextConfig } from 'next';
import routes from './routes';

const nextConfig: NextConfig = {
  transpilePackages: ['@floyd/schema'],
  pageExtensions: ['page.tsx'],
  useFileSystemPublicRoutes: false,
  rewrites: async () => routes
}

export default nextConfig;

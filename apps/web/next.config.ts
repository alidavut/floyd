import { NextConfig } from 'next';
import routes from './routes';

const nextConfig: NextConfig = {
  transpilePackages: ['@floyd/ui'],
  pageExtensions: ['page.tsx'],
  useFileSystemPublicRoutes: false,
  rewrites: async () => routes
}

export default nextConfig;

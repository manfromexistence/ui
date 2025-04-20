import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/components',
        destination: '/docs/components/avatar-group',
        permanent: true,
      },
      {
        source: '/components/:path*',
        destination: '/docs/components/:path*',
        permanent: true,
      },
      {
        source: '/docs/components',
        destination: '/docs/components/avatar-group',
        permanent: true,
      },
      {
        source: '/r/:path([^.]*)',
        destination: '/r/:path.json',
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);

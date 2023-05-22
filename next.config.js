// module.exports = {
//   resolve: {
//     modules: ['node_modules', './dashboard/src/components/MDBox']
//   },
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.module.rules.push({
//         test: /dashboard/,
//         loader: 'ignore-loader'
//       });
//     }
//     return config;
//   }  // Other Next.js config options...
// };

// const path = require('path');

// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.alias = {
//         ...(config.resolve.alias || {}),
//         'components': path.resolve(__dirname, 'dashboard/src/components'),
//       };
//     }
//     return config;
//   },
// };

// const { DASHBOARD_URL } = process.env.DASHBOARD_URL;

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: "/dashboard",
//         destination: `http://localhost:8000/dashboard`,
//       },
//     ];
//   },
// };

const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles1')],
  },
  images: {
    domains: ['img.pokemondb.net'],
  },
}

module.exports = nextConfig


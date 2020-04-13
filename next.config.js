/* eslint-disable */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const path = require('path');

const nextConfig = {
  distDir: 'build',
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }
    config.resolve.alias.images = path.join(__dirname, 'images');
    return config;
  },
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
      },
    ],

    // your other plugins here
  ],
  nextConfig,
);

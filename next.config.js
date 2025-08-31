// next.config.js
module.exports = {
  output: 'export',                // enables `next export`
  basePath: '/bodhmantr',          // project pages live under /bodhmantr
  assetPrefix: '/bodhmantr/',      // ensures assets load from the same subpath
  images: { unoptimized: true },   // needed for static export if you use next/image
  trailingSlash: true,             // helps with GitHub Pages and static hosting
};

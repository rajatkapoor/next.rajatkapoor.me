// next.config.js
// module.exports = {
//   images: {
//     domains: ["source.unsplash.com"],
//   },
// };

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
  images: {
    domains: ["source.unsplash.com"],
  },
});

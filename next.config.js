const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? "/utk-web" : "",
  basePath: isProd ? "/utk-web" : "",
  webpack(config) {
    config.module.rules.push({
      test: /\.wasm$/,
      loaders: ["wasm-loader"],
    });
    return config;
  },
};

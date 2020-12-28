const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? "/utk-web" : "",
  basePath: isProd ? "/utk-web" : "",
  webpack(config) {
    config.module.rules.push({
      test: /\.go$/,
      loader: "golang-wasm-async-loader2",
    });
    config.node.fs = "empty";
    return config;
  },
};

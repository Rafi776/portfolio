const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export", // Required for static hosting
  basePath: "/portfolio", // Set to your repo name
  assetPrefix: isProd ? "/portfolio/" : "",
};

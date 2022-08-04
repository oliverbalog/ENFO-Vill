const webpack = require("webpack");
const SitemapPlugin = require("sitemap-webpack-plugin").default;
const paths = [
  {
    path: "/#/",
    lastmod: "2022-08-01",
    priority: 1.0,
    changefreq: "yearly",
  },
  {
    path: "/#/Energyopt",
    lastmod: "2022-08-01",
    priority: 0.9,
    changefreq: "yearly",
  },
  {
    path: "/#/system_improve",
    lastmod: "2022-08-01",
    priority: 0.9,
    changefreq: "yearly",
  },
  {
    path: "/#/smarthome",
    lastmod: "2022-08-01",
    priority: 0.9,
    changefreq: "yearly",
  },
  {
    path: "/#/boiler",
    lastmod: "2022-08-01",
    priority: 0.9,
    changefreq: "yearly",
  },
  {
    path: "/#/electric",
    lastmod: "2022-08-01",
    priority: 0.9,
    changefreq: "yearly",
  },
];

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6,
      }),
      new SitemapPlugin({ base: "https://enfo-vill.hu", paths }),
    ],
  },
  pwa: {
    name: "Vue Argon Design",
    themeColor: "#172b4d",
    msTileColor: "#172b4d",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#172b4d",
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== "production",
  },
  publicPath: "/",
};

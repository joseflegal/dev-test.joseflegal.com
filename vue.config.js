const path = require("path");
// vue.config.js
module.exports = {
  // options...
  devServer: {
    port: 9001,
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    },
    changeOrigin: true,
    proxy: {
      "/api": {
        target: "http://localhost:8485",
      },
    },
  },
  publicPath: "/",
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          // Provide path to the file with resources
          resources: "./src/styles/_resources.scss",
        })
        .end();
    });
  },
  runtimeCompiler: true,
  pluginOptions: {
    // https://stackoverflow.com/questions/53040086/webpack-bundle-analyzer-openanalyzer-option-not-working
    webpackBundleAnalyzer: {
      analyzerMode: "disabled",
    },
  },
};

import OptimizeCssAssetsWebpackPlugin from "optimize-css-assets-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { Configuration } from "webpack";
import configFn from "./webpack.config.base";

const config: Configuration = configFn();
config.mode = "production";
config.optimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        mangle: true,
        output: {
          ecma: 5,
          webkit: true,
        },
      },
      sourceMap: true,
    }),
    new OptimizeCssAssetsWebpackPlugin({}),
  ],
  splitChunks: {
    chunks: "all",
  }
};

export default config;

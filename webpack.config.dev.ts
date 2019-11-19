import { Configuration } from "webpack";
import configFn from "./webpack.config.base";

const config: Configuration = configFn();
config.mode = "development";
config.optimization = {
  minimize: false,
  minimizer: [],
  splitChunks: {
    chunks: "all",
  }
};

export default config;

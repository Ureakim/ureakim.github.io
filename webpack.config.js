const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    "alias": {
      "react": "preact/compat",
      "react-dom": "preact/compat",
    }
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    port: 1337,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin({
      cleanBeforeEveryBuildPatterns: [path.join(__dirname, "dist")],
    }),
    new HtmlWebpackPlugin({
      title: "Mickaël Da-Ponte",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [process.env.NODE_ENV !== 'production'
          ? 'style-loader'
          : MiniCssExtractPlugin.loader
          , "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|ttf)$/,
        use: ["file-loader"],
      },
    ],
  }
};

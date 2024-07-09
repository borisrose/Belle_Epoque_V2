const HtmlPlugin = require("html-webpack-plugin");

const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");

module.exports = {
  entry: "./main.ts",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  mode: "development",
  // watchOptions: {
  //   ignored: /node_modules/
  // },
  // watch: true,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|git|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext][query]"
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "assets",
          to: "assets"
        },
        {
          from: "data",
          to: "data"
        }
      ]
    }),

    new HtmlPlugin({
      template: "index.html"
    })
  ]
};

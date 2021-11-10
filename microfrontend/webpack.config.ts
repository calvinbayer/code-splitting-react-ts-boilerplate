import * as HtmlWebPackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/standalone/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  devServer: {
    port: 8081,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/standalone/index.html",
    }),
  ],
};

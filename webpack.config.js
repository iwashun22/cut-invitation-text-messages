const path = require('path');

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "page/index.js"),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css/, 
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "page/dist"),
    filename: "bundle.js"
  }
}
'use strict';

/* eslint-disable sort-keys */

const path = require(`path`);
const ExtractTextPlugin = require(`extract-text-webpack-plugin`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);

module.exports = {
  entry: {bundle: `./src/index.js`},
  output: {
    filename: `scripts/[name].js`,
    path: path.resolve(__dirname, `./dist`)
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: `style-loader`,
          use: `css-loader`
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(`styles/main.css`),
    new CopyWebpackPlugin([
      {
        context: `./src`,
        from: `_locales/**/*`
      },
      {
        context: `./src`,
        from: `images/icon-48.png`
      },
      {
        context: `./src`,
        from: `manifest.json`
      },
      {
        context: `./src`,
        from: `scripts/background.js`,
        to: `scripts`
      }
    ])
  ]
};

/* eslint-disable sort-keys */

import path from 'path';

import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const config = {
  entry: {bundle: `./src/index.js`},
  output: {
    filename: `scripts/[name].js`,
    path: path.resolve(__dirname, `./dist`)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {loader: `babel-loader`}
      },
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
        from: `images/**/*`
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

export default config;

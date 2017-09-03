'use strict';

/* eslint-disable sort-keys */

const path = require(`path`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);

module.exports = {
  entry: {bundle: `./src/index.js`},
  output: {
    filename: `scripts/[name].js`,
    path: path.resolve(__dirname, `./dist`)
  },
  plugins: [
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
      },
      {
        context: `./src`,
        from: `styles/**/*.css`
      }
    ])
  ]
};

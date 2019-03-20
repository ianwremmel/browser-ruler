/* eslint-disable sort-keys */
/* eslint-env node */

const path = require(`path`);

const CopyWebpackPlugin = require(`copy-webpack-plugin`);

module.exports = {
  entry: {bundle: `./src/index.ts`},
  devtool: 'inline-sourcemap',
  output: {
    filename: `scripts/[name].js`,
    path: path.resolve(__dirname, `./dist`),
  },
  mode: process.env.NODE_ENV === `production` ? `production` : `development`,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]s$/,
        use: {loader: `babel-loader`},
      },
      {
        test: /\.css$/,
        use: [`style-loader`, `css-loader`],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: `./src`,
        from: `_locales/**/*`,
      },
      {
        context: `./src`,
        from: `images/**/*`,
      },
      {
        context: `./src`,
        from: `manifest.json`,
      },
      {
        context: `./src`,
        from: `scripts/background.js`,
        to: `scripts`,
      },
    ]),
  ],
};

/* eslint-enable sort-keys */

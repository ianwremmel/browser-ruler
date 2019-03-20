/* eslint-disable sort-keys */

const path = require(`path`);

const CopyWebpackPlugin = require(`copy-webpack-plugin`);

module.exports = {
  entry: {bundle: `./src/index.js`},
  devtool: 'inline-sourcemap',
  output: {
    filename: `scripts/[name].js`,
    path: path.resolve(__dirname, `./dist`)
  },
  mode: process.env.NODE_ENV === `production` ? `production` : `development`,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {loader: `babel-loader`}
      },
      {
        test: /\.css$/,
        use: [`style-loader`, `css-loader`]
      }
    ]
  },
  plugins: [
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

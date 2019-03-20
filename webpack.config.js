/* eslint-disable sort-keys */

const path = require(`path`);

const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const ExtractTextPlugin = require(`extract-text-webpack-plugin`);

module.exports = {
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

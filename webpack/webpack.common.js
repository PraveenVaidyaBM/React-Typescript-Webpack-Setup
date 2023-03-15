const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'), // app entry points
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // resolving file import errors with extension
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader', // using babel loader tranpiling files excluding node modules
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i, // images extension allowed
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, // asset inline module is used to render fonts and svg's
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js', // storing bundled file inside build folder with in bundle.js file
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
      // inject bundle.js file inside the index.html file and place that html file in build folder
    }),
    new CopyPlugin({
      patterns:[{from:"source",to:"dest"}]
    })
  ],
  stats: 'errors-only',
}
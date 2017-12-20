const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    jsonpFunction: 'exampleJsonpFunctionName',
  },

  module: {
    rules: [
      // use bable
      { test: /\.js?$/, use: 'babel-loader', exclude: /node_modeules/ },
      // use typescript
      // { test: /\.tsx?$/, use: 'awesome-typescript-loader', exclude: /node_modlues/ },
    ],
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      // minChunks: Infinity, or
      minChunks: module => {
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    })
  ],
  
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  }
};
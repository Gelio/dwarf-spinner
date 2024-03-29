const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CONFIG = {
  distPath: path.resolve(__dirname, 'dist'),
  srcPath: path.resolve(__dirname, 'src'),
  glslLoaderPath: path.resolve('loaders', 'glsl-loader.js')
};

module.exports = {
  entry: {
    bundle: './src/index',
  },
  output: {
    path: CONFIG.distPath,
    filename: '[name].js'
  },
  devServer: {
    contentBase: CONFIG.distPath
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.ts$/,
        use: ['ts-loader', 'tslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.glsl$/,
        use: ['raw-loader', CONFIG.glslLoaderPath]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      CONFIG.srcPath,
      'node_modules'
    ]
  },
  plugins: [
    new CopyPlugin([{ from: 'public' }]),
    new ExtractTextPlugin('styles.css')
  ]
};

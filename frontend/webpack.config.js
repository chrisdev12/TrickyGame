const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const webpackConfig = (webpackConfigEnv, options) => {
  const goal = webpackConfigEnv.goal || 'dev';
  const mode = options.mode || 'development';
  const envVars = require(`./config/env/${goal}.env`);

  return {
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    mode,
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          include: path.resolve(__dirname, 'src'),
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          include: path.resolve(__dirname, 'src'),
        },
        {
          test: /\.(sc|c)ss$/,
          use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.svg/,
          type: 'asset/inline',
        },
        {
          test: /\.(jpg|png|svg)$/,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlPlugin({
        template: './public/index.html',
        filename: './index.html',
      }),
      new MiniCSSExtractPlugin({
        filename: 'assets/[name].css',
      }),
      new webpack.EnvironmentPlugin(envVars),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*'],
      }),
    ],
    optimization: {
      minimize: mode === 'development' ? false : true,
      minimizer: [new CssMinimizerPlugin()],
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
      },
    },
    devServer: {
      host: 'local-ip', //Enable local network access
      static: path.join(__dirname, 'dist'),
      compress: true,
      port: 3005,
      open: true,
    },
  };
};

module.exports = webpackConfig;

const path = require('path');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function createWebpackConfig({ ssr }) {
  return {
    mode: 'development',
    devtool: 'source-map',
    entry: `./src/index.${ssr ? 'server' : 'client'}.js`,
    output: {
      path: path.join(process.cwd(), 'public', ssr ? 'bundles-ssr' : 'bundles'),
      filename: '[name].[contenthash:8].bundle.js',
      ...(ssr
        ? { libraryTarget: 'commonjs' }
        : { publicPath: '/public/bundles/' }),
    },
    ...(ssr ? { target: 'node' } : {}),
    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)$/,
          exclude: [/node_modules/],
          loader: require.resolve('babel-loader'),
          ...(ssr
            ? {
                options: {
                  caller: {
                    target: 'node',
                  },
                },
              }
            : {}),
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new StatsWriterPlugin({
        filename: 'entrypoints.json',
        fields: ['entrypoints', 'assets'],
      }),
      ...(ssr ? [] : [new LoadablePlugin()]),
    ],
  };
}

module.exports = [
  createWebpackConfig({ ssr: false }),
  createWebpackConfig({ ssr: true }),
];

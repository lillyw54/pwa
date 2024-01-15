const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      }),
      new WebpackPwaManifest({
        name: 'Your Text Editor',
        short_name: 'Text Editor',
        description: 'A progressive web application for note-taking and code snippets.',
        background_color: '#ffffff',
        theme_color: '#000000',
        start_url: '/',
        icons: [
          {
            src: path.resolve('src/icons/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512],
          },
        ],
      }),
      new InjectManifest({
        swSrc: './src/sw.js', // Path to your service worker file
        swDest: 'service-worker.js',
      }),
    ],

    module: {
      rules: [
        // Add your CSS loader configuration here if needed
        // Add your Babel loader configuration here if needed
      ],
    },
  };
};

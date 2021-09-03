const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

module.exports = {

  entry: './src/js/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '',
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
        }
    },

      {
        test: /\.js$/,
        use: [
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/, 
        use: [
          {
        loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader', 
          },
          {
            loader: 'postcss-loader',
          },
          {

            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
      
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
  ],

  // Par défaut, le mode de Webpack est "production". En fonction de ce qui est
  // écrit ici, tu pourras appliquer différentes méthodes dans ton bundle final.
  // Pour le moment, nous avons besoin du mode "développement", car nous n'avons,
  // par exemple, pas besoin de minifier notre code.
  mode: 'development',
};
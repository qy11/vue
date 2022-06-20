const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { VueLoaderPlugin } = require('vue-loader');
const autoprefixer = require('autoprefixer');

/**
 * 2.6 -> vue-loader   npm i vue-loader -D
 * 3   -> vue-loader@next npm i vue-loader@next -D
 */

/**
 * 1、webpack各种依赖之间的版本兼容问题非常大
 * 2、webpack性能优化是很困难
 * 3、复杂配置的上手很困难
 */

/**
 * sass less -> sass sass-loader
 * postcss postcss-loader -> autoprefixer
 * css-loader: 模块化解析
 * vue-style-loader
 */

const _ = './15.vue/';

module.exports = {
  mode: 'development',
  entry: _ + 'src/main.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  externals: {
    'vue': 'Vue'
  },
  // resolve: {
  //   alias: {
  //     'vue$': 'vue/dist/vue.esm.js'
  //   }
  // },
  resolve: {
    extensions: ['.js', '.jsx', '.vue']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    overrideBrowserslist: [
                      "> 1%",
                      "last 2 versions"
                    ]
                  })
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    overrideBrowserslist: [
                      "> 1%",
                      "last 2 versions"
                    ]
                  })
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, _ + 'public/index.html')
    })
  ]
}
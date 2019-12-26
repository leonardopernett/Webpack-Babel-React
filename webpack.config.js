const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const MiniCssExtractPlugin =  require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV != 'production'


module.exports = {
    entry: './src/app/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },
    mode:'development',

    module: {
      rules: [
        {  test: /\.(js|jsx)$/, 
           use: ['babel-loader'], 
           exclude:/node_modules/
        },
        {
          test: /\.css$/,
          use :[
            devMode ? 'style-loader':MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        }

      ]
    },

    plugins: [
      new HtmlWebpackPlugin({template: './src/index.html'}),
      new MiniCssExtractPlugin({template: './src/app/index.css', filename:'bundle.css'}),

    ]
   
}
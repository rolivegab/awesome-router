const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const nanoid = require('nanoid')
const fs = require('fs')

// clean dist folder
const distDir = path.resolve(__dirname, 'dist')
fs.readdir(distDir, (err, files) => {
  if (err) {
    return
  }

  files.forEach(i => {
    fs.unlink(path.resolve(distDir, i), (err) => {
      if (err) {
        console.error(err)
      }
    })
  })
})

const hash = nanoid()

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: `main.${hash}.js`,
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: path.resolve(__dirname, 'assets/template/index.ejs'),
      templateParameters: {
        hash: hash,
        title: 'My app'
      },
      inject: false
    })
  ],
})

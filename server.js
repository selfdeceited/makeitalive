const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')
const express = require('express')

const app = new express()
const port = 3000

const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
     noInfo: true,
     publicPath: webpackConfig.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.get("/", (req, res) => res.sendFile(__dirname + '/index.html'))

app.listen(port, error => {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

module.exports = app;
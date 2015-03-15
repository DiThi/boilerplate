var WebpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')

var config = require('./webpack.config.js')
config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()//,
    // new webpack.SourceMapDevToolPlugin(
    //     'bundle.js.map', null,
    //     "[absolute-resource-path]", "[absolute-resource-path]")
)

config.devtool = 'inline-source-map';

config.entry.unshift(
    'webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/only-dev-server'
)

var server = new WebpackDevServer(webpack(config), {
    contentBase: "dist",
    hot: true,
    lazy: false,
    watchDelay: 300,
    stats: { colors: true }
})

console.log('Go to http://127.0.0.1:8080/dist')
server.listen(8080, 'localhost', function() {})

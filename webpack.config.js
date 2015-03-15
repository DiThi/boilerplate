'use strict'

var webpack = require('webpack')

module.exports = {
    cache: true,
    debug: true,
    entry: [
        './src/main.coffee',
    ],
    stats: {
        colors: true,
        reasons: true
    },
    module: {
        loaders: [
            { test: /\.coffee$/, loaders: [
                // Install react-hot-loader for reloading react components
                // 'react-hot',
                'coffee-loader',
                'source-map-loader'
            ] }
        ]
    },
    output: {
        path: __dirname + "/dist",
        // Change these to the desired file name and module name
        filename: "boilerplate.js",
        library: "Boilerplate"
    },
    plugins: [
    ],
}

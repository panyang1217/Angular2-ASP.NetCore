var webpack = require('webpack');
var webpackMerge = require('webpack-merge');

var common = require('./webpack.common.js');

// referenced: https://webpack.js.org/guides/production-build/
module.exports = webpackMerge(common, {
    entry: {
        'app-index': './src/index.html'
    },
    output: {
        path: './build/dev'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
})
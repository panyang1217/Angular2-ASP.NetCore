var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var htmlPlugin = require('html-webpack-plugin');

var common = require('./webpack.common.js');

// referenced: https://webpack.js.org/guides/production-build/
module.exports = webpackMerge(common, {
    output: {
        path: './build/dev'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new htmlPlugin({
            template: './src/index-dev.html'
        })
    ]
})
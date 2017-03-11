var webpack = require('webpack');
var webpackMerge = require('webpack-merge');

var common = require('./webpack.common.js');

// referenced: https://webpack.js.org/guides/production-build/
module.exports = webpackMerge(common, {
    output: {
        path: './build/dist'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            //sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0),
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ]
})
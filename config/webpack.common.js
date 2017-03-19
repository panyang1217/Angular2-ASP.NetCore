var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// Webpack Config
var webpackConfig = {
	entry: {
		'polyfills': './src/polyfills.ts',
		'vendor': './src/vendor.ts',
		'app': './src/main.ts'
	},

	devtool: 'source-map',
	cache: true,
	output: {
		filename: '[name].bundle.js',
		sourceMapFilename: '[name].map',
		chunkFilename: '[id].chunk.js'
	},

	resolve: {
		extensions: ['.ts', '.js']
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'vendor', 'polyfills', 'manifest'], minChunks: Infinity }),
		new ExtractTextPlugin("[name]-style.css")
	],

	module: {
		rules: [
			// .ts files for TypeScript
			{
				test: /\.ts$/,
				loaders: ['ts-loader', 'angular2-template-loader']
			},
			{
				test: /\.(html|css)$/,
				loader: 'raw-loader'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" })
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader!less-loader" })
			},
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
			{ test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?prefix=font/&limit=5000" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
		]
	}

};

var webpackMerge = require('webpack-merge');
module.exports = webpackMerge(webpackConfig);
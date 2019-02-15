const webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	path = require('path');

const SRC = path.resolve(__dirname, 'src'),
	NODE_MODULES = path.resolve(__dirname, 'node_modules'),
	JS = path.resolve(__dirname, 'src/js'),
	BUILD = path.resolve(__dirname, 'build');

module.exports = {
	context: path.resolve(__dirname),
	devtool: 'source-map',
	entry: {
		js: ['@babel/polyfill', './src/js/index.js']
	},
	output: {
		pathinfo: true,
		filename: '[name][hash].js',
		publicPath: '/',
		path: BUILD
	},
	resolve: {
		extensions: ['.jsx', '.js', '.json'],
		modules: [SRC, NODE_MODULES, JS]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.s?css/,
				include: [NODE_MODULES, SRC],
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: '[name].css'
		}),
		new HtmlWebpackPlugin({
			minify: {
				collapseWhitespace: true,
				removeComments: true
			},
			favicon: './public/favicon.ico',
			inject: false,
			template: './public/index.html'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			API_BASE_URL: JSON.stringify('http://localhost:4000')
		})
	],
	devServer: {
		port: 3000,
		hot: true,
		inline: true,
		disableHostCheck: true,
		historyApiFallback: true,
		proxy: [
			{
				context: ['/auth', '/api'],
				target: 'http://localhost:4000'
			}
		],
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
		}
	}
};

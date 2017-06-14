var webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

console.log('in webpack');

module.exports = {
	devtool : "cheap-source-map",
	entry : {
		// polyfills : './src/app/polyfills.ts',
		vendor : './client/app/vendor.ts',
		app : './client/app/app.ts',
	},
	output : {
		path : path.resolve(__dirname, "dist"),
		filename : 'js/[name].js',
		chunkFilename : '[id].chunk.js',
		sourceMapFilename : "js/[name].js.map"
	},
	resolve : {
		enforceExtension: false,
		enforceModuleExtension: false,
		extensions : [ '.js', '.ts' ],
		alias : {
			'webworkify' : 'webworkify-webpack'
		}
	},
	node : {
		fs : "empty"
	},
	module : {
		rules : [
				{
					test : /\.ts$/,
					use : [ 'awesome-typescript-loader',
							'angular2-template-loader' ]
				},
				{
					test : /\.html$/,
					use : ['html-loader']
				},
				{
					test : /\.(woff|woff2|ttf|eot|svg)$/,
					use : ['file-loader?name=/assets/fonts/[name].[ext]']
				},
				{
					test : /\.(png|jpe?g|gif)$/i,
					use : ['file-loader?name=/assets/images/[name].[ext]']
				},
				/*{
					test : /\.css$/,
					exclude : './ui/app',
					use :  ExtractTextPlugin.extract({
							fallback: "style-loader",
					        use: "css-loader?sourceMap",
					})
				},
				{
					test : /\.css$/,
					include : './ui/app',
					use : ['raw']
				}*/
				{
					test: /\.css$/,
					use: ['to-string-loader'].concat(
						ExtractTextPlugin.extract({fallback: "style-loader", use: ['css-loader?sourceMap']}))
				}]

	},
	plugins : [
	           
	/*
	 * new UglifyJsPlugin({ sourceMap: true, compress: { warnings: true } }),
	 */
	new webpack.optimize.CommonsChunkPlugin({
		name : [ 'vendor', 'app' ]
	}),

	new HtmlWebpackPlugin({
		filename : 'index.html',
		template : './client/index.html'
	}),

	new ExtractTextPlugin("assets/css/style.css"),

	new webpack.ProvidePlugin({
		'$' : 'jquery',
		'jQuery' : 'jquery',
		'window.jQuery' : 'jquery'
	})

	/*
	 * new CopyWebpackPlugin([ { from : 'ui/app/assets/images/', to :
	 * 'assets/images/' }, { from : 'ui/favicon.ico', to : 'favicon.ico' }])
	 */

	]
};
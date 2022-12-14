const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Loaders
const css_loader = {
	loader: 'css-loader',
	options: {
		url: {
			filter: (url, resourcePath) => {
				if (url.startsWith('/')) {
					return false;
				}
				if (url.startsWith('../')) {
					return false;
				}
				if (url.startsWith('var')) {
					return false;
				}
				
				return true;
			},
		},
		sourceMap: true,
	},
};

const sass_loader = {
	loader: 'sass-loader',
	options: {
		sourceMap: true,
	}
};

const post_css_loader = {
	loader: "postcss-loader",
	options: {
		postcssOptions: {
			plugins: [
				[
					"autoprefixer",
					{
						// Options
					},
				],
			],
		},
	}
};

// Конфиг
module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(scss)$/,
					use: [
						MiniCssExtractPlugin.loader,
						css_loader,
						post_css_loader,
						sass_loader
					],
				},
			],
		},
	}
}
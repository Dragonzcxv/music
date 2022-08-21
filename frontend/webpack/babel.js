module.exports = function () {
	return {
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins: ["@babel/plugin-proposal-class-properties"],
						}
					}
				},
				{
					test: /\.jsx$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							presets: ["@babel/preset-react"]
						},
					},
				},
			],
		},
	}
}
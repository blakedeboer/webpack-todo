module.exports = {
	entry: './src',
	output: {
		path: 'builds',
		filename: 'bundle.js'
	},
	module: {
		loaders: [	
			{
				test: /\.js/,
				loader: 'babel',
				include: /src/
			},
			{
				test: /\.scss/,
				loader: 'style!css!sass'
			},
			{
				test: /\.html/,
				loader: 'html'
			}
		]
	},
	watch: true
};
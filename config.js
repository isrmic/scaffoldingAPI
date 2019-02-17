module.exports = {
	NODE_ENV: 'development',
	development: {
		serveroptions: {
			port: 3000,
			host: 'localhost',
			playground: true,
		},
	},
	production: {
		serveroptions: {
			port: 3000,
			host: '',
			playground: false,
		},
	},	
};
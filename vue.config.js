module.exports = {

	devServer: {
		open: false,
		proxy: {
			'/api': {
				target: 'http://106.54.227.19/',
				changeOrigin: true,
				pathRewrite: { '^/api': 'http://106.54.227.19/api/' }
			}
		}
	}
}
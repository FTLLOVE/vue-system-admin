module.exports = {

	devServer: {
		open: false,
		proxy: {
			'/api': {
				target: 'http://175.24.95.198:8099/',
				changeOrigin: true,
				pathRewrite: { '^/api': 'http://175.24.95.198:8099/api/' }
			}
		}
	}
}
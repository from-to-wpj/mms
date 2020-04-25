module.exports = {
  devServer: {
    port: 8888,
    open: true,
    https: false,
    host: 'localhost',
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'process.env.VUE_APP_SERVICE_URL',
        changeOrigin: true,
        pathRewrite: {
          ['^' + 'process.env.VUE_APP_BASE_API']: ''
        }
      }
    }
  },
  lintOnSave: false,
  productionSourceMap: false
}
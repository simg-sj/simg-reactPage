const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = app => {
    app.use('/',
        createProxyMiddleware(
            {
                target: 'http://localhost:4000',
                changeOrigin: true,
            }
        )
    )
}

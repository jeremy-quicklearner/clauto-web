module.exports = {
    isDev() {
        return (typeof webpackHotUpdate != 'undefined')
    },
    isProd() {
        return (typeof webpackHotUpdate == 'undefined')
    }
}
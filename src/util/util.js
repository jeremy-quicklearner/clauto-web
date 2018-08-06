module.exports = {
    isDev: function() {
        return (typeof webpackHotUpdate != 'undefined')
    },
    isProd: function() {
        return (typeof webpackHotUpdate == 'undefined')
    }
}
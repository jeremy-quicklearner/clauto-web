var isDev = function () {
  return (typeof webpackHotUpdate !== 'undefined')
}

export default {
  isDev: isDev,
  isProd () {
    return (typeof webpackHotUpdate === 'undefined')
  },
  nameToTitle (name) {
    if (isDev()) {
      return '[DEV] ' + name
    } else {
      return name
    }
  }
}

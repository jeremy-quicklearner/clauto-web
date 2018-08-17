import api from '.'

export default {
  ping_public (username, password, onFail) {
    return api.post('/ping_public', {}, undefined, onFail)
  },
  ping_read (username, password, onFail) {
    return api.post('/ping_read', {}, undefined, onFail)
  },
  ping_write (username, password, onFail) {
    return api.post('/ping_write', {}, undefined, onFail)
  },
  ping_admin (username, password, onFail) {
    return api.post('/ping_admin', {}, undefined, onFail)
  },
  ping_slow (username, password, onFail) {
    return api.post('/ping_slow', {}, undefined, onFail)
  },
  sysname (onFail) {
    return api.get('/sysname', {}, undefined, onFail).then((r) => { return r.data })
  }
}

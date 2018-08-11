import axios from 'axios'

function defaultSuccessCallback (result) { return result }

function get (endpoint, params = {},
  on200 = defaultSuccessCallback,
  onNot200
) {
  var retval = axios.get('/api' + endpoint, params).then(on200)
  if (onNot200 !== undefined) {
    retval = retval.catch(onNot200)
  }
  return retval
}
function patch (endpoint, params = {},
  on200 = defaultSuccessCallback,
  onNot200
) {
  var form = new FormData()
  for (var key in params) form.append(key, params[key])
  var retval = axios.patch('/api' + endpoint, form).then(on200)
  if (onNot200 !== undefined) {
    retval = retval.catch(onNot200)
  }
  return retval
}
function post (endpoint, params = {},
  on200 = defaultSuccessCallback,
  onNot200
) {
  var form = new FormData()
  for (var key in params) form.append(key, params[key])
  var retval = axios.post('/api' + endpoint, form).then(on200)
  if (onNot200 !== undefined) {
    retval = retval.catch(onNot200)
  }
  return retval
}
function del (endpoint, params = {},
  on200 = defaultSuccessCallback,
  onNot200
) {
  var form = new FormData()
  for (var key in params) form.append(key, params[key])
  var retval = axios.delete('/api' + endpoint, form).then(on200)
  if (onNot200 !== undefined) {
    retval = retval.catch(onNot200)
  }
  return retval
}

export default {
  get,
  patch,
  post,
  del
}

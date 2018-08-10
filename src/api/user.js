import api from './index'

export default {
    login(username, password, onFail) {
        return api.post('/user/login', {username: username, password: password}, undefined, onFail);
    }
}
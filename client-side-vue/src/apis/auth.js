import req from './https';

const auth = {
    //註冊
    register(params) {
        return req('post', '/register', params);
    },
    //登入
    login(params) {
        return req('post', '/login', params);
    },
    //登出
    logout() {
        return req('get', '/logout');
    }
};

export default auth;

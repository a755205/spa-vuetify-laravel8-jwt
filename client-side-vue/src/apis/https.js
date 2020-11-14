import router from '../router';
import store from '../store';
import axios from 'axios';
import _ from 'lodash';

/**
 * [https請求失敗統一處理]
 * @param   {Number}  status  [https code]
 * @param   {[type]}  msg     [msg]
 */
const errorHandel = (status, msg) => {
    switch (status) {
        case 400:
            break;
        case 401:
            if (router.currentRoute.matched.some(e => e.path === '/login')) {
                console.log('//do nothing');
            } else {
                store.dispatch('auth/setAuth', { token: '', isLogin: false });
                store.dispatch('snackbar/openSnackbar', {
                    msg: '請重新登入'
                });
                router.push('/login');
            }
            break;
        case 403:
            console.log('權限不足');
            break;
        case 404:
            console.log('請求失敗');
            break;
        case 429:
            console.log('Too Many Requests', msg);
            break;
        case 491:
            // [自訂code]
            store.dispatch('snackbar/openSnackbar', {
                msg: '登入失敗'
            });
            break;
        default:
            console.log(`https 未攔截到之錯誤 -> ${msg}`);
            break;
    }
};

//axios 實例
let instance = axios.create({
    //   TODO: switch by -> production || developer
    baseURL:
        process.env.NODE_ENV !== 'production'
            ? 'http://dev.vgseventapi.eyevgs.com/api/'
            : 'https://vgseventapi.eyevgs.com/api/'
});

//request 攔截器
instance.interceptors.request.use(
    config => {
        store.dispatch('sys/add_request');

        if (_.hasIn(localStorage, 'vuex')) {
            let localStorageVuex = JSON.parse(localStorage.vuex);
            if (_.hasIn(localStorageVuex, 'auth.token')) {
                config.headers.Authorization = `bearer ${localStorageVuex.auth.token}`;
            }
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// response 攔截器
instance.interceptors.response.use(
    response => {
        store.dispatch('sys/subtract_request');
        return response;
    },
    error => {
        const { response } = error;
        store.dispatch('sys/subtract_request');
        if (response) {
            errorHandel(response.status, response.data);

            return Promise.reject(error);
        } else {
            if (!window.navigator.onLine) {
                store.dispatch('snackbar/openSnackbar', {
                    msg: '檢查網路是否連線'
                });
            } else {
                store.dispatch('snackbar/openSnackbar', {
                    msg: '系統錯誤'
                });
                return Promise.reject(error);
            }
        }
    }
);

/**
 * [https.js default]
 *
 * @param   {string}  method  [http method]
 * @param   {string}  url     [url]
 * @param   {any}  data       [data]
 * @return  {bool}
 */
export default function(method, url, data = null) {
    method = method.toLowerCase();
    switch (method) {
        case 'post':
            return instance.post(url, data);
        case 'get':
            return instance.get(url, { params: data });
        case 'delete':
            return instance.delete(url, { params: data });
        case 'put':
            return instance.put(url, data);
        default:
            console.log(`unknown method ${method}`);
            return false;
    }
}

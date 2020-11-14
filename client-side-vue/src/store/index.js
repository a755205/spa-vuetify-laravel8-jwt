import Vue from 'vue';
import Vuex from 'vuex';
import persistedstate from 'vuex-persistedstate';
import auth from './modules/auth';
import snackbar from './modules/snackbar';
import confirm from './modules/confirm';
import layout from './modules/layout';
import navigation from './modules/navigation';
import sys from './modules/sys';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: { auth, snackbar, confirm, layout, navigation, sys },
    plugins: [
        persistedstate({
            storage: window.localStorage,
            reducer(val) {
                return {
                    // only save specific module
                    auth: val.auth
                };
            }
        })
    ]
});

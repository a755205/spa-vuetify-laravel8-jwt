// export default new Vuex.Store({
//     strict: process.env.NODE_ENV !== 'production',

// })

export default {
    namespaced: true,
    state: {
        token: '',
        islogin: false
    },
    getters: {
        token(state) {
            return state.token;
        },
        islogin(state) {
            return state.islogin;
        }
    },
    mutations: {
        SET_AUTH(state, options) {
            state.token = options.token;
            state.islogin = options.islogin;
        }
    },
    actions: {
        setAuth(context, options) {
            context.commit('SET_AUTH', {
                token: options.token,
                islogin: options.islogin
            });
        }
    }
};

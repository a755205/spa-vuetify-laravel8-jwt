export default {
    namespaced: true,
    state: {
        requestCount: 0,
        isloading: false
    },
    mutations: {
        ADD_REQUEST(state) {
            state.requestCount += 1;
            state.isloading = state.requestCount > 0;
        },
        SUBTRACT_REQUEST(state) {
            state.requestCount -= 1;
            state.isloading = state.requestCount > 0;
        }
    },
    actions: {
        add_request(context) {
            context.commit('ADD_REQUEST');
        },
        subtract_request(context) {
            context.commit('SUBTRACT_REQUEST');
        }
    }
};

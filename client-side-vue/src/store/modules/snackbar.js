export default {
    namespaced: true,
    state: {
        msg: '',
        visible: false,
        showclose: true,
        timeout: 6000,
        color: 'undefined'
    },
    mutations: {
        OPEN_SNACKBAR(state, options) {
            state.timeout = -1;
            // setTimeout for reset component  timeout
            setTimeout(() => {
                state.visible = true;
                state.msg = options.msg;
                state.color = options.color;
                state.timeout = options.timeout;
            }, 100);
        },
        CLOSE_SNACKBAR(state) {
            state.visible = false;
        },
        SET_SHOW_CLOSE(state, isShow) {
            state.showclose = isShow;
        },
        SET_TIMEOUT(state, timeout) {
            state.timeout = timeout;
        },
        SET_COLOR(state, color) {
            state.color = color;
        }
    },
    actions: {
        openSnackbar(context, options) {
            context.commit('OPEN_SNACKBAR', {
                msg: options.msg,
                color: options.color,
                timeout: options.timeout
            });
            setTimeout(() => {
                context.commit('CLOSE_SNACKBAR');
            }, context.state.timeout);
        }
    }
};

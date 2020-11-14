export default {
    namespaced: true,
    state: {
        msg: '',
        visible: false,
        showclose: true,
        color: 'undefined',
        fn: null
    },
    mutations: {
        OPEN_CONFIRM(state, options) {
            console.log(state.msg);
            state.visible = true;
            state.msg = options.msg;
            state.fn = options.fn;
        },
        CLOSE_CONFIRM(state) {
            state.visible = false;
            state.msg = '';
            state.fn = null;
        },
        AGREE(state) {
            state.fn();
        }
    },
    actions: {
        open(context, options) {
            context.commit('OPEN_CONFIRM', options);
        },
        executefn(context) {
            context.state.fn();
        },
        agree(context) {
            context.dispatch('executefn').then(() => {
                context.commit('CLOSE_CONFIRM');
            });
        },
        disagree(context) {
            context.commit('CLOSE_CONFIRM');
        }
    }
};

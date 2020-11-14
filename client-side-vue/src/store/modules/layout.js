export default {
    namespaced: true,
    state: {
        drawer: null,
        drawerTools: false
    },
    mutations: {
        TOGGLE_DRAWER(state) {
            state.drawer = !state.drawer;
        },
        SET_DRAWER(state, isShow) {
            state.drawer = isShow;
        },
        TOGGLE_DRAWER_TOOLS(state) {
            state.drawerTools = !state.drawerTools;
        },
        SET_DRAWER_TOOLS(state, isShow) {
            state.drawerTools = isShow;
        }
    },
    actions: {
        toggleDrawer(context) {
            context.commit('TOGGLE_DRAWER');
        },
        setDrawer(context, isShow) {
            context.commit('SET_DRAWER', isShow);
        },
        toggleDrawerTools(context) {
            context.commit('TOGGLE_DRAWER_TOOLS');
        },
        setDrawerTools(context, isShow) {
            context.commit('SET_DRAWER_TOOLS', isShow);
        }
    }
};

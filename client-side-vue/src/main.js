import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import api from './apis';
import helperRouter from './helper/router';
import helperMessage from './helper/message';
import helperVuefilters from './helper/filters';

helperRouter.auth.check();

Vue.config.productionTip = false;

Vue.prototype.$api = api;
Vue.prototype.$message = helperMessage;

Vue.mixin({
    filters: helperVuefilters
});

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');

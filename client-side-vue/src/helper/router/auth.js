import router from '../../router';
import _ from 'lodash';

const auth = {
    check() {
        router.beforeEach((to, from, next) => {
            if (to.matched.some(record => record.meta.requiresAuth)) {
                if (
                    _.get(
                        JSON.parse(localStorage.getItem('vuex')),
                        'auth.islogin'
                    )
                ) {
                    next();
                } else {
                    next({
                        path: '/login',
                        query: { redirect: to.fullPath }
                    });
                }
            } else {
                next();
            }
        });
    }
};

export default auth;

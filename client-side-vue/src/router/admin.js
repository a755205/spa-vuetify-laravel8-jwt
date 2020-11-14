export default {
    path: '/',
    meta: {
        requiresAuth: true
    },
    components: {
        default: () =>
            import(
                /* webpackChunkName: "admin-layout" */ '../components/admin/layout.vue'
            )
    },
    children: [
        {
            path: '/',
            name: 'Dashboard',
            components: {
                default: () =>
                    import(
                        /* webpackChunkName: "dashboard" */ '../components/admin/dashboard.vue'
                    )
            }
        }
    ]
};

<template>
    <v-app>
        <router-view></router-view>
        <snackbar />
        <confirm-dialog />
    </v-app>
</template>

<script>
export default {
    name: 'App',
    components: {
        snackbar: () =>
            import(
                /* webpackChunkName: "partial-snackbar" */ './components/partial/snackbar'
            ),
        confirmDialog: () =>
            import(/* webpackChunkName */ './components/partial/confirmDialog')
    },
    mounted() {
        // reload init theme
        this.$vuetify.theme.dark = localStorage.getItem('dark') == 'true';
    }
};
</script>

<template>
    <v-app>
        <navigation />
        <navigationtools />
        <appbar />
        <v-main>
            <v-container fluid>
                <v-slide-x-transition mode="out-in">
                    <router-view></router-view>
                </v-slide-x-transition>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    components: {
        navigation: () =>
            import(
                /* webpackChunkName: "layout-navigation" */ '../admin/layout-navigation'
            ),
        navigationtools: () =>
            import(
                /* webpackChunkName: "layout-navigation-tools" */ '../admin/layout-navigation-tools'
            ),
        appbar: () =>
            import(
                /* webpackChunkName: "layout-app-bar" */ '../admin/layout-app-bar'
            )
    }
};
</script>

<style></style>

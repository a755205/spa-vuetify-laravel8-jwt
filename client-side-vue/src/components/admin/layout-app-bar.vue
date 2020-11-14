<template>
    <v-app-bar
        app
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        :collapse="!collapseOnScroll"
        :collapse-on-scroll="collapseOnScroll && $vuetify.breakpoint.mdAndDown"
    >
        <v-progress-linear
            :query="true"
            :active="$store.state.sys.isloading"
            :indeterminate="$store.state.sys.isloading"
            absolute
            top
        ></v-progress-linear>
        <!-- background-color="white" -->

        <v-app-bar-nav-icon
            @click.stop="$store.dispatch('layout/toggleDrawer')"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
            <span class="hidden-sm-and-down">[ APP NAME ]</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="$store.dispatch('layout/toggleDrawerTools')">
            <v-icon>mdi-cog-outline</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            collapseOnScroll: true
        };
    },
    computed: {
        // ...mapGetters('sys', ['isloading']),
        drawer: {
            get() {
                return this.$store.state.layout.drawer;
            },
            set() {}
        }
    }
};
</script>

<style></style>

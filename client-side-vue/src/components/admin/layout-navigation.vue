<template>
    <v-navigation-drawer
        app
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        @input="drawerChange"
    >
        <v-list dense>
            <template v-for="item in nodes">
                <v-list-group
                    v-if="item.children"
                    :key="item.text"
                    v-model="item.model"
                    :prepend-icon="item.model ? item.icon : item['icon-alt']"
                    append-icon
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>{{
                                item.text
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item
                        v-for="(child, i) in item.children"
                        :key="i"
                        link
                    >
                        <v-list-item-action v-if="child.icon">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{
                                child.text
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <v-list-item v-else :key="item.text" link :to="item.to">
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('navigation', ['nodes']),
        drawer: {
            get() {
                return this.$store.state.layout.drawer;
            },
            set() {}
        }
    },
    methods: {
        drawerChange(isDrawerOpen) {
            this.$store.dispatch('layout/setDrawer', isDrawerOpen);
        }
    }
};
</script>

<style></style>

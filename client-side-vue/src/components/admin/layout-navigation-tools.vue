<template>
    <v-navigation-drawer
        app
        right
        temporary
        v-model="drawer"
        @input="drawerChange"
    >
        <template v-slot:prepend>
            <v-toolbar>
                <v-toolbar-title>Settings</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn
                    icon
                    @click.stop="
                        $store.dispatch('layout/setDrawerTools', false)
                    "
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-list-item two-line>
                <v-list-item-avatar>
                    <v-img
                        src="https://randomuser.me/api/portraits/women/85.jpg"
                    ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>John Leider </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>

            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-subtitle>theme</v-list-item-subtitle>
                    <v-container class="pa-0">
                        <v-row class="max-auto" dense>
                            <v-col class="col-6">
                                <v-btn
                                    @click="setTheme(false)"
                                    block
                                    elevation="0"
                                    >light</v-btn
                                >
                            </v-col>
                            <v-col class="col-6">
                                <v-btn
                                    @click="setTheme(true)"
                                    block
                                    elevation="0"
                                    >dark</v-btn
                                >
                            </v-col>
                        </v-row>
                    </v-container>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
        </template>

        <template v-slot:append>
            <div class="pa-2">
                <v-btn block @click.stop="logout">
                    Logout
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
export default {
    computed: {
        drawer: {
            get() {
                return this.$store.state.layout.drawerTools;
            },
            set() {}
        }
    },
    methods: {
        setTheme(isDark) {
            this.$vuetify.theme.dark = isDark;
            window.localStorage.setItem('dark', isDark);
        },
        drawerChange(isDrawerOpen) {
            this.$store.dispatch('layout/setDrawerTools', isDrawerOpen);
        },
        logout() {
            this.$api.auth.logout().then(() => {
                this.$store.dispatch('layout/setDrawerTools', false);

                this.$store.dispatch('auth/setAuth', {
                    token: '',
                    islogin: false
                });
                this.$router.push('/login').catch(() => {});
            });
        }
    }
};
</script>

<style></style>

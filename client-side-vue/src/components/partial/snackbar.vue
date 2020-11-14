<template>
    <v-snackbar
        app
        v-model="visible"
        botton
        right
        :color="color"
        :timeout="timeout"
    >
        {{ $store.state.snackbar.msg }}
        <template v-slot:action="{ attrs }">
            <v-btn icon color="red" v-bind="attrs" @click="close">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
export default {
    computed: {
        visible: {
            get() {
                return this.$store.state.snackbar.visible;
            },
            set() {}
        },
        color: {
            get() {
                return this.$store.state.snackbar.color;
            },
            set() {}
        },
        timeout: {
            get() {
                return this.$store.state.snackbar.timeout;
            },
            set() {}
        },
        showclose() {
            return this.$store.state.snackbar.showclose;
        }
    },
    methods: {
        close() {
            this.$store.commit('snackbar/CLOSE_SNACKBAR');
        }
    }
};
</script>

<style></style>

<template>
    <div>
        <h1>dashboard</h1>
        <h1>
            { $store.state.layout }}
        </h1>
        <h1>
            {{ $store.state.sys }}
        </h1>
        <v-btn class="mr-1" depressed @click="getUser">
            getAuthUSer
        </v-btn>
        <v-btn
            class="mr-1"
            depressed
            @click="$message.alert('1233 alert', 'red')"
        >
            alert msg('red')
        </v-btn>

        <v-btn
            class="mr-1"
            depressed
            @click="$message.confirm('是否刪除？', confirmfn)"
        >
            confirm
        </v-btn>

        <p>{{ $store.state.theme }}</p>
    </div>
</template>

<script>
export default {
    mounted() {
        // console.log(this.$store.dispatch('theme/switchTheme'));
        // $store.dispatch('layout/setDrawerTools', false)
    },
    methods: {
        getUser() {
            this.$api.v1.users
                .detail()
                .then(response => {
                    let res = response.data;
                    this.$message.alert(res.name);
                })
                .catch(err => {
                    console.log('err', err);
                });
        },
        confirmfn() {
            console.log('go confirm');
        }
    }
};
</script>

<style></style>

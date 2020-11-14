<template>
    <v-dialog v-model="visible" persistent max-width="375">
        <v-card elevation="6">
            <v-card-title> </v-card-title>
            <v-card-text class="text-center line-height-normal">
                <h1 class="font-weight-light">{{ msg }}</h1>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="text-center">
                <v-spacer></v-spacer>
                <v-btn text color="primary mr-1" @click.native="disagree"
                    >取消</v-btn
                >
                <v-btn text color="primary" @click.native="agree">確認</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions('confirm', ['agree', 'disagree'])
    },
    computed: {
        ...mapState('confirm', ['visible', 'msg'])
    }
};
</script>

<style lang="scss" scoped>
.line-height-normal {
    line-height: normal;
}
</style>

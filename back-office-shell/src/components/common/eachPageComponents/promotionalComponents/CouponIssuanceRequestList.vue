<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
    </v-container>
</template>

<script>

    export default {
        name: "CouponIssuanceRequestList",
        components: {  },
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    // ListForm Common SCSS
    @import '~@/assets/scss/listFormCommon.scss';

    #app {
        .boardLayout {
            min-height: 883px;
        }
    }
</style>

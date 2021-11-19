<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
        <div>InquiryListList</div>
    </v-container>
</template>

<script>
    export default {
        name: "InquiryListList"
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    // ListForm Common SCSS
    @import '~@/assets/scss/listFormCommon.scss';


    #app {
        .boardLayout {
            min-height: 605px;
        }
    }
</style>

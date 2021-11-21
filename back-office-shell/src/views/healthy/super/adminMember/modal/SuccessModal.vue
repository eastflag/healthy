<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog value="true" content-class="rounded-0 elevation-0" width="200px">
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="and_popup_bx">
                <p>승인되었습니다.</p>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "SuccessModal"
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/popUpModal/popUpCommon.scss';
</style>

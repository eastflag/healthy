<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog  content-class="rounded-0 elevation-0" width="400px">
        <!--value="true"-->
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="and_popup_bx">
                <p>내용이 정상적으로 저장되었습니다.</p>
                <div class="button d-flex align-center justify-center">
                    <action-btn>확인</action-btn>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    import ActionBtn from '../../../../buttonComponents/ActionBtn'
    export default {
        name: "ServicesUploadSuccessModal",
        components:{ ActionBtn }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/popUpModal/popUpCommon.scss';
    #app{
    }
</style>

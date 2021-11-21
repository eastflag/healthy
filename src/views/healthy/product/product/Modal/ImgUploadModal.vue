<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog content-class="rounded-0 elevation-0" width="500px">
        <!--value="true"-->
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="and_popup_input">
                <div class="modalTitle"><span>이미지파일</span></div>
                <div class="inputLayoutContent">
                    <!--파일 업로드 inputLayout-->
                </div>
                <div class="button d-flex justify-center">
                    <action-btn>확인</action-btn>
                    <basic-btn>닫기</basic-btn>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'
    export default {
        name: "ImgUploadModal",
        components:{ BasicBtn, ActionBtn }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/popUpModal/popUpCommon.scss';
    #app{
        .button{
            margin-top: 20px;
            button:first-child{
                margin-right: 15px;
            }
        }
    }
</style>

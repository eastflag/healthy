<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog content-class="rounded-0 elevation-0" width="500px">
        <!--value="true"-->
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="and_popup_input">
                <div class="modalTitle"><span>사유</span></div>
                <div class="inputLayoutContent">
                    <textarea name="" id="" cols="30" rows="10" placeholder="요청사유 표시"></textarea>
                </div>
                <div class="button d-flex justify-center">
                    <action-btn>확인</action-btn>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    export default {
        name: "NotApprovedModal",
        components:{ ActionBtn }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/popUpModal/popUpCommon.scss';
    #app{
        .button{
            margin-top: 20px;
        }
    }
</style>

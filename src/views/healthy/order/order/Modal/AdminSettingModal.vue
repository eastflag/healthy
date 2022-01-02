<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog v-model="dialogs.showAdminSettingModal" content-class="rounded-0 elevation-0" width="500px">
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="and_popup_input">
                <div class="modalTitle"><span>관리자설정</span></div>
                <div class="modalBody">
                    <span>입금처리 하시겠습니까?</span>
                </div>
                <div class="button d-flex justify-center">
                    <delete-btn>닫기</delete-btn>
                    <action-btn class="upBtn">확인</action-btn>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    import DeleteBtn from '@/components/common/buttonComponents/DeleteBtn'

    export default {
        name: "AdminSettingModal",
        props: [
            "dialogs"
        ],
        components:{ ActionBtn, DeleteBtn }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/popUpModal/popUpCommon.scss';
    #app{
        .modalBody {
            margin: 35px auto;
            text-align: center;
            vertical-align: middle;
        }
        .button{
            margin-top: 20px;
            button:first-child{
                margin-right: 15px;
            }
        }
    }
</style>

<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog v-model="dialogs.showOrderCancelCompleteModal" content-class="rounded-0 elevation-0" width="500px">
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="and_popup_input">
                <div class="modalTitle"><span>취소완료</span></div>
                <div class="modalBody">
                    <span>
                        취소완료 처리하시겠습니까?
                        <br />
                        확인 버튼 클릭 시 주문상태를
                        <br />
                        복구 할 수 없습니다.
                    </span>
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
        name: "OrderCancelCompleteModal",
        props: [
            "dialogs"
        ],
        components:{ ActionBtn, DeleteBtn }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/popUpModal/popUpCommon.scss';
    #app{
        .and_popup_input {
            min-height: 220px;
            height: 100%;
        }
        .modalBody {
            margin: 35px auto;
            text-align: center;
            vertical-align: middle;
        }
        .button{
            margin: 20px auto;
            button:first-child{
                margin-right: 15px;
            }
        }
    }
</style>

<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog v-model="dialogs.showHoldingModal" content-class="rounded-0 elevation-0" width="500px">
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="and_popup_input">
                <div class="modalTitle"><span>선택보류</span></div>
                <div class="inputLayoutContent">
                    <span>해당 회원의 요청을<br />보류 하시겠습니까?</span>
                    <textarea name="" id="" cols="30" rows="10" placeholder="사유입력 표시"></textarea>
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
        name: "HoldingModal",
        props: [
            "dialogs"
        ],
        components:{ DeleteBtn, ActionBtn }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/popUpModal/popUpCommon.scss';
    #app{
        .and_popup_input {
            min-height: 220px;
            height: 100%;
        }
        .button{
            margin: 20px auto;
            button:first-child{
                margin-right: 15px;
            }
        }
        .inputLayoutContent{
            margin: 10px 24px;
            text-align: center;

            textarea {
                width: 100%;
                height: 80px;
                padding: 10px;
                margin-top: 10px;
                word-break: break-word;
                font-weight: normal;
                border: 1px solid $color-bg-border;

            &::placeholder{
                font-weight: normal;
            }
            &:focus{
                border: 1px solid $color-sub;
            }
            }
        }
    }
</style>

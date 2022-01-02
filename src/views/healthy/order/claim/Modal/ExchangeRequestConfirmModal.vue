<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog v-model="dialogs.showBundleProcessingModal" content-class="rounded-0 elevation-0" width="500px">
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="and_popup_input">
                <div class="modalTitle"><span>교환신청</span></div>
                <div class="modalBody">
                    <span class="modalSelect">선택한 주문건을 
                        <select  id="orderState" name="orderState">
                            <option value="state1">결제완료</option>
                            <option value="state2">주문취소</option>
                        </select>
                        로(으로)<br/>수정 하시겠습니까?</span>
                </div>
                <div class="button d-flex justify-center">
                    <delete-btn>닫기</delete-btn>
                    <action-btn class="upBtn">교환신청</action-btn>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    import DeleteBtn from '@/components/common/buttonComponents/DeleteBtn'

    export default {
        name: "BundleProcessingModal",
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
        .modalSelect{
            select{
                width: 110px;
                height: 27px;
                padding: 0 10px;
                background:url('~@/assets/images/icons/search.svg') no-repeat 90px center;
                font-size: $font-12;
                color: $color-action;

                option {
                    height: 20px;
                    color:  $color-basic;
                    font-size: $font-20;
                }
            }
        }
        .button{
            margin: 20px auto;
            button:first-child{
                margin-right: 15px;
            }
        }
    }
</style>

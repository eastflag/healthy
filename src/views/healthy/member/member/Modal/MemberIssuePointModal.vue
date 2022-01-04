<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog v-model="dialogs.showMemberIssuePointModal" content-class="rounded-0 elevation-0" width="500px">
        <!--value="true"-->
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="and_popup_input" style="height: 380px;">
                <div class="modalTitle"><span>포인트 적립/차감</span></div>
                <div class="inputLayoutContent">
                    <span>계정</span>
                    <input class="fullWidthInput" type="text" id="detail" name="detail" placeholder="INPUTBOX">
                    <div>
                        포인트 <input class="smallInput" type="number" id="detail" name="detail"> 원
                    </div>
                    <div>
                        내용 <input class="halfWidthInput" type="text" id="detail" name="detail">
                    </div>
                    <div style="text-align: center;">※ 포인트 차감 시 ( - ) 입력 (예) -5000원</div>
                </div>
                <div class="button d-flex justify-center">
                    <action-btn>적립</action-btn>
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
        name: "MemberIssuePointModal",
        props: [
            "dialogs"
        ],
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
        .inputLayoutContent{
            margin: 0 24px;
            padding: 20px 0;

            .fullWidthInput{
              width: 100%;
              margin-bottom: 10px;
            }
            .halfWidthInput{
              width: 50%;
              margin-bottom: 10px;
              margin: 0 0 10px;
            }
            .smallInput{
              width: 280px;
              height: 31px;
              border: 1px solid $color-bg-border;
              margin: 0 0 10px;
            }
        }
    }
</style>

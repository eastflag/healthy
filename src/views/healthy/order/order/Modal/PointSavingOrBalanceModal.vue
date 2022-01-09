<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog v-model="dialogs.showPointSavingOrBalanceModal" content-class="rounded-0 elevation-0" width="500px">
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="and_popup_input">
                <div class="modalTitle"><span>포인트 적립/차감</span></div>
                <div class="modalBody">
                    <p class="tableTitle">계정</p>
                    <textarea name="" id="" cols="15" rows="5" placeholder="user1, user2, user3, user4, user5..."></textarea>
                    <div class="pointInput">
                        포인트 : <input type="text" id="accountNm" name="accountNm" >원    
                    </div>
                    <div class="contentBox">
                        <div>
                            내용 : 
                        </div>
                        <div class="contentDetail">
                            &#91;주문일자&#93; :
                            <br />
                            상품평 보상 적립 
                            <br />
                            제품명 : 
                        </div>
                    </div>
                    <p>&#8251; 포인트 차감 시 &#40; &#45; &#41; 입력 &#40;예&#41; &#45;5000원</p>
                </div>
                <div class="button d-flex justify-center">
                    <action-btn class="upBtn">적립</action-btn>
                    <delete-btn>닫기</delete-btn>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    import DeleteBtn from '@/components/common/buttonComponents/DeleteBtn'

    export default {
        name: "PointSavingOrBalanceModal",
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
            margin: 10px 0 20px 0;
            text-align: left;
            vertical-align: middle;
            padding: 0 24px;
            font-size: $font-13;

            textarea {
                width: 100%;
                height: 60px;
                padding: 10px;
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
            .pointInput {
                margin-top: 10px;
                input {
                    width: 83%;
                    margin-right: 5px;
                }
            }
            .contentBox {
                display: flex;
                align-items: center;
                margin: 10px auto;
                .contentDetail{
                    text-align: left;
                    font-size: $font-12;
                    margin-left: 5px;
                }
            }

        }
        .tableTitle {
            border-left: 3px solid $color-sub;
            font-size: $font-13;
        }
        
        
        .button{
            margin: 20px auto;
            button:first-child{
                margin-right: 15px;
            }
        }
    }
</style>

<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog v-model="dialogs.showProductSearchList" content-class="rounded-0 elevation-0" width="500px">
        <!--value="true"-->
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="and_popup_input">
                <div class="modalTitle"><span>일괄수정</span></div>
                <div style="margin: 24px;">
                    <div>
                        <span class="selectbx">
                          <select id="departure" name="departure" v-model="selectedOption1">
                              <option value="판매여부">판매여부</option>
                              <option value="할인금액">할인금액</option>
                              <option value="재고">재고</option>
                          </select>
                        </span>
                        <span style="margin-right: 15px;">주문건을</span>
                        <span class="selectbx" v-if="selectedOption1 == '판매여부'">
                          <select id="departure" name="departure">
                            <option value="num2">판매중</option>
                            <option value="num1">판매중지</option>
                          </select>
                        </span>
                        <span v-if="selectedOption1 == '할인금액'">
                          <input class="inputbx" type="number" id="cont" name="info1" placeholder="0">
                        </span>
                        <span v-if="selectedOption1 == '재고'">
                          <input class="inputbx" type="number" id="cont" name="info1" placeholder="0">
                        </span>

                        <span>로(으로)</span>
                        <div style="text-align: center;">일괄수정하시겠습니까?</div>
                    </div>
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
        name: "ProductListBatchEditModal",
        props: [
            "dialogs"
        ],
        components:{ BasicBtn, ActionBtn },
        data() {
          return {
            selectedOption1: '판매여부'
          }
        }
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
        .inputbx{
          width: 100px;
          padding: 5px 10px;
          border: 1px solid $color-border;
          margin-right: 15px;
        }
        .selectbx{
            width: 100%;
            select{
                width: 100px;
                margin-right: 15px;
                background:url('~@/assets/images/icons/search.svg') no-repeat 200px center;

                option {
                    height: 20px;
                    font-size: $font-20;
                }
            }
            input{
                width: 300px;
                &:focus{
                    border: 1px solid $color-sub;
                }
            }
        }
    }
</style>

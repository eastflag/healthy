<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog content-class="rounded-0 elevation-0" width="500px">
        <!--value="true"-->
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="and_popup_input">
                <div class="modalTitle"><span>상품불러오기</span></div>
                <div style="display: flex; margin-top: 5px;">
                    <div class="searchType active">직접검색</div>
                    <div class="searchType">카테고리검색</div>
                </div>
                <div class="inputLayoutContent">
                    <div class="d-flex">
                        <input type="text" id="cont" name="info1" placeholder="상품명을 입력해주세요">
                    </div>

                    <div class="button d-flex justify-center">
                        <action-btn>검색</action-btn>
                    </div>
                </div>

                <table>
                    <colgroup>
                        <col width="2%">
                        <col width="10%">
                        <col width="10%">
                        <col width="15%">
                        <col width="15%">
                        <col width="10%">
                        <col width="10%">
                    </colgroup>
                    <thead>
                    <tr>
                        <th>
                            <div class="spot">
                                <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                            </div>
                        </th>
                        <th><span>제품코드</span></th>
                        <th><span>제조사</span></th>
                        <th><span>상품명</span></th>
                        <th><span>카테고리</span></th>
                        <th><span>판매가</span></th>
                        <th><span>관리</span></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <div class="spot">
                                <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                            </div>
                        </td>
                        <td><span>1234</span></td>
                        <td><span>종근당</span></td>
                        <td><span>종근당 활력 홍삼파</span></td>
                        <td><span>대분류>중분류>소분류</span></td>
                        <td><span>25,000원</span></td>
                        <td><span>admin</span></td>
                    </tr>
                    </tbody>
                </table>

                <div class="button d-flex justify-center">
                    <action-btn>확인</action-btn>
                    <basic-btn>취소</basic-btn>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'
    export default {
        name: "ProductLoadSearchModal",
        components:{ BasicBtn, ActionBtn }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/popUpModal/popUpCommon.scss';
    #app{
        .searchType{
          flex-grow: 1;
          text-align: center;
          background-color: $color-table-bg;
          padding: 5px;
        }

        .active{
          background-color: #07403A;
          color: white;
        }

        table{
          width: 100%;
          height: 300px;
          margin: 30px 0 30px 30px;

          tr{
            border-bottom: 1px solid $color-border;

            th{
              align-items: center;
              height: 52px;
              padding-left:16px;
              font-size: $font-13;
              background: $color-table-bg;
              vertical-align: middle;
            }

            td{
              padding:0 32px;
              font-size: $font-12;
              text-align:left;
              text-align: center;
            }
          }
        }

        .button{
            margin-top: 20px;
            button:first-child{
                margin-right: 15px;
            }
        }
    }
</style>

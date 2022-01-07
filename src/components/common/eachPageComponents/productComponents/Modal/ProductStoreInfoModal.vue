<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog v-model="dialogs.showProductStoreInfoDialogModal" content-class="rounded-0 elevation-0" width="800px">
        <!--value="true"-->
       <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="and_popup_input" style="height: 700px;">
                <div class="modalTitle"><span>스토어정보</span></div>

                <div class="inputLayoutContent" style="margin: 20px 24px;">
                    <div class="d-flex">
                        <select id="departure" name="departure" style="width: 200px;">
                            <option value="num1">전체</option>
                        </select>
                        <input type="text" id="cont" name="info1" placeholder="상품명을 입력해주세요" style="margin-left: 10px;">
                    </div>
                    <div class="button d-flex justify-center">
                        <action-btn>검색</action-btn>
                    </div>

                    <div style="height: 400px; margin-top: 40px; overflow: scroll;">
                      <table>
                        <colgroup>
                            <col width="2%">
                            <col width="10%">
                            <col width="10%">
                            <col width="15%">
                            <col width="15%">
                        </colgroup>
                        <thead>
                        <tr>
                            <th colspan="5"><span>목록</span></th>
                        </tr>
                        <tr>
                            <th>
                                <div class="spot">
                                    <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                                </div>
                            </th>
                            <th><span>업체명</span></th>
                            <th><span>ID</span></th>
                            <th><span>사업자번호</span></th>
                            <th><span>전화번호</span></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <div class="spot">
                                    <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                                </div>
                            </td>
                            <td><span>A업체</span></td>
                            <td><span>A123</span></td>
                            <td><span>12312-123-123124</span></td>
                            <td><span>01012341234</span></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="spot">
                                    <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                                </div>
                            </td>
                            <td><span>A업체</span></td>
                            <td><span>A123</span></td>
                            <td><span>12312-123-123124</span></td>
                            <td><span>01012341234</span></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="spot">
                                    <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                                </div>
                            </td>
                            <td><span>A업체</span></td>
                            <td><span>A123</span></td>
                            <td><span>12312-123-123124</span></td>
                            <td><span>01012341234</span></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="spot">
                                    <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                                </div>
                            </td>
                            <td><span>A업체</span></td>
                            <td><span>A123</span></td>
                            <td><span>12312-123-123124</span></td>
                            <td><span>01012341234</span></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="spot">
                                    <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                                </div>
                            </td>
                            <td><span>A업체</span></td>
                            <td><span>A123</span></td>
                            <td><span>12312-123-123124</span></td>
                            <td><span>01012341234</span></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="spot">
                                    <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                                </div>
                            </td>
                            <td><span>A업체</span></td>
                            <td><span>A123</span></td>
                            <td><span>12312-123-123124</span></td>
                            <td><span>01012341234</span></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="spot">
                                    <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                                </div>
                            </td>
                            <td><span>A업체</span></td>
                            <td><span>A123</span></td>
                            <td><span>12312-123-123124</span></td>
                            <td><span>01012341234</span></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="spot">
                                    <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                                </div>
                            </td>
                            <td><span>A업체</span></td>
                            <td><span>A123</span></td>
                            <td><span>12312-123-123124</span></td>
                            <td><span>01012341234</span></td>
                        </tr>
                        </tbody>
                    </table>
                  </div>
                </div>

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
        name: "ProductStoreInfoModal",
        props: [
          "dialogs"
        ],
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

          tr{
            border-bottom: 1px solid $color-border;
            height: 52px;

            th{
              position: relative;
              align-items: center;
              height: 52px;
              font-size: $font-13;
              background: $color-table-bg;
              vertical-align: middle;
            }
            .spot{
              position: absolute;
              top: 7px;
              left: 10px;
            }

            span{
              height: inherit;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            td{
              position: relative;
              height: 52px;
              vertical-align: middle;
              padding:0 10px;
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

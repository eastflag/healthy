<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog v-model="dialogs.showProductLoadModal" content-class="rounded-0 elevation-0" width="800px">
        <!--value="true"-->
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="and_popup_input" style="height: 550px;">
                <div class="modalTitle"><span>상품불러오기</span></div>

                <div class="inputLayoutContent" style="margin: 0 24px;">
                    <div style="display: flex; margin: 10px 0;">
                        <div class="searchType" @click="selectedSearchType = 'search'" :class="selectedSearchType == 'search' ? 'active' : ''">직접검색</div>
                        <div class="searchType" @click="selectedSearchType = 'category'" :class="selectedSearchType == 'category' ? 'active' : ''">카테고리검색</div>
                    </div>

                    <div v-if="selectedSearchType == 'search'">
                      <div class="d-flex" style="margin-top: 10px;">
                          <input type="text" id="cont" name="info1" placeholder="상품명을 입력해주세요">
                      </div>

                      <div class="button d-flex justify-center">
                          <action-btn>검색</action-btn>
                      </div>
                    </div>
                    <div v-else>
                      <div class="d-flex">
                        <select style="height: 31px;" id="departure" name="departure">
                            <option value="num1">대분류</option>
                            <option value="num2">대분류</option>
                            <option value="num3">대분류</option>
                            <option value="num4">대분류</option>
                        </select>
                        <select style="height: 31px;" id="departure" name="departure">
                            <option value="num1">중분류</option>
                            <option value="num2">중분류</option>
                            <option value="num3">중분류</option>
                            <option value="num4">중분류</option>
                        </select>
                        <select style="height: 31px;" id="departure" name="departure">
                            <option value="num1">소분류</option>
                            <option value="num2">소분류</option>
                            <option value="num3">소분류</option>
                            <option value="num4">소분류</option>
                        </select>
                      </div>

                      <div class="button d-flex justify-center">
                          <action-btn>검색</action-btn>
                      </div>
                    </div>

                    <div style="height: 200px; margin-top: 40px; overflow: scroll;">
                      <table>
                        <colgroup>
                            <col width="4%">
                            <col width="10%">
                            <col width="10%">
                            <col width="15%">
                            <col width="15%">
                            <col width="10%">
                            <col width="5%">
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
                        <tbody style="height: 200px;">
                        <tr>
                            <td>
                                <div class="spot">
                                    <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                                </div>
                            </td>
                            <td><span>12341231</span></td>
                            <td><span>종근당</span></td>
                            <td><span>종근당 활력 홍삼파</span></td>
                            <td><span>대분류>중분류>소분류</span></td>
                            <td><span>25,000원</span></td>
                            <td><span>admin</span></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="spot">
                                    <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                                </div>
                            </td>
                            <td><span>12341231</span></td>
                            <td><span>종근당</span></td>
                            <td><span>종근당 활력 홍삼파</span></td>
                            <td><span>대분류>중분류>소분류</span></td>
                            <td><span>25,000원</span></td>
                            <td><span>admin</span></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="spot">
                                    <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                                </div>
                            </td>
                            <td><span>12341231</span></td>
                            <td><span>종근당</span></td>
                            <td><span>종근당 활력 홍삼파</span></td>
                            <td><span>대분류>중분류>소분류</span></td>
                            <td><span>25,000원</span></td>
                            <td><span>admin</span></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="spot">
                                    <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                                </div>
                            </td>
                            <td><span>12341231</span></td>
                            <td><span>종근당</span></td>
                            <td><span>종근당 활력 홍삼파</span></td>
                            <td><span>대분류>중분류>소분류</span></td>
                            <td><span>25,000원</span></td>
                            <td><span>admin</span></td>
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
        name: "ProductLoadModal",
        props: [
          "dialogs"
        ],
        components:{ BasicBtn, ActionBtn },
        data() {
          return {
            selectedSearchType: 'search'
          }
        }
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

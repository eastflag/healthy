<template>
    <v-container fluid class="boardLayout">
        <table>
            <colgroup>
                <col width="200px">
                <col width="*">
            </colgroup>
            <tr style="border-top: 1px solid #E5E5E5">
                <th>업체명</th>
                <td>
                    <span>종근당</span>
                </td>
            </tr>
            <tr>
                <th>아이디</th>
                <td>
                    <span>store1</span>
                </td>
            </tr>
            <tr>
                <th>사업자번호</th>
                <td>
                  <span>109-86-12345</span>
                </td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td>
                <basic-btn class="mr-3">SMS 비밀번호 초기화</basic-btn>
                <basic-btn>E-mail 비밀번호 초기화</basic-btn>
              </td>
            </tr>
            <tr>
                <th>이메일</th>
                <td>
                <div class="dm_bx">
                    <div class="bx">
                        <input type="text" id="email1" name="email1" placeholder="scn001" disabled>
                        <label for="email1"></label>
                    </div>
                    <div class="dash">@</div>
                    <div class="bx">
                        <input type="text" id="email2" name="email2" placeholder="scln.co.kr" disabled>
                        <label for="email2"></label>
                    </div>
                </div>
                </td>
            </tr>
            <tr>
              <th>연락처</th>
              <td>
                <div class="dm_bx">
                  <div class="bx">
                    <input type="text" id="phone1" name="phone1" placeholder="010" disabled>
                    <label for="phone1"></label>
                  </div>
                  <div class="dash">-</div>
                  <div class="bx">
                    <input type="text" id="phone2" name="phone2" placeholder="1234" disabled>
                    <label for="phone2"></label>
                  </div>
                  <div class="dash">-</div>
                  <div class="bx">
                    <input type="text" id="phone3" name="phone3" placeholder="5678" disabled>
                    <label for="phone3"></label>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="addr">
              <th>주소</th>
              <td>
                  <div class="dm_bx mb-2">
                    <div class="bx">
                      <input type="text" id="post" name="post" placeholder="07769" disabled>
                      <label for="post"></label>
                    </div>
                    <basic-btn>우편번호 검색</basic-btn>
                  </div>
                  <div class="dm_bx">
                    <div class="addr1">
                      <input type="text" id="address1" name="address1" placeholder="서울 강서구 마곡중앙" disabled>
                      <label for="address1"></label>
                    </div>
                    <div class="bx">
                      <input type="text" id="address2" name="address2" placeholder="장흥빌딩" disabled>
                      <label for="address2"></label>
                    </div>
                  </div>
              </td>
            </tr>
        </table>

        <!-- 이용/운영 정보 -->
        <div class="title d-flex justify-space-between">
          <div class="d-flex"><v-icon class="titleIcon">$titleIcon</v-icon><span>이용/운영 정보</span></div>
          <basic-btn @click="dialogs.showStoreAttachedDocumentModal = true">첨부서류</basic-btn>
        </div>

        <table>
          <colgroup>
            <col width="200px">
            <col width="600px">
            <col width="200px">
            <col width="*">
          </colgroup>
          <tr style="border-top: 1px solid #E5E5E5">
            <th>상태</th>
            <td>
              <div class="selectbx">
                <select id="status" name="status">
                  <option value="num1">정상</option>
                  <option value="num2">정상2</option>
                  <option value="num3">정상3</option>
                </select>
              </div>
            </td>
            <th><span>&nbsp;</span></th>
            <td><span>&nbsp;</span></td>
          </tr>
          <tr>
            <th>누적정산</th>
            <td>
              <span class="mr-3">10,000,000원</span>
              <basic-btn @click="dialogs.showStoreCalculationListModal = true">정산내역보기</basic-btn>
            </td>
            <th>상품정보</th>
            <td>
              <span class="mr-3">2개</span>
              <basic-btn @click="dialogs.showStoreProductInfoModal = true">상품 정보 보기</basic-btn>
            </td>
          </tr>
          <tr>
            <th>방문횟수</th>
            <td>
              <span class="mr-3">23회</span>
              <basic-btn @click="dialogs.showStoreVisitHistoryModal = true">방문 기록 보기</basic-btn>
            </td>
            <th>가입일</th>
            <td><span>2021-09-01 12:30:20</span></td>
          </tr>
          <tr>
            <th>휴면회원</th>
            <td>
              <span  class="mr-3">N</span>
              <basic-btn @click="dialogs.showStoreDormantMemberModal = true">이력 보기</basic-btn>
            </td>
            <th>회원정보</th>
            <td>
              <span>영구회원</span>
            </td>
          </tr>
        </table>

        <store-attached-document-modal :dialogs="dialogs"></store-attached-document-modal>
        <store-calculation-list-modal :dialogs="dialogs"></store-calculation-list-modal>
        <store-product-info-modal :dialogs="dialogs"></store-product-info-modal>
        <store-visit-history-modal :dialogs="dialogs"></store-visit-history-modal>
        <store-dormant-member-modal :dialogs="dialogs"></store-dormant-member-modal>
    </v-container>
</template>

<script>
    import BasicBtn from "../../buttonComponents/BasicBtn";
    import StoreCalculationListModal from "./storeModal/StoreCalculationListModal";
    import StoreVisitHistoryModal from "./storeModal/StoreVisitHistoryModal";
    import StoreDormantMemberModal from "./storeModal/StoreDormantMemberModal";
    import StoreProductInfoModal from "./storeModal/StoreProductInfoModal";
    import StoreAttachedDocumentModal from "./storeModal/StoreAttachedDocumentModal";

    export default {
        name: "StoreMemberEdit",
        components: {BasicBtn, StoreAttachedDocumentModal, StoreCalculationListModal, StoreProductInfoModal, StoreVisitHistoryModal, StoreDormantMemberModal},
        data() {
            return {
              dialogs: {
                showStoreAttachedDocumentModal: false,
                showStoreCalculationListModal: false,
                showStoreProductInfoModal: false,
                showStoreVisitHistoryModal: false,
                showStoreDormantMemberModal: false,
              }
            }
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app{
        .boardLayout{
            max-width: 1680px;
            min-height: 883px;
            height: auto;
            margin: 10px auto 0 auto;
            border: 1px solid $color-bg-border;
            border-radius:  $border-radius-root;
            background-color: $color-white;

            .title{
              width: 1612px;
              margin: 40px auto 0;
              font-size: $font-16;
              font-weight: bold;

              .titleIcon{
                margin-right: 10px;
              }
            }

            table{
                width: 1612px;
                max-width: 1612px;
                margin: 20px 0 30px 30px;

                tr{
                    border-bottom: 1px solid $color-border;
                    &.addr {
                      height: 90px;
                      th {
                        height: inherit;
                      }
                      td {
                        height: inherit;
                        vertical-align: middle;
                        .addr1 {
                          width: 500px;
                        }
                      }
                    }
                    th {
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      height: 52px;
                      font-size: $font-13;
                      background: $color-table-bg;
                    }
                    td {
                      padding: 0 32px;
                      font-size: $font-12;
                      text-align: left;

                      //&:first-child{
                      //  border-bottom: none;
                      //}

                      .dm_bx {
                        position: relative;
                        width: 100%;
                        //height: inherit;
                        display: flex;
                        align-items: center;

                        .bx {
                          display: inline-block;
                          width: 260px;
                          height: 30px;
                          margin: 0 10px;

                          &:first-child {
                            margin-left: 0;
                          }
                        }
                        .dash {
                          display: inline-block;
                          width: 15px;
                          text-align: center;
                        }
                      }
                      .selectbx{
                        width: 100%;
                        select{
                          width: 260px;
                          margin-right: 25px;
                          background:url('~@/assets/images/icons/search.svg') no-repeat 226px center;

                          option {
                            height: 20px;
                            font-size: $font-20;
                          }
                        }
                        input{
                          width: 650px;
                          &:focus{
                            border: 1px solid $color-sub;
                          }
                        }
                      }
                      .consent {
                        font-size: $font-14;
                      }
                      .spot {
                        display: inline-block;
                        width:80px;
                        em {
                          padding-left: 26px;
                        }
                      }
                    }
                }
            }
        }
    }
</style>

<template>
    <v-container fluid class="boardLayout">
        <template v-if="memberKind == 'customer'">
          <table>
              <colgroup>
                  <col width="200px">
                  <col width="600px">
                  <col width="200px">
                  <col width="*">
              </colgroup>
              <tr style="border-top: 1px solid #E5E5E5">
                  <th>회원구분</th>
                  <td>
                      <span>고객회원</span>
                  </td>
              </tr>
              <tr>
                  <th>이름</th>
                  <td>
                      <span>홍길동</span>
                  </td>
              </tr>
              <tr>
                  <th>아이디</th>
                  <td>
                    <span>user1</span>
                  </td>
              </tr>
            <tr>
              <th>생년월일/성별</th>
              <td>
                <span>1993-12-01 (여)</span>
              </td>
            </tr>
            <tr>
              <th>휴대폰번호</th>
              <td>
                <span>010-1***-2***</span>
              </td>
            </tr>
          </table>
        </template>

        <template v-else-if="memberKind == 'trchnical'">
          <table>
            <colgroup>
              <col width="200px">
              <col width="600px">
              <col width="200px">
              <col width="*">
            </colgroup>
            <tr style="border-top: 1px solid #E5E5E5">
              <th>회원구분</th>
              <td>
                <span>전문인회원</span>
              </td>
            </tr>
            <tr>
              <th>이름</th>
              <td>
                <span>김*강</span>
              </td>
            </tr>
            <tr>
              <th>아이디</th>
              <td>
                <span>pro01</span>
              </td>
            </tr>
            <tr>
              <th>생년월일/성별</th>
              <td>
                <span>1993-12-01 (여)</span>
              </td>
            </tr>
            <tr>
              <th>휴대폰번호</th>
              <td>
                <span>010-1***-2***</span>
              </td>
            </tr>
          </table>
        </template>

      <template v-else>
        <table>
          <colgroup>
            <col width="200px">
            <col width="600px">
            <col width="200px">
            <col width="*">
          </colgroup>
          <tr style="border-top: 1px solid #E5E5E5">
            <th>회원구분</th>
            <td>
              <span>입점업체회원</span>
            </td>
          </tr>
          <tr>
            <th>업체명</th>
            <td>
              <span>종*당</span>
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
              <span>1*9-8*-5***44</span>
            </td>
          </tr>
        </table>
      </template>

        <!-- 이용/운영 정보 -->
        <div class="title d-flex justify-space-between">
          <div class="d-flex"><v-icon class="titleIcon">$titleIcon</v-icon><span>이용/운영 정보</span></div>
        </div>

        <template v-if="memberKind == 'customer'">
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
                  <select id="status" name="status" :disabled="isDisabledUser">
                    <option value="num1">정상</option>
                    <option value="num2">정상2</option>
                    <option value="num3">정상3</option>
                  </select>
                </div>
              </td>
              <th>고객등급</th>
              <td>
                <div class="selectbx">
                  <select id="customer_grade" name="customer_grade" :disabled="isDisabledUser">
                    <option value="num1">1등급</option>
                    <option value="num2">2등급</option>
                    <option value="num3">3등급</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <th>가족회원</th>
              <td>
                <span class="mr-3">Y</span>
                <basic-btn @click="dialogs.showCustomerFamilyModal = true">가족정보</basic-btn>
              </td>
              <th>상담내역</th>
              <td>
                <span class="mr-3">10회</span>
                <basic-btn @click="dialogs.showCustomerConsultListModal = true">상담내역보기</basic-btn>
              </td>
            </tr>
            <tr>
              <th>구매내역</th>
              <td>
                <span class="mr-3">125,000원</span>
                <basic-btn @click="dialogs.showCustomerBuyListModal = true">구매내역보기</basic-btn>
              </td>
              <th>포인트</th>
              <td>
                <span class="mr-3">3,000점</span>
                <basic-btn @click="dialogs.showCustomerPointListModal = true">포인트 내역 보기</basic-btn>
              </td>
            </tr>
            <tr>
              <th>방문횟수</th>
              <td>
                <span class="mr-3">23회</span>
                <basic-btn @click="dialogs.showCustomerVisitHistoryModal = true">방문 기록 보기</basic-btn>
              </td>
              <th>가입일</th>
              <td>
                <span>2021-09-01 12:30:20</span>
              </td>
            </tr>
            <tr>
              <th>휴면회원</th>
              <td>
                <span  class="mr-3">Y</span>
                <basic-btn @click="dialogs.showCustomerDormantMemberModal = true">이력 보기</basic-btn>
              </td>
              <th>회원정보</th>
              <td>
                <span>영구회원</span>
              </td>
            </tr>
          </table>
        </template>

        <template v-else-if="memberKind == 'trchnical'">
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
                  <select id="status" name="status" v-model="userStatus" :disabled="isDisabledUser">
                    <option value="정상">정상</option>
                    <option value="탈퇴">탈퇴</option>
                  </select>
                </div>
              </td>
              <th>전문인등급</th>
              <td>
                <div class="selectbx">
                  <select id="customer_grade" name="customer_grade" :disabled="isDisabledUser">
                    <option value="num1">1등급</option>
                    <option value="num2">2등급</option>
                    <option value="num3">3등급</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <th>가상계좌</th>
              <td>
                <span class="mr-3">신한 110-333-3333333</span>
              </td>
              <th>출금계좌</th>
              <td>
                <div class="selectbx d-flex">
                  <select id="bankSelect" name="bankSelect" style="width: 100px;" :disabled="isDisabledUser">
                    <option value="">은행선택</option>
                  </select>
                  <input type="text" id="detail" name="detail" placeholder="110-333-333333" style="width: 400px;" :disabled="isDisabledUser">
                </div>
              </td>
            </tr>
            <tr>
              <th>정산내역</th>
              <td>
                <span class="mr-3">1,125,000원</span>
                <basic-btn @click="dialogs.showTrchnicalCalculationListModal = true">정산내역보기</basic-btn>
              </td>
              <th>정산금관리</th>
              <td>
                <span class="mr-3">1,000,000원</span>
                <basic-btn @click="dialogs.showTrchnicalBalanceModal = true">정산금 내역 보기</basic-btn>
              </td>
            </tr>
            <tr>
              <th>상담내역</th>
              <td>
                <span class="mr-3">10회</span>
                <basic-btn @click="dialogs.showTrchnicalConsultListModal = true">상담 내역 보기</basic-btn>
              </td>
              <th>&nbsp;</th>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <th>방문횟수</th>
              <td>
                <span class="mr-3">23회</span>
                <basic-btn @click="dialogs.showTrchnicalVisitHistoryModal = true">방문 기록 보기</basic-btn>
              </td>
              <th>가입일</th>
              <td>
                <span>2021-09-01 12:30:20</span>
              </td>
            </tr>
            <tr>
              <th>휴면회원</th>
              <td>
                <span  class="mr-3">N</span>
                <basic-btn @click="dialogs.showTrchnicalDormantMemberModal = true">이력 보기</basic-btn>
              </td>
              <th>회원정보</th>
              <td>
                <span>1년 회원</span>
              </td>
            </tr>
          </table>
        </template>

        <template v-else>
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
                  <select id="status" name="status" :disabled="isDisabledUser">
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
        </template>

        <customer-family-modal :dialogs="dialogs"></customer-family-modal>
        <customer-consult-list-modal :dialogs="dialogs"></customer-consult-list-modal>
        <customer-buy-list-modal :dialogs="dialogs"></customer-buy-list-modal>
        <customer-point-list-modal :dialogs="dialogs"></customer-point-list-modal>
        <customer-visit-history-modal :dialogs="dialogs"></customer-visit-history-modal>
        <customer-dormant-member-modal :dialogs="dialogs"></customer-dormant-member-modal>
        <trchnical-calculation-list-modal :dialogs="dialogs"></trchnical-calculation-list-modal>
        <trchnical-balance-modal :dialogs="dialogs"></trchnical-balance-modal>
        <trchnical-consult-list-modal :dialogs="dialogs"></trchnical-consult-list-modal>
        <trchnical-visit-history-modal :dialogs="dialogs"></trchnical-visit-history-modal>
        <trchnical-dormant-member-modal :dialogs="dialogs"></trchnical-dormant-member-modal>
        <store-attached-document-modal :dialogs="dialogs"></store-attached-document-modal>
        <store-calculation-list-modal :dialogs="dialogs"></store-calculation-list-modal>
        <store-product-info-modal :dialogs="dialogs"></store-product-info-modal>
        <store-visit-history-modal :dialogs="dialogs"></store-visit-history-modal>
        <store-dormant-member-modal :dialogs="dialogs"></store-dormant-member-modal>
    </v-container>
</template>

<script>
    import BasicBtn from "../../buttonComponents/BasicBtn";
    import CustomerFamilyModal from "./customerModal/CustomerFamilyModal";
    import CustomerConsultListModal from "./customerModal/CustomerConsultListModal";
    import CustomerBuyListModal from "./customerModal/CustomerBuyListModal";
    import CustomerPointListModal from "./customerModal/CustomerPointListModal";
    import CustomerVisitHistoryModal from "./customerModal/CustomerVisitHistoryModal";
    import CustomerDormantMemberModal from "./customerModal/CustomerDormantMemberModal";
    import TrchnicalCalculationListModal from "./trchnicalModal/TrchnicalCalculationListModal";
    import TrchnicalBalanceModal from "./trchnicalModal/TrchnicalBalanceModal";
    import TrchnicalConsultListModal from "./trchnicalModal/TrchnicalConsultListModal";
    import TrchnicalVisitHistoryModal from "./trchnicalModal/TrchnicalVisitHistoryModal";
    import TrchnicalDormantMemberModal from "./trchnicalModal/TrchnicalDormantMemberModal";
    import StoreAttachedDocumentModal from "./storeModal/StoreAttachedDocumentModal";
    import StoreCalculationListModal from "./storeModal/StoreCalculationListModal";
    import StoreProductInfoModal from "./storeModal/StoreProductInfoModal";
    import StoreVisitHistoryModal from "./storeModal/StoreVisitHistoryModal";
    import StoreDormantMemberModal from "./storeModal/StoreDormantMemberModal";

    export default {
        name: "WithdrawalMemberEdit",
        props: ['userStatus'],
        components: {BasicBtn,
          CustomerFamilyModal,
          CustomerConsultListModal,
          CustomerBuyListModal,
          CustomerPointListModal,
          CustomerVisitHistoryModal,
          CustomerDormantMemberModal,
          TrchnicalCalculationListModal, TrchnicalBalanceModal, TrchnicalConsultListModal, TrchnicalVisitHistoryModal, TrchnicalDormantMemberModal,
          StoreAttachedDocumentModal, StoreCalculationListModal, StoreProductInfoModal, StoreVisitHistoryModal, StoreDormantMemberModal
        },
        computed: {
          isDisabledUser: function() {
            return this.userStatus === '탈퇴'
          }
        },
        data() {
            return {
              memberKind: 'trchnical', // trchnical or store
              dialogs: {
                showCustomerFamilyModal: false,
                showCustomerConsultListModal: false,
                showCustomerBuyListModal: false,
                showCustomerPointListModal: false,
                showCustomerVisitHistoryModal: false,
                showCustomerDormantMemberModal: false,
                showTrchnicalCalculationListModal: false,
                showTrchnicalBalanceModal: false,
                showTrchnicalConsultListModal: false,
                showTrchnicalVisitHistoryModal: false,
                showTrchnicalDormantMemberModal: false,
                showStoreAttachedDocumentModal: false,
                showStoreCalculationListModal: false,
                showStoreProductInfoModal: false,
                showStoreVisitHistoryModal: false,
                showStoreDormantMemberModal: false,
              },
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

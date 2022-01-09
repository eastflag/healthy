<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
        <table>
            <colgroup>
                <col width="200px">
                <col width="*">
            </colgroup>
            <tr style="border-top: 1px solid #E5E5E5">
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
            <tr>
              <th>마케팅동의</th>
              <td>
                <span class="consent mr-3">SMS:</span>
                <div v-for="(item, index) in smsConsent" :key="index" class="spot">
                  <input class="radiobx" type="radio" :id="item.idx" name="smsconsent" disabled><label :for="item.idx"><em>{{ item.title }}</em></label>
                </div>
                <span class="consent ml-8 mr-3">이메일:</span>
                <div v-for="(item, index) in emailConsent" :key="index" class="spot">
                  <input class="radiobx" type="radio" :id="item.idx" name="emailconsent" disabled><label :for="item.idx"><em>{{ item.title }}</em></label>
                </div>
                <span class="consent ml-8 mr-3">PUSH:</span>
                <div v-for="(item, index) in pushConsent" :key="index" class="spot">
                  <input class="radiobx" type="radio" :id="item.idx" name="pushconsent" disabled><label :for="item.idx"><em>{{ item.title }}</em></label>
                </div>
              </td>
            </tr>
        </table>

        <div class="title d-flex justify-space-between">
          <div class="d-flex"><v-icon class="titleIcon">$titleIcon</v-icon><span>이용/운영 정보</span></div>
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
            <th>고객등급</th>
            <td>
              <div class="selectbx">
                <select id="customer_grade" name="customer_grade">
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

        <customer-family-modal :dialogs="dialogs"></customer-family-modal>
        <customer-consult-list-modal :dialogs="dialogs"></customer-consult-list-modal>
        <customer-buy-list-modal :dialogs="dialogs"></customer-buy-list-modal>
        <customer-point-list-modal :dialogs="dialogs"></customer-point-list-modal>
        <customer-visit-history-modal :dialogs="dialogs"></customer-visit-history-modal>
        <customer-dormant-member-modal :dialogs="dialogs"></customer-dormant-member-modal>
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

export default {
        name: "MemberEdit",
        components: {BasicBtn,
          CustomerFamilyModal,
          CustomerConsultListModal,
          CustomerBuyListModal,
          CustomerPointListModal,
          CustomerVisitHistoryModal,
          CustomerDormantMemberModal
        },
        data() {
            return {
              dialogs: {
                showCustomerFamilyModal: false,
                showCustomerConsultListModal: false,
                showCustomerBuyListModal: false,
                showCustomerPointListModal: false,
                showCustomerVisitHistoryModal: false,
                showCustomerDormantMemberModal: false,
              },
              smsConsent: [
                {
                  idx: 'smsConsent1',
                  title: '동의',
                },
                {
                  idx: 'smsConsent2',
                  title: '미동의',
                },
              ],
              emailConsent: [
                {
                  idx: 'emailConsent1',
                  title: '동의',
                },
                {
                  idx: 'emailConsent2',
                  title: '미동의',
                },
              ],
              pushConsent: [
                {
                  idx: 'pushConsent1',
                  title: '동의',
                },
                {
                  idx: 'pushConsent2',
                  title: '미동의',
                },
              ],
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

<template>
    <v-container fluid class="boardLayout">
        <table>
            <colgroup>
                <col width="200px">
                <col width="600px">
                <col width="200px">
                <col width="*">
            </colgroup>
            <tr style="border-top: 1px solid #E5E5E5">
                <th>이름</th>
                <td>
                    <span>김프로</span>
                </td>
            </tr>
            <tr>
                <th>아이디</th>
                <td>
                    <span>pro01</span>
                </td>
                <th>추천인ID</th>
                <td>
                    <span>masterpro01</span>
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

        <!-- 전문인 정보 -->
        <div class="title d-flex justify-space-between">
          <div class="d-flex"><v-icon class="titleIcon">$titleIcon</v-icon><span>전문인 정보</span></div>
          <basic-btn class="ml-3" @click="dialogs.showTrchnicalAttachmentModal = true">첨부서류</basic-btn>
        </div>

        <table>
          <colgroup>
            <col width="200px">
            <col width="*">
          </colgroup>
          <tr style="border-top: 1px solid #E5E5E5">
            <th>전문인 유형</th>
            <td>
              <span>약사</span>
            </td>
          </tr>
          <tr>
            <th>사업장 소개</th>
            <td>
              전문인이 회원가입시 등록한 내용이 표시됩니다.
            </td>
          </tr>
          <tr class="addr">
            <th>사업장 주소</th>
            <td>
              <div class="dm_bx mb-2">
                <div class="bx">
                  <input type="text" id="business_post" name="business_post" placeholder="07769" disabled>
                  <label for="post"></label>
                </div>
                <basic-btn>우편번호 검색</basic-btn>
              </div>
              <div class="dm_bx">
                <div class="addr1">
                  <input type="text" id="business_address1" name="business_address1" placeholder="서울 강서구 마곡중앙" disabled>
                  <label for="address1"></label>
                </div>
                <div class="bx">
                  <input type="text" id="business_address2" name="business_address2" placeholder="장흥빌딩" disabled>
                  <label for="address2"></label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>프로필 관리</th>
            <td>
              전문인이등록한 내용이 표시됩니다.
            </td>
          </tr>
          <tr>
            <th>전문인 소개</th>
            <td>
              Profile.jpg(500kb)_20210901
            </td>
          </tr>
        </table>

        <!-- 이용/운영 정보 -->
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
            <th>전문인등급</th>
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
            <th>가상계좌</th>
            <td>
              <span class="mr-3">신한 110-333-3333333</span>
            </td>
            <th>출금계좌</th>
            <td>
             <div class="selectbx d-flex">
                <select id="claimDetailSelect" name="claimDetailSelect" style="width: 100px;">
                  <option value="">은행선택</option>
                </select>
                <input type="text" id="detail" name="detail" placeholder="110-333-333333" style="width: 400px;">
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

        <trchnical-calculation-list-modal :dialogs="dialogs"></trchnical-calculation-list-modal>
        <trchnical-balance-modal :dialogs="dialogs"></trchnical-balance-modal>
        <trchnical-consult-list-modal :dialogs="dialogs"></trchnical-consult-list-modal>
        <trchnical-visit-history-modal :dialogs="dialogs"></trchnical-visit-history-modal>
        <trchnical-dormant-member-modal :dialogs="dialogs"></trchnical-dormant-member-modal>
        <trchnical-attachment-modal :dialogs="dialogs"></trchnical-attachment-modal>
    </v-container>
</template>

<script>
    import BasicBtn from "../../buttonComponents/BasicBtn";
    import TrchnicalCalculationListModal from "./trchnicalModal/TrchnicalCalculationListModal";
    import TrchnicalBalanceModal from "./trchnicalModal/TrchnicalBalanceModal";
    import TrchnicalVisitHistoryModal from "./trchnicalModal/TrchnicalVisitHistoryModal";
    import TrchnicalDormantMemberModal from "./trchnicalModal/TrchnicalDormantMemberModal";
    import TrchnicalConsultListModal from "./trchnicalModal/TrchnicalConsultListModal";
    import TrchnicalAttachmentModal from "./trchnicalModal/TrchnicalAttachmentModal";

    export default {
        name: "TrchnicalMemberEdit",
        components: {BasicBtn, TrchnicalCalculationListModal, TrchnicalBalanceModal, TrchnicalConsultListModal, TrchnicalVisitHistoryModal, TrchnicalDormantMemberModal, TrchnicalAttachmentModal},
        data() {
            return {
              dialogs: {
                showTrchnicalCalculationListModal: false,
                showTrchnicalBalanceModal: false,
                showTrchnicalConsultListModal: false,
                showTrchnicalVisitHistoryModal: false,
                showTrchnicalDormantMemberModal: false,
                showTrchnicalAttachmentModal: false,
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

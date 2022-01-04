<template>
  <v-dialog v-model="dialogs.showStoreDormantMemberWithdrawalInfoModal" width="400">
    <v-card class="modalLayout">
      <v-card-title class="modalTitle d-flex justify-space-between">
        <div>
          탈퇴 내역 보기
        </div>
        <v-icon>$closeBtn</v-icon>
      </v-card-title>
      <v-card-text>
        <p class="tableTitle">계정: store1</p>
        <v-container class="modalTableLayout">
          <table>
            <colgroup>
              <col width="8%">
              <col width="10%">
              <col width="30%">
              <col width="8%">
            </colgroup>
            <thead>
            <tr>
              <th><span>단계</span></th>
              <th><span>구분</span></th>
              <th><span>약관동의</span></th>
              <th><span>비고</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td rowspan="4"><span>약관동의</span></td>
              <td><span>상품정보</span></td>
              <td>
                <div class="spot">
                    <input class="radiobx" type="radio" id="radio" name="radio"><label for="radio"><em>동의</em></label>
                </div>
                <div class="spot">
                    <input class="radiobx" type="radio" id="radio1" name="radio"><label for="radio1"><em>미동의</em></label>
                </div>
              </td>
              <td/>
            </tr>
            <tr>
              <td><span>배송정보</span></td>
              <td>
                <div class="spot">
                    <input class="radiobx" type="radio" id="radio" name="radio"><label for="radio"><em>동의</em></label>
                </div>
                <div class="spot">
                    <input class="radiobx" type="radio" id="radio1" name="radio"><label for="radio1"><em>미동의</em></label>
                </div>
              </td>
              <td/>
            </tr>
            <tr>
              <td><span>이력소멸</span></td>
              <td>
                <div class="spot">
                    <input class="radiobx" type="radio" id="radio" name="radio"><label for="radio"><em>동의</em></label>
                </div>
                <div class="spot">
                    <input class="radiobx" type="radio" id="radio1" name="radio"><label for="radio1"><em>미동의</em></label>
                </div>
              </td>
              <td/>
            </tr>
            <tr>
              <td><span>정산금내역</span></td>
              <td>
                <div class="spot">
                    <input class="radiobx" type="radio" id="radio" name="radio"><label for="radio"><em>동의</em></label>
                </div>
                <div class="spot">
                    <input class="radiobx" type="radio" id="radio1" name="radio"><label for="radio1"><em>미동의</em></label>
                </div>
              </td>
              <td/>
            </tr>
            <tr>
              <td rowspan="2"><span>이용내역<br/>확인</span></td>
              <td><span>정산금내역</span></td>
              <td>
                <span>1,000,000원</span>
              </td>
              <td/>
            </tr>
            <tr>
              <td><span>상품정보</span></td>
              <td>
                <span>2개</span>
              </td>
              <td/>
            </tr>
            <tr>
              <td><span>설문조사</span></td>
              <td><span>탈퇴유형</span></td>
              <td>
                <span>서비스불만</span>
              </td>
              <td>
                <span>(직접 입력 일 경우 표시)</span>
              </td>
            </tr>
            <tr>
              <td><span>본인확인</span></td>
              <td><span>본인인증</span></td>
              <td>
                <span>2021-09-01 24:00:00</span>
              </td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <delete-btn>닫기</delete-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ActionBtn from "../../../buttonComponents/ActionBtn";
import BasicBtn from "../../../buttonComponents/BasicBtn";
import DeleteBtn from "../../../buttonComponents/DeleteBtn";

export default {
  name: "StoreWithdrawalInfoModal",
  props: [
      "dialogs"
  ],
  components: { ActionBtn , BasicBtn, DeleteBtn }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_index.scss';
#app {
  .modalLayout {
    .logBox {
      border: 1px solid $color-sub;
      padding: 14px;
      .log {
        font-size: $font-12;
        margin-bottom: 6px;
      }
    }

    .modalTableLayout {
      table {
        tbody {
          td {
            text-align: center;
            vertical-align: middle;

            .spot {
              position: initial;
              display:inline-block;
              margin-right: 15px;

                  em {
                      width:100px;
                      padding-left:26px;
                  }
              }
            }
        }
      }
    }

  }

}

</style>

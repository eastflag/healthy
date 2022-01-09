<template>
  <v-dialog v-model="dialogs.showTrchnicalBalanceModal" width="1280">
    <v-card class="modalLayout">
      <v-card-title class="modalTitle d-flex justify-space-between">
        <div>
          정산금 내역 보기
        </div>
        <v-icon>$closeBtn</v-icon>
      </v-card-title>
      <v-card-text>
        <p class="tableTitle">계정: pro01</p>
        <v-container class="modalTableLayout">
          <table>
            <colgroup>
              <col width="14%">
              <col width="14%">
              <col width="22%">
              <col width="14%">
              <col width="16%">
              <col width="20%">
            </colgroup>
            <thead>
            <tr>
              <th><span>구분</span></th>
              <th><span>일자</span></th>
              <th><span>내용</span></th>
              <th><span>금액</span></th>
              <th><span>잔액</span></th>
              <th><span>비고</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><span>입금</span></td>
              <td><span>2021-09-01</span></td>
              <td><span>정산금입금(21.03월 정산금)</span></td>
              <td><span>+1500원</span></td>
              <td><span>1,000,000원</span></td>
              <td></td>
            </tr>
            <tr>
              <td><span>입금</span></td>
              <td><span>2021-09-01</span></td>
              <td><span>정산금입금(21.03월 정산금)</span></td>
              <td><span>+1500원</span></td>
              <td><span>1,000,000원</span></td>
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
  name: "BalanceModal",
  props: [
      "dialogs"
  ],
  components: { ActionBtn , BasicBtn, DeleteBtn }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_index.scss';
@import '~@/assets/scss/popUpModal/popUpCommon.scss';

</style>

<template>
  <v-dialog v-model="dialogs.showCalculationListModal" width="1280">
    <v-card class="modalLayout">
      <v-card-title class="modalTitle d-flex justify-space-between">
        <div>
          정산 내역 보기
        </div>
        <v-icon>$closeBtn</v-icon>
      </v-card-title>
      <v-card-text>
        <p class="tableTitle">계정: pro01</p>
        <v-container class="modalTableLayout">
          <table>
            <colgroup>
              <col width="14%">
              <col width="22%">
              <col width="14%">
              <col width="14%">
              <col width="16%">
              <col width="20%">
            </colgroup>
            <thead>
            <tr>
              <th><span>일자</span></th>
              <th><span>정산내역</span></th>
              <th><span>정산기준일</span></th>
              <th><span>정산금액</span></th>
              <th><span>지급기준일</span></th>
              <th><span>비고</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><span>2021-09-01</span></td>
              <td><span>상담 적립(상담번호:SC123456789)</span></td>
              <td><span>2021-09-01</span></td>
              <td><span>+1500원</span></td>
              <td><span>2021-09-01</span></td>
              <td></td>
            </tr>
            <tr>
              <td><span>2021-09-01</span></td>
              <td><span>상담 적립(상담번호:SC123456789)</span></td>
              <td><span>2021-09-01</span></td>
              <td><span>+1500원</span></td>
              <td><span>2021-09-01</span></td>
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
  name: "CalculationListModal",
  props: [
      "dialogs"
  ],
  components: { ActionBtn , BasicBtn, DeleteBtn }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_index.scss';

</style>

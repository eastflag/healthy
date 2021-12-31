<template>
  <v-dialog v-model="dialogs.showBuyListModal" width="1280">
    <v-card class="modalLayout">
      <v-card-title class="modalTitle d-flex justify-space-between">
        <div>
          구매 내역 보기
        </div>
        <v-icon>$closeBtn</v-icon>
      </v-card-title>
      <v-card-text>
        <p class="tableTitle">계정: user1</p>
        <v-container class="modalTableLayout">
          <table>
            <colgroup>
              <col width="20%">
              <col width="20%">
              <col width="20%">
              <col width="20%">
              <col width="20%">
            </colgroup>
            <thead>
            <tr>
              <th><span>주문일자</span></th>
              <th><span>주문번호</span></th>
              <th><span>주문상품</span></th>
              <th><span>결제금액</span></th>
              <th><span>상태</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><span>2021-09-01</span></td>
              <td><span>OD20211001-123456</span></td>
              <td><span>종근당 외 3건</span></td>
              <td><span>110,000</span></td>
              <td><span>배송진행중</span></td>
            </tr>
            <tr>
              <td><span>2021-09-01</span></td>
              <td><span>OD20211001-123456</span></td>
              <td><span>종근당 외 3건</span></td>
              <td><span>110,000</span></td>
              <td><span>배송완료</span></td>
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
  name: "BuyListModal",
  props: [
      "dialogs"
  ],
  components: { ActionBtn , BasicBtn, DeleteBtn }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_index.scss';

</style>

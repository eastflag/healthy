<template>
  <v-dialog v-model="dialogs.showStoreProductInfoModal" width="1280">
    <v-card class="modalLayout">
      <v-card-title class="modalTitle d-flex justify-space-between">
        <div>
          상품 정보 보기
        </div>
        <v-icon>$closeBtn</v-icon>
      </v-card-title>
      <v-card-text>
        <p class="tableTitle">계정: store1</p>
        <v-container class="modalTableLayout">
          <table>
            <colgroup>
              <col width="12%">
              <col width="12%">
              <col width="12%">
              <col width="14%">
              <col width="14%">
              <col width="12%">
              <col width="12%">
              <col width="12%">
            </colgroup>
            <thead>
            <tr>
              <th><span>등록일자</span></th>
              <th><span>카테고리</span></th>
              <th><span>상품명</span></th>
              <th><span>상품금액</span></th>
              <th><span>등록 상품 수</span></th>
              <th><span>주문 상품 수</span></th>
              <th><span>재고</span></th>
              <th><span>판매여부</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><span>2021-09-01</span></td>
              <td><span>영양제</span></td>
              <td><span>종근당 비타민</span></td>
              <td><span>100,000원</span></td>
              <td><span>999</span></td>
              <td><span>100</span></td>
              <td><span>899</span></td>
              <td><span>판매중</span></td>
            </tr>
            <tr>
              <td><span>2021-09-01</span></td>
              <td><span>영양제</span></td>
              <td><span>종근당 비타민</span></td>
              <td><span>100,000원</span></td>
              <td><span>999</span></td>
              <td><span>100</span></td>
              <td><span>899</span></td>
              <td><span>판매중</span></td>
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
  name: "ProductInfoModal",
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

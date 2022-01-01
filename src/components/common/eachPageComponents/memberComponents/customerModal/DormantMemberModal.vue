<template>
  <v-dialog v-model="dialogs.showDormantMemberModal" width="1280">
    <v-card class="modalLayout">
      <v-card-title class="modalTitle d-flex justify-space-between">
        <div>
          휴면회원 이력보기
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
              <col width="35%">
              <col width="25%">
            </colgroup>
            <thead>
            <tr>
              <th><span>구분</span></th>
              <th><span>일자</span></th>
              <th><span>설명</span></th>
              <th><span>휴면여부</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><span>휴면회원전환</span></td>
              <td><span>2021-09-01</span></td>
              <td><span>1년간 로그인 이력없음</span></td>
              <td><span>Y</span></td>
            </tr>
            <tr>
              <td><span>휴면회원전환</span></td>
              <td><span>2021-09-01</span></td>
              <td><span>1년간 로그인 이력없음</span></td>
              <td><span>Y</span></td>
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
  name: "DormantMemberModal",
  props: [
      "dialogs"
  ],
  components: { ActionBtn , BasicBtn, DeleteBtn }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_index.scss';

</style>

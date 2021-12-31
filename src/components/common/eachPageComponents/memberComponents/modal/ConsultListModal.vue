<template>
  <v-dialog v-model="dialogs.showConsultListModal" width="1280">
    <v-card class="modalLayout">
      <v-card-title class="modalTitle d-flex justify-space-between">
        <div>
          상담 내역 보기
        </div>
        <v-icon>$closeBtn</v-icon>
      </v-card-title>
      <v-card-text>
        <p class="tableTitle">계정: user1</p>
        <v-container class="modalTableLayout">
          <table>
            <colgroup>
              <col width="14%">
              <col width="14%">
              <col width="14%">
              <col width="14%">
              <col width="16%">
              <col width="14%">
              <col width="14%">
            </colgroup>
            <thead>
            <tr>
              <th><span>상담일자</span></th>
              <th><span>상담번호</span></th>
              <th><span>상담유형</span></th>
              <th><span>전문인명</span></th>
              <th><span>상담키워드</span></th>
              <th><span>대상자</span></th>
              <th><span>상태</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><span>2021-09-01</span></td>
              <td><span>SC12345678</span></td>
              <td><span>화상</span></td>
              <td><span>이약사</span></td>
              <td><span>#두통#치통#근육통</span></td>
              <td><span>본인</span></td>
              <td><span>상담완료</span></td>
            </tr>
            <tr>
              <td><span>2021-09-01</span></td>
              <td><span>SC12345678</span></td>
              <td><span>음성</span></td>
              <td><span>이약사</span></td>
              <td><span>#두통#치통#근육통</span></td>
              <td><span>가족</span></td>
              <td><span>상담완료</span></td>
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
  name: "ConsultListModal",
  props: [
      "dialogs"
  ],
  components: { ActionBtn , BasicBtn, DeleteBtn }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_index.scss';

</style>

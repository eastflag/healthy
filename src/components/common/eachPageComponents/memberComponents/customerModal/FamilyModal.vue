<template>
  <v-dialog v-model="dialogs.showFamilyModal" width="1280">
    <v-card class="modalLayout">
      <v-card-title class="modalTitle d-flex justify-space-between">
        <div>
          가족 정보 보기
        </div>
        <v-icon>$closeBtn</v-icon>
      </v-card-title>
      <v-card-text>
        <p class="tableTitle">계정: user1</p>
        <v-container class="modalTableLayout">
          <table>
            <colgroup>
              <col width="8%">
              <col width="8%">
              <col width="14%">
              <col width="14%">
              <col width="20%">
              <col width="18%">
              <col width="18%">
            </colgroup>
            <thead>
            <tr>
              <th><span>구분</span></th>
              <th><span>명칭</span></th>
              <th><span>생년월일_성별</span></th>
              <th><span>등록일자</span></th>
              <th><span>증상</span></th>
              <th><span>주문번호</span></th>
              <th><span>상담번호</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><span>가족</span></td>
              <td><span>엄마</span></td>
              <td><span>1962-09-09(여)</span></td>
              <td><span>2021-09-01</span></td>
              <td><span>#두통#치통#근육통</span></td>
              <td><span>OD21211001-123456</span></td>
              <td><span>SC123456789</span></td>
            </tr>
            <tr>
              <td><span>가족</span></td>
              <td><span>엄마</span></td>
              <td><span>1962-09-09(여)</span></td>
              <td><span>2021-09-01</span></td>
              <td><span>#두통#치통#근육통</span></td>
              <td><span>OD21211001-123456</span></td>
              <td><span>SC123456789</span></td>
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
  name: "FamilyModal",
  props: [
      "dialogs"
  ],
  components: { ActionBtn , BasicBtn, DeleteBtn }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_index.scss';


</style>

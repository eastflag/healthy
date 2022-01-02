<template>
  <v-dialog v-model="dialogs.showAttachedDocumentModal" width="800">
    <v-card class="modalLayout">
      <v-card-title class="modalTitle d-flex justify-space-between">
        <div>
          첨부서류
        </div>
        <v-icon>$closeBtn</v-icon>
      </v-card-title>
      <v-card-text>
        <p class="tableTitle">계정: store1</p>
        <v-container class="modalTableLayout">
          <table>
            <colgroup>
              <col width="15%">
              <col width="60%">
              <col width="*%">
            </colgroup>
            <thead>
            <tr>
              <th><span>구분</span></th>
              <th><span>파일명</span></th>
              <th><span>관리</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><span>법인등록증</span></td>
              <td><span>file.jpg(500kb)_20210901</span></td>
              <td>
                <div class="d-flex justify-space-around">
                  <span>보기</span>
                  <span>등록</span>
                  <span>삭제</span>
                </div>
              </td>
            </tr>
            <tr>
              <td><span>법인등록증</span></td>
              <td><span>file.jpg(500kb)_20210901</span></td>
              <td>
                <div class="d-flex justify-space-around">
                  <span>보기</span>
                  <span>등록</span>
                  <span>삭제</span>
                </div>
              </td>
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
  name: "AttachedDocumentModal",
  props: [
      "dialogs"
  ],
  components: { ActionBtn , BasicBtn, DeleteBtn }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_index.scss';

</style>

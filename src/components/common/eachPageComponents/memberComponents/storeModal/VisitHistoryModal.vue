<template>
  <v-dialog v-model="dialogs.showVisitHistoryModal" width="400">
    <v-card class="modalLayout">
      <v-card-title class="modalTitle d-flex justify-space-between">
        <div>
          방문 기록 보기
        </div>
        <v-icon>$closeBtn</v-icon>
      </v-card-title>
      <v-card-text>
        <p class="tableTitle">계정: store1</p>
        <v-container class="modalTableLayout">
          <div class="logBox">
            <p class="log">2021-09-01 12:30:20</p>
            <p class="log">2021-09-01 12:30:20</p>
            <p class="log">2021-09-01 12:30:20</p>
            <p class="log">2021-09-01 12:30:20</p>
            <p class="log">2021-09-01 12:30:20</p>
            <p class="log">2021-09-01 12:30:20</p>
          </div>
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
  name: "VisitHistoryModal",
  props: [
      "dialogs"
  ],
  components: { ActionBtn , BasicBtn, DeleteBtn }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_index.scss';

.modalLayout {
  .logBox {
    border: 1px solid $color-sub;
    padding: 14px;
    .log {
      font-size: $font-12;
      margin-bottom: 6px;
    }
  }
}
</style>

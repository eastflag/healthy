<template>
  <v-dialog v-model="dialogs.showTrchnicalAttachmentModal" width="600">
    <v-card class="modalLayout">
      <v-card-title class="modalTitle d-flex justify-space-between">
        <div>
          첨부서류
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
              <td><span>사업자등록증</span></td>
              <td><span>file.jpg(500kb)_2021 0901</span></td>
              <td class="action"><span>보기</span><span>등록</span><span>삭제</span></td>
            </tr>
            <tr>
              <td><span>사업장주소 사진</span></td>
              <td><span>2021-09-01</span></td>
              <td class="action"><span>보기</span><span>등록</span><span>삭제</span></td>
            </tr>
            <tr>
              <td><span>기타</span></td>
              <td><span></span></td>
              <td class="action"><span>보기</span><span>등록</span><span>삭제</span></td>
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
  name: "TrchnicalAttachmentModal",
  props: [
      "dialogs"
  ],
  components: { ActionBtn , BasicBtn, DeleteBtn }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_index.scss';
@import '~@/assets/scss/popUpModal/popUpCommon.scss';

#app{
  .modalLayout{
    .modalTableLayout{
      table{
        tbody{
          tr{
            td{
              &.action{
                text-align: center;

                span{
                  display: inline-block;
                  padding: 3px 6px;
                }
              }
            }
          }

        }
      }
    }
  }
}

</style>

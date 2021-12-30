<template>
  <v-dialog  content-class="rounded-0 elevation-0" width="400px">
    <!--value="true"-->
    <v-card class="rounded-0 elevation-0 modalLayout">
      <div class="and_popup_bx">
        <p>작성한 내용이 저장되지 않습니다.
          <br>약관목록 페이지로 이동 하시겠습니까?</p>
        <div class="button d-flex align-center justify-center">
          <basic-btn>취소</basic-btn>
          <action-btn>확인</action-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import ActionBtn from "../../../buttonComponents/ActionBtn";
import BasicBtn from "../../../buttonComponents/BasicBtn";

export default {
  name: "FamilyModal",
  components: { ActionBtn , BasicBtn }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/popUpModal/popUpCommon.scss';
#app{
  .button{
    button{
      &:first-child{
        margin-right: 15px;
      }
    }
  }
}
</style>

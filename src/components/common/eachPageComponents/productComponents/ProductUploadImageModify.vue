<template>
  <v-card class="rounded-0 elevation-0">
      <div class="modalLayout">
          <div class="inputLayoutContent">
              <!--파일 업로드 inputLayout-->
          </div>
      </div>
      <div class="d-flex justify-center">
          <action-btn>보기</action-btn>
          <basic-btn>삭제</basic-btn>
      </div>
  </v-card>
</template>

<script>
import ActionBtn from '../../buttonComponents/ActionBtn'
import BasicBtn from '../../buttonComponents/BasicBtn'

export default {
  name: "ProductUploadImageAdd",
  components: { ActionBtn , BasicBtn },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_index.scss';
#app{
  .modalLayout{
    width: 164.5px;
    height: 124px;
    margin-right: 16px;
    margin-left: 16px;
    margin-bottom: 20px;
    border: 1px solid $color-bg-border;
    border-radius:  $border-radius-root;
    background-color: $color-white;
  }

  .btn.mid {
    min-width: 80px;
    margin-left: 3px;
    margin-right: 3px;
  }
}
</style>

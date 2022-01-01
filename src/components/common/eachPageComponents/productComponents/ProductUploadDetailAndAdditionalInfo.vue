<template>
  <v-container fluid class="boardLayout">
    <div class="title">상세/추가정보</div>

    <table>
      <colgroup>
        <col width="200px">
        <col width="*">
      </colgroup>
      <tr style="border-top: 1px solid #E5E5E5;">
        <th>상품 간략소개</th>
        <td>
          <div class="d-flex">
            <input type="text" id="cont" name="info1" placeholder="INPUTBOX">
          </div>
        </td>
      </tr>
      <tr>
        <th style="height: 330px;">상품 상세정보</th>
        <td style="vertical-align: middle;">
            <product-upload-editor/>
        </td>
      </tr>
    </table>
  </v-container>
</template>

<script>
import ActionBtn from '../../buttonComponents/ActionBtn'
import BasicBtn from '../../buttonComponents/BasicBtn'
import dayjs from 'dayjs'
import ProductUploadImageAdd from './ProductUploadImageAdd'
import ProductUploadImageModify from './ProductUploadImageModify'
import ProductUploadEditor from './ProductUploadEditor'

export default {
  name: "ProductUploadDetailAndAdditionalInfo",
  components: { ActionBtn , BasicBtn , dayjs, ProductUploadImageAdd, ProductUploadImageModify, ProductUploadEditor },
  data() {
    return {
      todate: dayjs().format("YYYY-MM-DD"),
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_index.scss';
#app{
  .boardLayout{
    max-width: 1680px;
    height: 490px;
    margin: 15px auto 0 auto;
    border: 1px solid $color-bg-border;
    border-radius:  $border-radius-root;
    background-color: $color-white;

    .title{
      margin: 30px 0 30px 30px;
    }

    table{
      width: 1612px;
      max-width: 1612px;
      margin: 30px 0 30px 30px;

      tr{
        border-bottom: 1px solid $color-border;

        th{
          display: flex;
          align-items: center;
          height: 52px;
          padding-left:16px;
          font-size: $font-13;
          background: $color-table-bg;
        }

        td{
          padding:0 32px;
          font-size: $font-12;
          text-align:left;
        }
      }
    }
  }
}
</style>

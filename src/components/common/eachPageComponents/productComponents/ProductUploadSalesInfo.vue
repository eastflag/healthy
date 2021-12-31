<template>
  <v-container fluid class="boardLayout">
    <div class="title">판매정보</div>

    <table>
      <colgroup>
        <col width="200px">
        <col width="400px">
        <col width="200px">
        <col width="*">
      </colgroup>
      <tr style="border-top: 1px solid #E5E5E5;">
        <th>판매정보</th>
        <td>
          <div class="d-flex">
            <input class="sales-input" type="number" id="cont" name="info1" placeholder="8자리 이내의 숫자">
          </div>
        </td>
        <th>할인금액(원)</th>
        <td>
          <div class="d-flex">
            <input class="sales-input" type="number" id="cont" name="info1" placeholder="8자리 이내의 숫자">
          </div>
        </td>
      </tr>
      <tr>
        <th>재고(개)</th>
        <td>
          <div class="d-flex">
            <input class="sales-input" type="number" id="cont" name="info1" placeholder="3자리 이내의 숫자(최대999)">
          </div>
        </td>
        <th>ID당 구매수량(개)</th>
        <td>
          <div class="d-flex">
            <input class="sales-input" type="number" id="cont" name="info1" placeholder="3자리 이내의 숫자 (0입력 시 999개로 입력)">
          </div>
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

export default {
  name: "ProductUploadSaleInfo",
  components: { ActionBtn , BasicBtn , dayjs, ProductUploadImageAdd, ProductUploadImageModify },
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
    height: 230px;
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

      .sales-input {
          width: 300px;
          margin-right: 10px;
      }

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

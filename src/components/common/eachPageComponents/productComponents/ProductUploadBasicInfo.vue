<template>
  <v-container fluid class="boardLayout">
    <div class="title">기본정보</div>

    <table>
      <colgroup>
        <col width="200px">
        <col width="400px">
        <col width="200px">
        <col width="*">
      </colgroup>
      <tr style="border-top: 1px solid #E5E5E5;">
        <th>식약처코드</th>
        <td>
          <div class="d-flex">
            <input class="store-input" type="text" id="cont" name="info1" placeholder="INPUTBOX">
            <basic-btn>코드 불러오기</basic-btn>
          </div>
        </td>
      </tr>
      <tr>
        <th>제품명</th>
        <td>
          <div class="d-flex">
            <input class="store-input" type="text" id="cont" name="info1" placeholder="INPUTBOX">
          </div>
        </td>
      </tr>
      <tr>
        <th>제조사</th>
        <td>
          <div class="d-flex">
            <input class="store-input" type="text" id="cont" name="info1" placeholder="INPUTBOX">
          </div>
        </td>
        <th>원산지</th>
        <td>
          <div class="d-flex">
            <input class="store-input" type="text" id="cont" name="info1" placeholder="INPUTBOX">
          </div>
        </td>
      </tr>
      <tr>
        <th>상품코드</th>
        <td>
          <div class="d-flex">
            <input class="store-input" type="text" id="cont" name="info1" placeholder="INPUTBOX">
          </div>
        </td>
      </tr>
      <tr>
        <th>검색 키워드</th>
        <td>
          <div class="d-flex">
            <input type="text" id="cont" name="info1" placeholder="INPUTBOX">
          </div>
        </td>
      </tr>
      <tr>
      <tr class="product-image-row">
        <th>대표 이미지</th>
        <td>
          <div class="d-flex">
            <product-upload-image-modify/>
          </div>
        </td>
      </tr>
      <tr class="product-image-row">
        <th>추가 이미지</th>
        <td>
          <div class="d-flex">
            <product-upload-image-modify/>
            <product-upload-image-modify/>
            <product-upload-image-add/>
            <product-upload-image-add/>
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
  name: "ProductUploadBasicInfo",
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
    height: 890px;
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

      .product-image-row {
        th {
          padding-top: 15px;
          height: 250px;
        }

        td {
          vertical-align: middle;
        }
      }

      tr{
        border-bottom: 1px solid $color-border;

        .store-input {
            width: 200px;
            margin-right: 10px;
        }

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

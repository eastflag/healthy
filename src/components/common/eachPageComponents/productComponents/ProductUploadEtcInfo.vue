<template>
  <v-container fluid class="boardLayout">
    <div class="title">기타정보</div>

    <table>
      <colgroup>
        <col width="200px">
        <col width="*">
      </colgroup>
      <tr style="border-top: 1px solid #E5E5E5;">
        <th rowspan="2" class="relatedProductTh">관련상품</th>
        <td class="dataLoadWrapper">
          <div class="d-flex">
            <basic-btn @click="dialogs.showProductLoadModal = true">상품불러오기</basic-btn>
          </div>
        </td>
      </tr>
      <tr>
        <td class="innerTableTd">
          <div class="innerTableInfoWrapper">
            <span>내역</span>
            <basic-btn>삭제</basic-btn>
          </div>
            <table class="innerTable">
              <colgroup>
                <col width="2%">
                <col width="5%">
                <col width="15%">
                <col width="30%">
                <col width="30%">
                <col width="20%">
            </colgroup>
            <thead>
            <tr>
                <th style="vertical-align: inherit;">
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                    </div>
                </th>
                <th><span>제품코드</span></th>
                <th><span>제조사</span></th>
                <th><span>상품명</span></th>
                <th><span>카테고리</span></th>
                <th><span>판매가</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list2" name="list_check"><label for="list2"></label>
                    </div>
                </td>
                <td><span>1234</span></td>
                <td><span>종근당</span></td>
                <td><span>락토핏 생유산균 코어</span></td>
                <td><span>건강식품>영양제>프로바이오틱스</span></td>
                <td><span>25,000원</span></td>
            </tr>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list3" name="list_check"><label for="list3"></label>
                    </div>
                </td>
                <td><span>1234</span></td>
                <td><span>종근당</span></td>
                <td><span>락토핏 생유산균 코어</span></td>
                <td><span>건강식품>영양제>프로바이오틱스</span></td>
                <td><span>25,000원</span></td>
            </tr>
            </tbody>
            </table>
        </td>
      </tr>
    </table>
    <product-load-modal :dialogs="dialogs"/>
  </v-container>
</template>

<script>
import ActionBtn from '../../buttonComponents/ActionBtn'
import BasicBtn from '../../buttonComponents/BasicBtn'
import dayjs from 'dayjs'
import ProductUploadImageAdd from './ProductUploadImageAdd'
import ProductUploadImageModify from './ProductUploadImageModify'
import ProductLoadModal from './Modal/ProductLoadModal'

export default {
  name: "ProductUploadBasicInfo",
  components: { ActionBtn , BasicBtn , dayjs, ProductUploadImageAdd, ProductUploadImageModify, ProductLoadModal },
  data() {
    return {
      todate: dayjs().format("YYYY-MM-DD"),
      dialogs: {
        showProductLoadModal: false,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/_index.scss';
#app{
  .boardLayout{
    max-width: 1680px;
    height: 400px;
    margin: 15px auto 0 auto;
    border: 1px solid $color-bg-border;
    border-radius:  $border-radius-root;
    background-color: $color-white;

    .spot{
      position: inherit;
      padding-bottom: 24px;
    }

    .relatedProductTh{
       text-align:left;
       align-items: center;
       vertical-align: middle;
    }

    .dataLoadWrapper{
      vertical-align: middle;
      height: 53px;
    }

    .title{
      margin: 30px 0 30px 30px;
    }

    .innerTableTd{
      padding: 0;

      .innerTableInfoWrapper {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        padding-left: 32px;

        span {
          font-weight: bold;
          font-size: large;
        }
      }
    }
    table{
      width: 1612px;
      max-width: 1612px;
      margin: 30px 0 30px 30px;

      tr{
        border-bottom: 1px solid $color-border;

        .store-input {
            width: 200px;
            margin-right: 10px;
        }

        th{
          // display: flex;
          // align-items: center;
          height: 52px;
          padding-left:16px;
          font-size: $font-13;
          background: $color-table-bg;
        }

        td{
          padding:0 32px;
          font-size: $font-12;
          text-align:left;

          table {
            th {
              vertical-align: middle;
              padding: 0;
            }

            td {
              text-align: center;
              vertical-align: middle;
            }
          }
        }
      }
    }

    .innerTable{
      width: 100%;
      margin: 10px 0;
      border-left: 1px solid #E5E5E5;
    }
  }
}
</style>

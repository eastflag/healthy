<template>
  <v-container fluid class="boardLayout">
    <div class="title">판매방식/카테고리</div>

    <table>
      <colgroup>
        <col width="200px">
        <col width="600px">
        <col width="200px">
        <col width="*">
      </colgroup>
      <tr class="store-search">
        <th>스토어</th>
        <td>
          <div class="d-flex">
            <input class="store-input" type="text" id="cont" name="info1" placeholder="INPUTBOX">
            <basic-btn>스토어검색</basic-btn>
          </div>
        </td>
      </tr>
      <tr>
        <th>전시타입</th>
        <td>
          <div class="spot">
              <input class="radiobx" type="radio" id="radio" name="radio"><label for="radio"><em>전체</em></label>
          </div>
          <div class="spot">
              <input class="radiobx" type="radio" id="radio1" name="radio"><label for="radio1"><em>PC</em></label>
          </div>
          <div class="spot">
              <input class="radiobx" type="radio" id="radio2" name="radio"><label for="radio1"><em>모바일</em></label>
          </div>
        </td>
      </tr>
      <tr class="product-category-row">
        <td rowspan="2" style="height: 150px; border-bottom: 0; vertical-align: middle;">상품분류</td>
        <td>
          <div class="product-category">
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state1" name="list_check"><label for="state1"><em>대분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state2" name="list_check"><label for="state2"><em>대분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>대분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state4" name="list_check"><label for="state4"><em>대분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state5" name="list_check"><label for="state5"><em>대분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state6" name="list_check"><label for="state6"><em>대분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state7" name="list_check"><label for="state7"><em>대분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state8" name="list_check"><label for="state8"><em>대분류</em></label>
              </div>
          </div>
          <div class="product-category">
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state1" name="list_check"><label for="state1"><em>중분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state2" name="list_check"><label for="state2"><em>중분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>중분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state4" name="list_check"><label for="state4"><em>중분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state5" name="list_check"><label for="state5"><em>중분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state6" name="list_check"><label for="state6"><em>중분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state7" name="list_check"><label for="state7"><em>중분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state8" name="list_check"><label for="state8"><em>중분류</em></label>
              </div>
          </div>
          <div class="product-category">
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state1" name="list_check"><label for="state1"><em>소분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state2" name="list_check"><label for="state2"><em>소분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>소분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state4" name="list_check"><label for="state4"><em>중분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state5" name="list_check"><label for="state5"><em>중분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state6" name="list_check"><label for="state6"><em>중분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state7" name="list_check"><label for="state7"><em>중분류</em></label>
              </div>
              <div class="spot">
                <input class="checkbx" type="checkbox" id="state8" name="list_check"><label for="state8"><em>중분류</em></label>
              </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>선택한 상품분류 : 대분류 > 중분류 > 소분류</td>
      </tr>
      <tr>
        <th>판매기간 설정</th>
        <td>
          <div class="spot">
              <input class="radiobx" type="radio" id="radio" name="radio"><label for="radio"><em>미적용</em></label>
          </div>
          <div class="spot">
              <input class="radiobx" type="radio" id="radio1" name="radio"><label for="radio1"><em>PC</em></label>
          </div>
        </td>
      </tr>
      <tr class="calendarLayout">
        <th>기간</th>
        <td>
          <div class="dm_bx">
            <div class="datebx">
              <input type="text" id="address" name="info1" :placeholder=todate class="calen" >
              <label for="address"></label>
            </div>
            ~
            <div class="datebx">
              <input type="text" id="address" name="info1" :placeholder=todate class="calen">
              <label for="address"></label>
            </div>
            <div class="month">
              <span class="on">당일</span><span>1주일</span><span>1개월</span><span>3개월</span><span>6개월</span><span>1년</span><span>전체</span>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <th>노출여부</th>
        <td>
          <div class="spot">
              <input class="radiobx" type="radio" id="radio" name="radio"><label for="radio"><em>노출 안함</em></label>
          </div>
          <div class="spot">
              <input class="radiobx" type="radio" id="radio1" name="radio"><label for="radio1"><em>노출함</em></label>
          </div>
        </td>
      </tr>
      <tr>
        <th>판매상태</th>
        <td>
          <div class="spot">
              <input class="radiobx" type="radio" id="radio" name="radio"><label for="radio"><em>판매중</em></label>
          </div>
          <div class="spot">
              <input class="radiobx" type="radio" id="radio1" name="radio"><label for="radio1"><em>판매중지</em></label>
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

export default {
  name: "ProductUploadCategory",
  components: { ActionBtn , BasicBtn , dayjs },
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
    height: 610px;
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

      .store-search {
        border-top: 1px solid #E5E5E5
      }

      .product-category-row {
        height: 150px; border-bottom: 0;

        td:first-child {
          align-items: center;
          height: 52px;
          padding-left:16px;
          font-size: $font-13;
          background: $color-table-bg;
          font-weight: bolder;
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

          &:first-child{
            border-bottom: none;
          }

          .inputLayout{
            width: 98%;
          }

          .spot {
            display:inline-block;
            width:80px;

            em{
              width:100px;
              padding-left:26px;
            }
          }
        }

        .product-category{
          display: inline-block;
          padding: 6px 12px;
          margin-right: 10px;
          margin-top: 10px;
          border: 1px solid $color-border;
          height: 155px;
          overflow: scroll;

          .spot {
            display: block;
            margin-bottom: 5px;
          }
        }

        &.calendarLayout{
          position: relative;
          justify-content: start;
          align-items: center;

          th{
            width: 200px;
          }

          td{
            // position: absolute;
            // height: 53px;
            top: 0;
            left: 200px;
            width: 1500px;

            .dm_bx{
              position:relative;
              width:100%;
              height: inherit;
              display: flex;
              align-items: center;

              .datebx {
                display:inline-block;
                width:260px;
                height:30px;
                margin: 0 10px;

                &:first-child{
                  margin-left: 0;
                }

                .calen{
                  background:url('~@/assets/images/icons/calender.svg') no-repeat 226px center;
                  background-size:20px auto;
                }
              }
              .month{
                margin-left: 15px;
                span{
                  display:inline-block;
                  width:80px;
                  height:30px;
                  border: 1px solid $color-sub;
                  border-right: none;
                  line-height:30px;
                  text-align:center;
                  cursor:pointer;

                  &:last-child{
                    border-right:1px solid $color-sub;
                  }

                  &.on{
                    background-color: $color-sub;
                  }
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

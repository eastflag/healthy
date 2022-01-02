<template>
  <v-container fluid class="boardLayout">
    <table>
      <colgroup>
        <col width="200px">
        <col width="600px">
        <col width="200px">
        <col width="*">
      </colgroup>
      <tr style="border-top: 1px solid #E5E5E5;">
        <th>제목</th>
        <td>
          <div>
            <input class="Input" type="text" id="cont" name="info1" placeholder="INPUTBOX">
          </div>
        </td>
        <th>게시여부</th>
            <td>
                <div class="spot">
                    <input class="radiobx" type="radio" id="radio" name="radio"><label for="radio"><em>게시</em></label>
                </div>
                <div class="spot">
                    <input class="radiobx" type="radio" id="radio1" name="radio"><label for="radio1"><em>미게시</em></label>
                </div>
          </td>
      </tr>
      <tr>
        <th>분류</th>
        <td>
            <div class="selectbx">
                <select class="smallSelect" id="departure" name="departure">
                    <option value="num1">대분류</option>
                    <option value="num2">대분류1</option>
                    <option value="num2">대분류2</option>
                </select>

                <select class="smallSelect" id="departure" name="departure">
                  <option value="num1">중분류</option>
                  <option value="num2">중분류1</option>
                  <option value="num2">중분류2</option>
                </select>

                <select class="smallSelect" id="departure" name="departure">
                  <option value="num1">소분류</option>
                  <option value="num2">소분류1</option>
                  <option value="num2">소분류2</option>
                </select>
            </div>
        </td>
        <th>게시유형</th>
        <td>
              <div class="spot">
                  <input class="radiobx" type="radio" id="radio" name="radio"><label for="radio"><em>전체</em></label>
              </div>
              <div class="spot">
                  <input class="radiobx" type="radio" id="radio1" name="radio"><label for="radio1"><em>전문인</em></label>
              </div>
              <div class="spot">
                  <input class="radiobx" type="radio" id="radio1" name="radio"><label for="radio1"><em>고객</em></label>
              </div>
          </td>
      </tr>
      <tr>
        <th>키워드</th>
        <td colspan="3">
            <span class="keyword">#키워드1</span> <span class="keyword">#키워드1</span>
        </td>
      </tr>
      <tr>
        <th colspan="4" style="text-align: center;">내용</th>
      </tr>
      <tr>
        <th style="height: 330px;">상품 상세정보</th>
        <td style="vertical-align: middle;" colspan="3">
            <cs-faq-upload-editor/>
        </td>
      </tr>
    </table>
  </v-container>
</template>

<script>
import ActionBtn from '../../../buttonComponents/ActionBtn'
import BasicBtn from '../../../buttonComponents/BasicBtn'
import dayjs from 'dayjs'
import CsFaqUploadEditor from './CsFaqUploadEditor.vue'

export default {
  name: "CsFaqUploadReviseEditor",
  components: { ActionBtn , BasicBtn , dayjs, CsFaqUploadEditor },
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
    height: 600px;
    margin: 15px auto 0 auto;
    border: 1px solid $color-bg-border;
    border-radius:  $border-radius-root;
    background-color: $color-white;

    .smallSelect {
      width: 150px;
      margin-right: 10px;
    }

    .keyword {
      border: 1px solid $color-bg-border;
      padding: 6px 12px;
      margin-right: 3px;
    }

    table{
      width: 1612px;
      max-width: 1612px;
      margin: 30px 0 30px 30px;

      tr{
        border-bottom: 1px solid $color-border;

        th{
          // display: flex;
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

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
        <th>작성자</th>
        <td>
          asdakj
        </td>
        <th>처리상태</th>
        <td>
          문의 중
        </td>
      </tr>
      <tr>
          <th>분류</th>
          <td>
              주문/결제
          </td>
          <th>분류상세</th>
          <td>
              O20210512
          </td>
      </tr>
      <tr>
        <th>제목</th>
        <td>
            제목
        </td>
        <th>알림설정</th>
        <td>
            <span class="alertSetting">PUSH</span>
            <span class="alertSetting">SMS</span>
            <span class="alertSetting">mail</span>
        </td>
      </tr>
      <tr>
        <th colspan="4" style="text-align: center;">내용</th>
      </tr>
      <tr>
        <td colspan="4" style="text-align: center; height: 300px;">내용</td>
      </tr>
      <tr>
        <th>처리상태</th>
        <td>
          <select class="smallSelect" id="departure" name="departure">
              <option value="num1">답변확인</option>
              <option value="num2">답변완료</option>
          </select>
        </td>
        <th>담당자</th>
        <td>
          SCN3002
        </td>
      </tr>
      <tr>
        <th>답변</th>
        <td style="vertical-align: middle;" colspan="3">
            <faq-upload-editor/>
        </td>
      </tr>
    </table>
  </v-container>
</template>

<script>
import ActionBtn from '../../buttonComponents/ActionBtn'
import BasicBtn from '../../buttonComponents/BasicBtn'
import dayjs from 'dayjs'
import FaqUploadEditor from './FaqUploadEditor'

export default {
  name: "FaqUploadReviseEditor",
  components: { ActionBtn , BasicBtn , dayjs, FaqUploadEditor },
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
    height: 930px;
    margin: 15px auto 0 auto;
    border: 1px solid $color-bg-border;
    border-radius:  $border-radius-root;
    background-color: $color-white;

    .smallSelect {
      width: 150px;
      margin-right: 10px;
    }

    .alertSetting {
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

          .spot {
            display:inline-block;
            width:80px;

            em{
              width:100px;
              padding-left:26px;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
    <v-container fluid class="inputBoardLayout">
        <table>
            <colgroup>
                <col width="200px">
                <col width="606px">
                <col width="200px">
                <col width="*">
            </colgroup>
            <thead>
                <tr style="border-top: 1px solid #E5E5E5">
                    <th colspan="4">기본정보</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>쿠폰코드</th>
                    <td colspan="3">
                        <div style="width: 550px">
                            <input type="text" id="couponCode" name="couponCode" placeholder="자동생성" disabled>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>쿠폰명</th>
                    <td colspan="3">
                        <div style="width: 550px">
                            <input type="text" id="couponNm" name="couponNm" placeholder="INPUTBOX">
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>쿠폰사용여부</th>
                    <td>
                        <div class="spot">
                            <input class="radiobx" type="radio" id="useYN1" name="radio"><label for="useYN1"><em>사용</em></label>
                        </div>
                        <div class="spot">
                            <input class="radiobx" type="radio" id="useYN2" name="radio"><label for="useYN2"><em>불가</em></label>
                        </div>
                    </td>
                    <th>쿠폰사용방식</th>
                    <td>
                        <div class="spot">
                            <input class="radiobx" type="radio" id="couponWay1" name="radio"><label for="couponWay1"><em>전체</em></label>
                        </div>
                        <div class="spot">
                            <input class="radiobx" type="radio" id="couponWay2" name="radio"><label for="couponWay2"><em>PC전용</em></label>
                        </div>
                        <div class="spot">
                            <input class="radiobx" type="radio" id="couponWay3" name="radio"><label for="couponWay3"><em>APP전용</em></label>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <table>
            <colgroup>
                <col width="200px">
                <col width="*">
            </colgroup>
            <thead>
                <tr style="border-top: 1px solid #E5E5E5">
                    <th colspan="2">혜택설정</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>쿠폰타입</th>
                    <td>
                        <div class="spot">
                            <input class="radiobx" type="radio" id="couponType1" name="radio"><label for="couponType1"><em>정액</em></label>
                        </div>
                        <div class="spot">
                            <input class="radiobx" type="radio" id="couponType2" name="radio"><label for="couponType2"><em>정률</em></label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>할인설정</th>
                    <td>
                        <div style="width: 550px">
                            <input type="text" id="couponCode" name="couponCode" placeholder="INPUTBOX">
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>최소 상품금액</th>
                    <td>
                        <div class="spot">
                            <input class="radiobx" type="radio" id="limitPrice1" name="radio"><label for="limitPrice1"><em>해당없음</em></label>
                        </div>
                        <div class="spot">
                            <input class="radiobx" type="radio" id="limitPrice2" name="radio"><label for="limitPrice2"><em>해당있음</em></label>
                        </div>
                        <div class="spot">
                            <input type="text" id="limitPrice" name="limitPrice" placeholder="300,000">
                        </div>
                    </td>
                </tr>
                <tr>
                    <th rowspan="3">할인적용상품</th>
                    <td style="height: 52px">
                        <div class="spot">
                            <input class="radiobx" type="radio" id="saleProd1" name="radio"><label for="saleProd1"><em>전체</em></label>
                        </div>
                        <div class="spot">
                            <input class="radiobx" type="radio" id="saleProd2" name="radio"><label for="saleProd2"><em>해당카테고리</em></label>
                        </div>
                        <div class="spot">
                            <input class="radiobx" type="radio" id="saleProd3" name="radio"><label for="saleProd3"><em>해당상품</em></label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="height: 52px">
                        <basic-btn>상품검색</basic-btn>
                    </td>
                </tr>
                <tr>
                    <td style="height: 52px">
                        <div class="leftRightSort">
                            <span>상품명, 상품명, 상품명</span>
                            <basic-btn>삭제</basic-btn>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <table>
            <colgroup>
                <col width="200px">
                <col width="*">
            </colgroup>
            <thead>
                <tr style="border-top: 1px solid #E5E5E5">
                    <th colspan="2">발급설정</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>발급방식</th>
                    <td>
                        <div class="spot">
                            <input class="radiobx" type="radio" id="issueWay1" name="radio"><label for="issueWay1"><em>관리자수동발급</em></label>
                        </div>
                        <div class="spot">
                            <input class="radiobx" type="radio" id="issueWay2" name="radio"><label for="issueWay2"><em>특정조건자동발급</em></label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>발급대상</th>
                    <td>
                        <div class="spot">
                            <input class="radiobx" type="radio" id="radio1" name="radio"><label for="radio1"><em>회원가입시</em></label>
                        </div>
                        <div class="spot">
                            <input class="radiobx" type="radio" id="radio2" name="radio"><label for="radio2"><em>등급상향시</em></label>
                        </div>
                        <div class="spot">
                            <input class="radiobx" type="radio" id="radio3" name="radio"><label for="radio3"><em>생일</em></label>
                        </div>
                        <div class="spot">
                            <input class="radiobx" type="radio" id="radio4" name="radio"><label for="radio4"><em>마케팅수신동의</em></label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>발행대상설정</th>
                    <td>
                        <div class="spot">
                            <input class="checkbx" type="checkbox" id="state1" name="list_check"><label for="state1"><em>전체</em></label>
                        </div>
                        <div class="spot">
                            <input class="checkbx" type="checkbox" id="state2" name="list_check"><label for="state2"><em>1등급</em></label>
                        </div>
                        <div class="spot">
                            <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>2등급</em></label>
                        </div>
                        <div class="spot">
                            <input class="checkbx" type="checkbox" id="state4" name="list_check"><label for="state4"><em>3등급</em></label>
                        </div>
                        <div class="spot">
                            <input class="checkbx" type="checkbox" id="state5" name="list_check"><label for="state5"><em>4등급</em></label>
                        </div>
                        <div class="spot">
                            <input class="checkbx" type="checkbox" id="state6" name="list_check"><label for="state6"><em>5등급</em></label>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <table>
            <colgroup>
                <col width="200px">
                <col width="*">
            </colgroup>
            <thead>
                <tr style="border-top: 1px solid #E5E5E5">
                    <th colspan="2">기간설정</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>사용기간</th>
                    <td>
                        <div class="dm_bx">
                            <div class="datebx">
                                <input type="text" id="strtDate1" name="strtDate1" :placeholder=todate class="calen">
                                <label for="strtDate1"></label>
                            </div>
                            ~
                            <div class="datebx">
                                <input type="text" id="strtDate2" name="strtDate2" :placeholder=todate class="calen">
                                <label for="strtDate2"></label>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </v-container>
</template>

<script>
    import ActionBtn from '../../buttonComponents/ActionBtn'
    import BasicBtn from '../../buttonComponents/BasicBtn'
    import dayjs from 'dayjs'

    export default {
        name: "CouponUpLoadInput",
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
    .inputBoardLayout {
      max-width: 1680px;
      min-height: 300px;
      margin: 15px auto 0 auto;
      border: 1px solid $color-bg-border;
      border-radius:  $border-radius-root;
      background-color: $color-white;

      table {
          width: 1612px;
          max-width: 1612px;
          margin: 40px 0 30px 30px;

          thead {
                tr {
                    th {
                        vertical-align: middle;
                        align-items: center;
                        text-align: left;
                        padding-left: 16px;
                        height: 52px;
                        font-size: $font-15;
                        background: $color-table-bg;
                    }
                }
            }

            tbody {
                tr {
                    th {
                        text-align: center;
                        vertical-align: middle;
                        height: 52px;
                        font-size: $font-13;
                        border: 1px solid $color-border;
                        border-left: none;
                    }
                    td {
                        padding:0 32px;
                        font-size: $font-12;
                        text-align: left;
                        vertical-align: middle;
                        border: 1px solid $color-border;

                        &:last-child {
                            border-right: none;
                        }

                        .dm_bx{
                            position: relative;
                            width: 100%;
                            height: inherit;
                            display: flex;
                            align-items: center;

                            .innerSelectbx {
                                height: inherit;
                                display: flex;
                                align-items: center;
                                select {
                                    width: 260px;
                                    margin-right: 5px;
                                    background: url('~@/assets/images/icons/search.svg') no-repeat 226px center;

                                    option {
                                        height: 20px;
                                        font-size: $font-20;
                                    }
                                }
                            }

                            .datebx {
                                display: inline-block;
                                width: 260px;
                                height: 30px;
                                margin: 0 10px;

                                &:first-child {
                                    margin-left: 0;
                                }

                                .calen {
                                    background: url('~@/assets/images/icons/calender.svg') no-repeat 226px center;
                                    background-size: 20px auto;
                                    cursor: pointer;
                                    height: 100%;
                                }
                            }

                            .month {
                                span {
                                    display: inline-block;
                                    width: 60px;
                                    height: 30px;
                                    border: 1px solid $color-sub;
                                    border-right: none;
                                    line-height:30px;
                                    text-align:center;
                                    cursor: pointer;

                                    &:last-child {
                                        border-right:1px solid $color-sub;
                                    }

                                    &.on {
                                        display: inline-block;
                                        width: 60px;
                                        height: 30px;
                                        text-align: center;
                                        line-height: 30px;
                                        background-color: $color-sub;
                                    }
                                }
                            }
                        }
                        
                        .spot {
                            display: inline-flex;
                            margin-right: 15px;

                            em {
                                width:100px;
                                padding-left:26px;
                            }
                        }

                        .selectbx {
                            width: 100%;
                            height: inherit;
                            display: flex;
                            align-items: center;
                            select {
                                width: 260px;
                                margin-right: 15px;
                                background: url('~@/assets/images/icons/search.svg') no-repeat 226px center;

                                option {
                                    height: 20px;
                                    font-size: $font-20;
                                }
                            }
                            input {
                                width: 650px;
                                height: 30px;
                                &:focus{
                                    border: 1px solid $color-sub;
                                }
                            }
                            .doubleInput {
                                width: 315px;
                                &:focus {
                                    border: 1px solid $color-sub;
                                }
                            }
                            span {
                                margin: 0 7px;
                            }
                        }
                    }
                }
            }
      }

      input[type="text"]:disabled {
        background: $color-disabled;
      }

      .button{
          margin: 20px auto;
          button:first-child{
              margin-right: 15px;
          }
      }

      .leftRightSort {
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
  }
</style>

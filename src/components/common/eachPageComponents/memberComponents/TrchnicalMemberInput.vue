<template>
    <v-container fluid class="boardLayout">
        <table>
            <colgroup>
                <col width="200px">
                <col width="600px">
                <col width="200px">
                <col width="*">
            </colgroup>
            <tr style="border-top: 1px solid #E5E5E5">
                <th>전문인유형</th>
                <td>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state1" name="list_check"><label for="state1"><em>전체</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state2" name="list_check"><label for="state2"><em>약사</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>영양사</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state4" name="list_check"><label for="state4"><em>트레이너</em></label>
                  </div>
                </td>
                <th>전문인등급</th>
                <td>
                    <div class="selectbx d-flex">
                        <select id="grade" name="grade">
                            <option value="num1">전체</option>
                            <option value="num2">1등급</option>
                            <option value="num3">2등급</option>
                            <option value="num3">3등급</option>
                            <option value="num3">4등급</option>
                            <option value="num3">5등급</option>
                        </select>
                    </div>
                </td>
            </tr>
            <tr>
              <th>상태</th>
              <td>
                <div class="selectbx d-flex">
                  <select id="status" name="status">
                    <option value="num1">전체</option>
                    <option value="num2">정상</option>
                    <option value="num3">이용정지</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr class="calendarLayout">
                <th>가입일</th>
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
                <th>조건검색</th>
                <td>
                    <div class="selectbx d-flex">
                        <select id="departure" name="departure">
                            <option value="num1">구분</option>
                            <option value="num2">검색2</option>
                            <option value="num3">검색3</option>
                        </select>
                        <input type="text" id="cont" name="info1" placeholder="INPUTBOX">
                    </div>
                </td>
            </tr>
          <tr class="location-row">
            <td rowspan="2" style="height: 150px; vertical-align: middle;">지역</td>
            <td style="display: flex;">
              <div class="location-list">
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state1" name="list_check"><label for="state1"><em>전체</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state2" name="list_check"><label for="state2"><em>서울특별시</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>부산광역시</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state4" name="list_check"><label for="state4"><em>대구광역시</em></label>
                  </div>
              </div>
              <v-icon class="pagingArrow">$pagingArrow</v-icon>
              <div class="location-list">
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state1" name="list_check"><label for="state1"><em>전체</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state2" name="list_check"><label for="state2"><em>강서구</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>강동구</em></label>
                  </div>
              </div>
              <v-icon class="pagingArrow">$pagingArrow</v-icon>
              <div class="location-list">
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state1" name="list_check"><label for="state1"><em>전체</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state2" name="list_check"><label for="state2"><em>마곡동</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>화곡동</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>화곡동</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>화곡동</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>화곡동</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>화곡동</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>화곡동</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>화곡동</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>화곡동</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>화곡동</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>화곡동</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>화곡동</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>화곡동</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>화곡동</em></label>
                  </div>
              </div>
            </td>
          </tr>
        </table>
        <div class="button d-flex justify-center mb-5">
            <action-btn>조회</action-btn>
            <basic-btn>초기화</basic-btn>
        </div>
    </v-container>
</template>

<script>
    import ActionBtn from '../../buttonComponents/ActionBtn'
    import BasicBtn from '../../buttonComponents/BasicBtn'
    import dayjs from 'dayjs'

    export default {
        name: "TrchnicalMemberInput",
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
            height: auto;
            margin: 15px auto;
            border: 1px solid $color-bg-border;
            border-radius:  $border-radius-root;
            background-color: $color-white;

            .location-row {
              height: 200px;
              vertical-align: middle;

              td:first-child {
                align-items: center;
                height: 52px;
                padding-left:16px;
                font-size: $font-13;
                background: $color-table-bg;
                font-weight: bolder;
              }

              .location-list{
                display: inline-block;
                padding: 6px 12px;
                width: 150px;
                margin: 10px;
                border: 1px solid $color-border;
                height: 200px;
                overflow: auto;

                .spot {
                  display: block;
                  margin-bottom: 5px;
                }
              }
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

                        &:first-child{
                            border-bottom: none;
                        }

                        .inputLayout{
                            width: 98%;
                        }

                        .spot {
                            display:inline-block;
                            width:90px;

                            em{
                                width:100px;
                                padding-left:26px;
                            }
                        }

                        .selectbx{
                            width: 100%;
                            select{
                                width: 230px;
                                margin-right: 15px;
                                background:url('~@/assets/images/icons/search.svg') no-repeat 200px center;

                                option {
                                    height: 20px;
                                    font-size: $font-20;
                                }
                            }
                            input{
                                width: 300px;
                                &:focus{
                                    border: 1px solid $color-sub;
                                }
                            }
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
                            position: absolute;
                            height: 53px;
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

            .button{
                button:first-child{
                    margin-right: 15px;
                }
            }
        }
    }
</style>

<template>
    <v-container fluid class="boardLayout">
        <table>
            <colgroup>
                <col width="200px">
                <col width="600px">
                <col width="200px">
                <col width="*">
            </colgroup>
            <tr class="calendarLayout" style="border-top: 1px solid #E5E5E5">
              <th>가입일<br/>기간선택</th>
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
                    <span class="on">11월</span><span>12월</span><span>01월</span><span>02월</span><span>03월</span><span>04월</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>게시물상태</th>
              <td>
                <div class="spot">
                  <input class="checkbx" type="checkbox" id="state1" name="list_check"><label for="state1"><em>전체</em></label>
                </div>
                <div class="spot">
                  <input class="checkbx" type="checkbox" id="state2" name="list_check"><label for="state2"><em>게시</em></label>
                </div>
                <div class="spot">
                  <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>미게시</em></label>
                </div>
              </td>
              <td/>
              <td/>
            </tr>
            <tr>
                <th>직접검색</th>
                <td>
                    <div class="selectbx d-flex">
                        <select id="departure" name="departure">
                            <option value="num1">ID</option>
                            <option value="num2">전체</option>
                        </select>
                        <input type="text" id="cont" name="info1" placeholder="INPUTBOX">
                    </div>
                </td>
            </tr>
        </table>
        <div class="button d-flex justify-center">
            <action-btn>조회</action-btn>
            <basic-btn>초기화</basic-btn>
        </div>
    </v-container>
</template>

<script>
    import dayjs from 'dayjs'
    import ActionBtn from '../../buttonComponents/ActionBtn'
    import BasicBtn from '../../buttonComponents/BasicBtn.vue'

    export default {
        name: "FaqSearchInput",
        components: { dayjs, ActionBtn, BasicBtn },
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
            height: 300px;
            margin: 15px auto 0 auto;
            border: 1px solid $color-bg-border;
            border-radius:  $border-radius-root;
            background-color: $color-white;

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
                            width:80px;

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

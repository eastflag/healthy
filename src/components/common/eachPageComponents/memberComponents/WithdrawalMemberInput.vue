<template>
    <v-container fluid class="boardLayout">
        <table>
            <colgroup>
                <col width="200px">
                <col width="*">
            </colgroup>
            <tr style="border-top: 1px solid #E5E5E5">
                <th>회원구분</th>
                <td>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="kind1" name="list_check"><label for="kind1"><em>전체</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="kind2" name="list_check"><label for="kind2"><em>고객</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="kind3" name="list_check"><label for="kind3"><em>전문인</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="kind4" name="list_check"><label for="kind4"><em>입점업체</em></label>
                  </div>
                </td>
            </tr>
            <tr>
                <th>탈퇴사유</th>
                <td>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="reason1" name="list_check"><label for="reason1"><em>전체</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="reason2" name="list_check"><label for="reason2"><em>서비스불만</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="reason3" name="list_check"><label for="reason3"><em>상담불만</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="reason4" name="list_check"><label for="reason4"><em>불만</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="reason5" name="list_check"><label for="reason5"><em>불만</em></label>
                  </div>
                  <div class="spot">
                    <input class="checkbx" type="checkbox" id="reason6" name="list_check"><label for="reason6"><em>불만</em></label>
                  </div>
                </td>
            </tr>
            <tr class="calendarLayout">
                <th>탈퇴일</th>
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
        name: "WithdrawalMemberInput",
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
                            width: 90px;

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

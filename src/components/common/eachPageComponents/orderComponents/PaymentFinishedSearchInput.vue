<template>
    <v-container fluid class="boardLayout">
        <table>
            <colgroup>
                <col width="200px">
                <col width="*">
            </colgroup>
            <tr style="border-top: 1px solid #E5E5E5">
                <th>기간</th>
                <td>
                    <div class="dm_bx">
                        <div class="datebx">
                            <input type="text" id="address" name="info1" :placeholder=todate class="calen">
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
                <th>상세검색</th>
                <td>
                    <div class="selectbx d-flex">
                        <select id="departure" name="departure">
                            <option value="">전체</option>
                            <option value="gubun1">구분1</option>
                            <option value="gubun2">구분2</option>
                        </select>
                        <input type="text" id="detail" name="detail" placeholder="INPUTBOX">
                    </div>
                </td>
            </tr>
            <tr>
                <th><span></span></th>
                <td>
                    <div class="selectbx d-flex">
                        <select id="departure" name="departure">
                            <option value="num1">주문금액1</option>
                            <option value="num2">주문금액2</option>
                            <option value="num3">주문금액3</option>
                        </select>
                        <input class="doubleInput" type="text" id="price1" name="price1" placeholder="200,000">
                        <span>~</span>
                        <input class="doubleInput" type="text" id="price2" name="price2" placeholder="500,000">
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
    import ActionBtn from '../../buttonComponents/ActionBtn'
    import BasicBtn from '../../buttonComponents/BasicBtn'
    import dayjs from 'dayjs'

    export default {
        name: "PaymentFinishedSearchInput",
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
    #app {
        .boardLayout {
            max-width: 1680px;
            height: 300px;
            margin: 15px auto 0 auto;
            border: 1px solid $color-bg-border;
            border-radius:  $border-radius-root;
            background-color: $color-white;

            table {
                width: 1612px;
                max-width: 1612px;
                margin: 40px 0 30px 30px;

                tr {
                    border-bottom: 1px solid $color-border;
                }

                th {
                    display: flex;
                    align-items: center;
                    height: 52px;
                    padding-left: 16px;
                    font-size: $font-13;
                    background: $color-table-bg;
                }

                td {
                    padding:0 32px;
                    font-size: $font-12;
                    text-align: left;

                    &:first-child {
                        border-bottom: none;
                    }

                    .dm_bx{
                        position: relative;
                        width: 100%;
                        height: inherit;
                        display: flex;
                        align-items: center;

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
                        display:inline-block;
                        width:80px;

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

            .button{
                button:first-child{
                    margin-right: 15px;
                }
            }
        }
    }
</style>

<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
        <table>
            <colgroup>
                <col width="200px">
                <col width="*">
            </colgroup>
            <tr style="border-top: 1px solid #E5E5E5">
                <th>팝업제목</th>
                <td>
                    <div class="selectbx d-flex">
                        <input type="text" id="cont" name="info1" placeholder="INPUTBOX">
                    </div>
                </td>
            </tr>
            <tr>
                <th>표시여부</th>
                <td>
                    <div v-for="(item, index) in radioBox" :key="index" class="spot">
                        <input class="radiobx" type="radio" :id="item.idx" name="radio"><label :for="item.idx"><em>{{ item.title }}</em></label>
                    </div>
                </td>
            </tr>
            <tr>
                <th>게시일자</th>
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
    import BasicBtn from '../../buttonComponents/BasicBtn'
    // import Calendar from '@/components/common/Calendar'
    export default {
        name: "popUpListInput",
        components: {
            dayjs , ActionBtn , BasicBtn
        },
        data() {
            return {
                // YYYY-MM-DD HH mm ss 한국시간 표시
                todate: dayjs().format("YYYY-MM-DD"),
                radioBox: [
                    {
                        idx:1,
                        title: '전체',
                    },
                    {
                        idx:2,
                        title: '표시',
                    },
                    {
                        idx:3,
                        title: '미표시',
                    },
                ]
            }
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';

    #app{
        .boardLayout{
            max-width: 1680px;
            height: 280px;
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
                        justify-content: center;
                        height: 52px;
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
                                span{
                                    display:inline-block;
                                    width:60px;
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
                                        display:inline-block;
                                        width:60px;
                                        height:30px;
                                        text-align:center;
                                        line-height:30px;
                                        background-color: $color-sub;
                                    }
                                }
                            }
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

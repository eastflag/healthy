<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
        <table>
            <colgroup>
                <col width="200px">
                <col width="600px">
            </colgroup>
            <tr style="border-top: 1px solid #E5E5E5">
                <th>약관사용</th>
                <td>
                    <div v-for="(item, index) in radioBoxTop" :key="index" class="spot">
                        <input class="radiobx" type="radio" :id="'T'+item.idx" name="radioT"><label :for="'T'+item.idx"><em>{{ item.title }}</em></label>
                    </div>
                </td>
                <th>필수동의</th>
                <td>
                    <div v-for="(item, index) in radioBox" :key="index" class="spot">
                        <input class="radiobx" type="radio" :id="item.idx" name="radio"><label :for="item.idx"><em>{{ item.title }}</em></label>
                    </div>
                </td>
            </tr>
            <tr>
                <th>약관실행일자</th>
                <td>
                <div class="dm_bx">
                    <div class="datebx">
                        <input type="text" id="address" name="info1" :value=todate class="calen" @click="calendar_toggle">
                        <label for="address"></label>
                    </div>
                </div>
                </td>
            </tr>
        </table>
        <div class="title"><span>내용</span></div>
        <calendar v-show="is_show"/>
    </v-container>
</template>

<script>
    import dayjs from 'dayjs'
    // import Calendar from '@/components/common/Calendar'

    export default {
        name: "UploadEditor",
        component: {
            dayjs
        },
        data() {
            return {
                todate: dayjs().format("YYYY-MM-DD"),
                is_show: false,
                radioBoxTop: [
                    {
                        idx:1,
                        title: '사용',
                    },
                    {
                        idx:2,
                        title: '미사용',
                    },
                ],
                radioBox: [
                    {
                        idx:1,
                        title: '사용',
                    },
                    {
                        idx:2,
                        title: '미사용',
                    },
                ]
            }
        },
        methods:{
            calendar_toggle: function () {
                this.is_show = !this.is_show;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app{
        .boardLayout{
            max-width: 1680px;
            height: 177px;
            margin: 15px auto 0 auto;
            border: 1px solid $color-bg-border;
            border-radius: 5px 5px 0 0;
            border-bottom: none;
            background-color: $color-white;

            table{
                width: 1612px;
                max-width: 1612px;
                margin: 30px 0 0px 30px;

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
                                width: 260px;
                                margin-right: 15px;
                                background:url('~@/assets/images/icons/search.svg') no-repeat 226px center;

                                option {
                                    height: 20px;
                                    font-size: $font-20;
                                }
                            }
                            input{
                                width: 650px;
                                &:focus{
                                    border: 1px solid $color-sub;
                                }
                            }
                        }
                    }
                }
            }
            .title{
                width: 1612px;
                height: 40px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: center;
                background: $color-table-bg;

                span{
                    font-weight: bold;
                    font-size: $font-13;
                }
            }
        }
    }
</style>

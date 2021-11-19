<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
        <table>
            <colgroup>
                <col width="200px">
                <col width="200px">
                <col width="200px">
                <col width="*">
            </colgroup>
            <tr style="border-top: 1px solid #E5E5E5">
                <th>제목</th>
                <td>
                    <div class="inputLayout">
                        <input type="text" id="cont" name="info1" placeholder="INPUTBOX">
                    </div>
                </td>
                <th>게시여부</th>
                <td>
                    <div v-for="(item, index) in radioBoxTop" :key="index" class="spot">
                        <input class="radiobx" type="radio" :id="'T'+item.idx" name="radioT"><label :for="'T'+item.idx"><em>{{ item.title }}</em></label>
                    </div>
                </td>
            </tr>
            <tr>
                <th>분류</th>
                <td>
                    <div class="selectbx d-flex">
                        <select id="departure" name="departure">
                            <option :key="i" :value="data.value" v-for="(data, idex) in options">{{ data.title }}</option>
                        </select>
                    </div>
                </td>
                <th>게시유형</th>
                <td>
                    <div v-for="(item, index) in radioBox" :key="index" class="spot">
                        <input class="radiobx" type="radio" :id="item.idx" name="radio"><label :for="item.idx"><em>{{ item.title }}</em></label>
                    </div>
                </td>
            </tr>
            <tr>
                <th>게시기간</th>
                <td>
                <div class="dm_bx">
                    <div class="datebx">
                        <input type="text" id="address" name="info1" :placeholder=todate class="calen" @click="calendar_toggle">
                        <label for="address"></label>
                    </div>
                    ~
                    <div class="datebx">
                        <input type="text" id="address" name="info1" :placeholder=todate class="calen">
                        <label for="address"></label>
                    </div>
                </div>
                </td>
                <th>작성일자</th>
                <td>
                    <span>{{ todate }}</span>
                </td>
            </tr>
        </table>
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
                // YYYY-MM-DD HH mm ss 한국시간 표시
                todate: dayjs().format("YYYY-MM-DD"),
                is_show: false,
                options:[
                    { value: "num1", title: "검색1" },
                    { value: "num2", title: "검색2" },
                    { value: "num3", title: "검색3" },
                ],
                radioBoxTop: [
                    {
                        idx:1,
                        title: '게시',
                    },
                    {
                        idx:2,
                        title: '미게시',
                    },
                ],
                radioBox: [
                    {
                        idx:1,
                        title: '전체',
                    },
                    {
                        idx:2,
                        title: '전문인',
                    },
                    {
                        idx:3,
                        title: '고객',
                    },
                    {
                        idx:4,
                        title: '입점업체',
                    },
                ],
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
            height: 220px;
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
        }
    }
</style>

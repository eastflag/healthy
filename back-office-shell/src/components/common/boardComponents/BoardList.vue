<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><span>LISTLISTLIST</span> ('{{num}}'의 리스트가 조회되었습니다.)</div>
            <div class="selectbx">
                <select id="departure" name="departure">
                    <option value="num1" selected>조회수 순</option>
                    <option value="num2">게시일 최신 순</option>
                    <option value="num3">게시일 과거 순</option>
                </select>
            </div>
        </div>
        <table style="width: 100%;">
            <colgroup>
                <col width="5%">
                <col width="7%">
                <col width="10%">
                <col width="10%">
                <col width="10%">
                <col width="*">
                <col width="10%">
                <col width="10%">
                <col width="10%">
                <col width="10%">
            </colgroup>
            <thead>
                <tr>
                    <th>
                        <div class="spot">
                            <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                        </div>
                    </th>
                    <th><span>구분</span></th>
                    <th><span>상태</span></th>
                    <th><span>분류</span></th>
                    <th><span>게시여부</span></th>
                    <th><span>제목</span></th>
                    <th><span>조회수</span></th>
                    <th><span>게시자</span></th>
                    <th><span>게시기간</span></th>
                    <th><span>비고</span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="spot">
                            <input class="checkbx" type="checkbox" id="list2" name="list_check"><label for="list2"></label>
                        </div>
                    </td>
                    <td><span>전체</span></td>
                    <td><span>공지</span></td>
                    <td><span>일반</span></td>
                    <td><span>게시</span></td>
                    <td><span>건강하다 출시안내</span></td>
                    <td><span>10,000</span></td>
                    <td><span>scn345</span></td>
                    <td><span>2021.08.01~12.31</span></td>
                    <td><span><button class="btn sm bg_green">공지등록</button></span></td>
                </tr>
                <tr>
                    <td>
                        <div class="spot">
                            <input class="checkbx" type="checkbox" id="list3" name="list_check"><label for="list3"></label>
                        </div>
                    </td>
                    <td><span>전체</span></td>
                    <td><span>공지</span></td>
                    <td><span>일반</span></td>
                    <td><span>게시</span></td>
                    <td><span>건강하다 출시안내</span></td>
                    <td><span>10,000</span></td>
                    <td><span>scn345</span></td>
                    <td><span>2021.08.01~12.31</span></td>
                    <td><span><button class="btn sm line_green">공지해제</button></span></td>
                </tr>
            </tbody>
        </table>
        <plus-btn><v-icon class="plusBtn">$plusBtn</v-icon>더보기</plus-btn>
    </v-container>
</template>

<script>
    import PlusBtn from '../buttonComponents/PlusBtn'
    export default {
        name: "BoardList",
        components: { PlusBtn },
        data(){
            return{
                num:'5'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app{
        .boardLayout{
            max-width: 1680px;
            height: 435px;
            margin: 10px auto 0 auto;
            border: 1px solid $color-bg-border;
            border-radius:  $border-radius-root;
            background-color: $color-white;

            .title{
                width: 1612px;
                margin: 40px auto 0;
                font-size: $font-16;
                font-weight: bold;

                div>span{
                    display: inline-block;
                    width: 100px;
                    overflow:hidden;
                    text-overflow:ellipsis !important;
                    white-space:nowrap;
                }
                .selectbx{
                    select{
                        width: 260px;
                        height: 30px;
                        padding: 0px 10px;
                        background:url('~@/assets/images/search.svg') no-repeat 226px center;
                        font-size: $font-12;
                        color: $color-action;

                        option {
                            height: 20px;
                            color:  $color-basic;
                            font-size: $font-20;
                        }
                    }
                }
            }

            table{
                width: 1612px;
                max-width: 1612px;
                margin: 20px auto 30px;

                thead{
                    tr{
                        th{
                            position: relative;
                            height:52px;
                            background: $color-table-bg;
                            border-top:1px solid $color-border;
                            border-bottom:1px solid $color-border;
                            font-size:13px;

                            .spot{
                                position: absolute;
                                left: 30px;
                            }

                            span{
                                height: inherit;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }
                        }
                    }
                }
                tbody{
                    td{
                        position: relative;
                        height:52px;
                        border-bottom:1px solid $color-border;
                        font-size: $font-13;
                        .spot{
                            position: absolute;
                            left: 30px;
                        }
                        span{
                            height: inherit;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                }
            }

            .plusBtn{
                padding-right: 5px;
            }
        }
    }
</style>

<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
        <template v-if="show">
            <table>
                <colgroup>
                    <col width="200px">
                    <col width="*">
                </colgroup>
                <tr class="disabled" style="border-top: 1px solid #E5E5E5">
                    <th>권한</th>
                    <td>
                        <div class="selectbx">
                            <select id="departure" name="departure" disabled>
                                <option value="num1">일반관리자</option>
                                <option value="num2">검색2</option>
                                <option value="num3">검색3</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr class="disabled">
                    <th class="disabled">관리코드</th>
                    <td>
                        <span class="disabled">scn001= UID</span>
                    </td>
                </tr>
                <tr class="disabled">
                    <th>업체명</th>
                    <td>
                        <span>삼천리네트웍스</span>
                    </td>
                </tr>
                <tr class="disabled">
                    <th>아이디</th>
                    <td>
                        <span>scn01</span>
                    </td>
                </tr>
                <tr>
                    <th>관리자 권한</th>
                    <td>
                        <div class="button">
                            <basic-btn>비밀번호 초기화</basic-btn>
                        </div>
                    </td>
                </tr>
                <tr class="disabled">
                    <th>전화번호</th>
                    <td>
                        <div class="selectbx">
                            <input type="text" id="phone" name="phone" placeholder="01012345678" disabled>
                        </div>
                    </td>
                </tr>
                <tr class="disabled">
                    <th>이메일</th>
                    <td>
                        <div class="selectbx d-flex">
                            <input type="text" id="email" name="email" placeholder="example@example.co.kr" disabled>
                            <div class="button">
                                <basic-btn>중복 확인</basic-btn>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="disabled">
                    <th>관리자 권한</th>
                    <td>
                        <div class="spot">
                            <input class="checkbx" type="checkbox" id="permit" name="list_check" disabled><label for="permit"><em class="disabled">허용</em></label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>계정 상태</th>
                    <td>
                        <div v-for="(item, index) in radioBox" :key="index" class="spot">
                            <input class="radiobx" type="radio" :id="item.idx" name="radio"><label :for="item.idx"><em>{{ item.title }}</em></label>
                        </div>
                    </td>
                </tr>
            </table>
        </template>

        <template v-if="!show">
            <div>퍼블필요</div>
        </template>

        <template v-if="!show">
            <div>퍼블필요</div>
        </template>
    </v-container>
</template>

<script>
    export default {
        name: "JoinUpForm",
        data() {
            return {
                show: true,
                radioBox: [
                    {
                        idx:1,
                        title: '활동',
                    },
                    {
                        idx:2,
                        title: '차단',
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
            max-width: 1320px;
            height: 883px;
            margin-top: 15px;
            border: 1px solid $color-bg-border;
            border-radius:  $border-radius-root;
            background-color: $color-white;

            table{
                width: 1260px;
                max-width: 1260px;
                margin: 30px 0 30px 30px;

                tr{
                    border-bottom: 1px solid $color-border;

                    &.disabled{

                        th.disabled{
                            color: $color-disabled;
                        }

                        td{
                            background-color: $color-bg-border;

                            .disabled{
                                color: $color-disabled;
                            }
                        }
                    }
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

                        .button{

                            button{
                                padding: 0 10px;
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
                                margin-right: 10px;
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


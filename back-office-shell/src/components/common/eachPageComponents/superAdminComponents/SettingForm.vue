<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="pageFormLayout">
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><v-icon class="titleIcon">$titleIcon</v-icon><span>회원가입 설정</span></div>
        </div>
        <template>
            <table>
                <colgroup>
                    <col width="200px">
                    <col width="*">
                </colgroup>
                <tr class="disabled" style="border-top: 1px solid #E5E5E5">
                    <th>전문인 승인설정</th>
                    <td>
                        <div v-for="(item, index) in radioBoxTop" :key="index" class="spot">
                            <input class="radiobx" type="radio" :id="'T'+item.idx" name="radioT"><label :for="'T'+item.idx"><em>{{ item.title }}</em></label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>입점 업체 승인설정</th>
                    <td>
                        <div v-for="(item, index) in radioBox" :key="index" class="spot">
                            <input class="radiobx" type="radio" :id="item.idx" name="radio"><label :for="item.idx"><em>{{ item.title }}</em></label>
                        </div>
                    </td>
                </tr>
                <tr class="textarea">
                    <th>가입불가 ID</th>
                    <td>
                        <textarea name="" id="" style="resize: none;" placeholder="구분자 쉼표 ( , ) 로 입력헤주세요"></textarea>
                    </td>
                </tr>
            </table>
        </template>
    </v-container>
</template>

<script>
    export default {
        name: "SettingForm",
        components: { },
        data(){
            return{
                num:'5',
                radioBoxTop: [
                    {
                        idx:1,
                        title: '자동승인',
                    },
                    {
                        idx:2,
                        title: '관리자승인',
                    },
                ],
                radioBox: [
                    {
                        idx:1,
                        title: '자동승인',
                    },
                    {
                        idx:2,
                        title: '관리자승인',
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app{
        .pageFormLayout{
            max-width: 1680px;
            height: 883px;
            margin: 10px auto 0 auto;
            border: 1px solid $color-bg-border;
            border-radius:  $border-radius-root;
            background-color: $color-white;

            .title{
                width: 1612px;
                margin: 40px auto 0;
                font-size: $font-16;
                font-weight: bold;

                .titleIcon{
                    margin-right: 10px;
                }
            }


            table{
                width: 1612px;
                max-width: 1612px;
                margin: 30px 0 30px 30px;

                tr{
                    border-bottom: 1px solid $color-border;

                    &.textarea{
                        position: relative;
                        th{
                            width: 200px;
                            height: 320px;
                        }
                        td{
                            height: 320px;

                            textarea{
                                position: absolute;
                                width: 1300px;
                                height: 300px;
                                margin: 10px 0;
                                padding: 10px;

                                @include customFont(Noto Sans CJK KR,normal,normal);

                                border: 1px solid $color-border;
                            }
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

                    .spot {
                        display: inline-block;
                        width: auto;
                        margin-right: 10px;

                        em{
                            width: 200px;
                            padding-left:26px;
                        }
                    }
                }
            }
        }
    }
</style>

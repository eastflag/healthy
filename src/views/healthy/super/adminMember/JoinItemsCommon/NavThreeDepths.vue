<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="contentLayout">
        <v-card class="rounded-0 elevation-0" min-width="100%">
            <v-layout>
                <v-flex>
                    <v-card-text>
                        <v-treeview
                                v-model="tree"
                                :load-children="fetch"
                                :items="items"
                                item-text="title"
                                activatable
                                active-class="teal lighten-5"
                                selected-color="teal lighten-3"
                                return-object
                                open-on-click
                                selectable
                                expand-icon="mdi-chevron-down"
                                on-icon="mdi-checkbox-marked"
                                off-icon="mdi-checkbox-blank-outline"
                                indeterminate-icon="mdi-checkbox-marked">
                        </v-treeview>
                    </v-card-text>
                </v-flex>
            </v-layout>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "ThreeDepths",
       data(){
         return{
             items: [{
                 "title": "건강하다 통합관리자 메뉴",
                 "children": [{
                     "title": "슈퍼관리 ",
                     "children": [
                         {
                         "title": "메인",
                         "children": [
                             {
                             "title": "대시보드",
                            }
                         ]
                        },
                         {
                             "title": "관리자환경설정",
                             "children": [
                                 {
                                 "title": "관리자리스트",
                                },
                                 {
                                     "title": "관리자등록",
                                 },
                                 {
                                     "title": "관리자이력관리",
                                 },
                                 {
                                     "title": "회원 가입 설정",
                                 },
                             ]
                         },
                         {
                             "title": "통합배너관리",
                             "children": [
                                 {
                                 "title": "배너리스트",
                                },
                                 {
                                     "title": "배너등록",
                                 }]
                         },
                         {
                             "title": "팝업관리",
                             "children": [
                                 {
                                 "title": "팝업리스트",
                                },
                                 {
                                     "title": "팝업등록",
                                 }]
                         },
                         {
                             "title": "운영정책관리",
                             "children": [
                                 {
                                 "title": "이용약관관리",
                                },
                                 {
                                     "title": "개인정보처리방침관리",
                                 },
                                 {
                                     "title": "고유식별정보수집동의",
                                 },
                                 {
                                     "title": "마케팅 및 광고 수신동의",
                                 },
                                 {
                                     "title": "개인정보취급위탁관리",
                                 },
                             ]
                         },
                         {
                             "title": "로그인",
                             "children": [
                                 {
                                 "title": "최초 비밀번호 변경",
                                },
                             ]
                         },
                         {
                             "title": "회원관리",
                             "children": [
                                 {
                                 "title": "회원관리",
                                     "children": [
                                         {
                                             "title": "회원관리",
                                             "children": [
                                                 {
                                                     "title": "고객회원",
                                                 },
                                                 {
                                                     "title": "전문인회원",
                                                 },
                                             ]
                                         },
                                         {
                                             "title": "탈퇴회원",
                                             "children": [
                                                 {
                                                     "title": "탈퇴회원 현황",
                                                 },
                                                 {
                                                     "title": "탈퇴회원 관리",
                                                 },
                                             ]
                                         },
                                     ]
                                },
                                 {
                                     "title": "주문관리",

                                     "children": [
                                         {
                                             "title": "주문관리",
                                             "children": [
                                                 {
                                                     "title": "주문리스트",
                                                 },
                                                 {
                                                     "title": "입금예정리스트",
                                                 },
                                                 {
                                                     "title": "환불리스트",
                                                 },
                                             ]
                                         },
                                     ]
                                 }
                             ]
                         },
                     ]
                 }]
             }]
         }
       },
        computed: {
        },

        watch: {
        },

        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app{
        .contentLayout{
            box-sizing: border-box;
            max-width: 335px;
            max-height: 883px;
            margin-top: 15px;
            padding: 20px;

            @include customScrollBar();
            overflow: scroll;

            border: 1px solid $color-bg-border;
            border-radius: $border-radius-root;
            background-color: $color-white;

            .theme--light {
                &.v-treeview, &.v-icon{
                    color: $color-basic;
                }
            }
        }
    }
</style>

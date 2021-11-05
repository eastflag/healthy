<template>
    <!--<div class="navigationLayout">
        <sidebar-menu :menu="menu"/>
    </div>-->
    <transition name="page" slot-scope="value">
        <div class='navigationLayout'>
            <div class="title">{{ title }}</div>
            <ul class='nav'>
                <li><router-link to="/faq"><span>FAQ</span></router-link>
                    <ul>
                        <li><router-link to="/faq">FAQ목록</router-link></li>
                        <li><router-link to="/faq-upload-revise">FAQ등록/수정</router-link></li>
                    </ul>
                </li>
                <li><router-link to="/inquiry-faq"><span>1:1문의</span></router-link>
                    <ul>
                        <li><router-link to="/inquiry-faq">FAQ</router-link></li>
                        <li><router-link to="/inquiry-list">문의목록</router-link></li>
                        <li><router-link to="/inquiry-notice">공지사항</router-link></li>
                    </ul>
                </li>
                <li class="action"><router-link to="/notice-list"><span>공지사항</span></router-link>
                    <ul>
                        <li><router-link to="/notice-list">공지목록</router-link></li>
                        <li><router-link to="/notice-upload-revise">공지등록/수정</router-link></li>
                    </ul>
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Navigation",
        components: {
            // SidebarMenu
        },
        data () {
            return {
                title: '게시판 관리',
                items: [
                    {
                        header: true,
                        title: "게시판 관리",
                        hiddenOnCollapse: false,
                    },
                    {
                        title: "FAQ",
                        child: [
                            {
                                href: "/faq",
                                title: "FAQ목록",
                            },
                            {
                                href: "/faq-upload-revise",
                                title: "FAQ 등록/수정",
                            },
                        ],
                    },
                    {
                        title: "1:1문의",
                        child: [
                            {
                                href: "/inquiry-faq",
                                title: "FAQ",
                            },
                            {
                                href: "/inquiry-list",
                                title: "문의목록",
                            },
                            {
                                href: "/inquiry-notice",
                                title: "공지사항",
                            },
                        ],
                    },
                    {
                        title: "공지사항",
                        child: [
                            {
                                href: "/notice-list",
                                title: "공지목록",
                            },
                            {
                                href: "/notice-upload-revise",
                                title: "공지 등록/수정",
                            },
                        ],
                    },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
     #app{
        .navigationLayout{
            position: absolute;
            height: auto;
            min-height: 970px;
            margin-top: 110px;
            width:200px;
            background: $color-sub;
            z-index: 1;

            .title{
                height: 90px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            ul.nav{
                padding-left: 15px;
                text-align: left;
                font-size: $font-14;

                >li{
                    height: auto;
                    margin-bottom: 5px;
                    padding: 5px 0 0 10px;

                    >a{
                        padding-bottom: 5px;
                        width: 95%;
                        display: inline-block;
                        border-bottom: 1px solid $color-point;
                    }
                    ul{
                        display: inline-block;
                        height: auto;
                        padding-bottom: 5px;

                        li{
                            height: 20px;

                            &:first-child{
                                display: inline-block;
                                margin-top: 3px;
                            }
                            &:hover a{
                                color: $color-action-font !important;
                            }
                        }
                    }

                    &.action{
                        border-radius: 10px 0 0 10px;
                        background-color: $color-basic-bg;

                        //action, hover & onclick change-font
                        //li{color: $color-action-font;}
                    }
                }
            }
        }
    }
</style>

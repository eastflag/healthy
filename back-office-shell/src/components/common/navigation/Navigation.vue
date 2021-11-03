<template>
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
        data () {
            return {
                title: '게시판 관리',
                treeData:[
                    {}
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
     #app{
        .navigationLayout{
            position: absolute;
            margin-top: 110px;
            width:200px;
            height: 1080px;
            background: #88BFB5;
            overflow: hidden;
            z-index: 1;

            .title{
                height: 90px;
                display: flex;
                align-items: center;
                justify-content: center;
                color:  $color-basic;
            }

            ul.nav{
                height: 100%;
                padding-left: 15px;
                text-align: left;
                font-size: 14px;

                >li{
                    height: auto;
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
                                color: $color-actionFont !important;
                            }
                        }
                    }

                    &.action{
                        border-radius: 10px 0 0 10px;
                        background-color: white;

                        //action, hover & onclick change-font
                        //li{color: $color-actionFont;}
                    }
                }
            }
        }
    }
</style>

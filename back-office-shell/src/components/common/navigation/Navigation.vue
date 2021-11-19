<template>
    <transition name="page" slot-scope="value">
        <div class='navigationLayout'>
            <div class="title">{{title}}</div>
            <ul class='nav'>
                <li v-for="item of items" :key="item"><router-link to="">{{item.title}}</router-link>
                    <ul>
                        <li v-for="item of item.children"><router-link to="">{{item.title}}</router-link></li>
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
                title:"게시판관리",
                items:[
                    {
                        'title':'FAQ',
                        'children':[
                            {
                                'title':'FAQ목록'
                            },
                            {
                                'title':'FAQ등록/수정'
                            },
                        ]
                    },
                    {
                        'title':'1:1문의',
                        'children':[
                            {
                                'title':'문의목록'
                            },
                        ]
                    },
                    {
                        'title':'공지사항',
                        'children':[
                            {
                                'title':'공지목록'
                            },
                            {
                                'title':'공지등록/수정'
                            },
                        ]
                    },
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
            height: auto;
            min-height: 970px;
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
                    }
                }
            }
        }
    }
</style>

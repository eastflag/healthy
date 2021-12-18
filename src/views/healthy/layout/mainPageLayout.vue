<template>
    <div>
        <div class="headerTabLayout">
            <hearder-top/>
            <ul class="d-flex headerNav justify-space-around align-center">
                <li v-for="item of items" :key="item"><router-link :to="item.path">{{item.title}}</router-link></li>
            </ul>
        </div>
        <div class="app">
            <template>
                <navigation style="height: 100%"/>
            </template>
            <router-view />
        </div>
    </div>
</template>

<script>
    import HearderTop from '@/components/common/header/HeaderTop'
    import Navigation from '@/components/common/navigation/Navigation'

    export default {
        name: 'App',
        components: { HearderTop , Navigation },
        data(){
            return{
                items:[
                    {
                      'title':'슈퍼관리',
                      'path': '/super/main'
                    },
                    {
                      'title':'회원관리',
                      'path': '/member/member'
                    },
                    {
                      'title':'주문관리',
                      'path': '/order/order'
                    },
                    {
                      'title':'상담관리',
                      'path': '/consultation/consultation'
                    },
                    {
                      'title':'상품관리',
                      'path': '/product'
                    },
                    {
                      'title':'프로모션/마케팅',
                      'path': '/promotional/coupon'
                    },
                    {
                      'title':'게시판관리',
                      'path': '/cs-center/faq'
                    },
                    {
                      'title':'정산',
                      'path': '/'
                    },
                    {
                      'title':'시스템관리',
                      'path': '/'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';

    #app{
        .headerTabLayout{
            width: 100%;
            height: 110px;
            overflow: hidden;
            position: fixed;
            z-index: 99;
            background-color: $color-white;
            border-bottom: 1px solid $color-sub;

            .headerNav{
                width: inherit;
                height: 60px;

                li{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    border-bottom: 5px solid $color-white;

                    &.action{
                        border-bottom: 5px solid $color-main;
                    }
                }
            }
        }
    }
</style>

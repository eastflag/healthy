<template>
    <div class="headerTabLayout">
        <hearder-top/>
        <ul class="d-flex headerNav justify-space-around align-center">
            <li v-for="item in items" :key="item"><router-link to="">{{item.title}}</router-link></li>
        </ul>
    </div>
</template>

<script>
    import HearderTop from './HeaderTop'
    export default {
        name: "Hearder",
        components: { HearderTop },
        data(){
            return{
                itmes:[
                    {
                        'title':'슈퍼관리'
                    },
                    {
                        'title':'회원관리'
                    },
                    {
                        'title':'주문관리'
                    },
                    {
                        'title':'상담관리'
                    },
                    {
                        'title':'상품관리'
                    },
                    {
                        'title':'프로모션/마케팅'
                    },
                    {
                        'title':'게시판관리'
                    },
                    {
                        'title':'정산'
                    },
                    {
                        'title':'시스템관리'
                    },
                ]
            }
        }
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
            }
        }
    }
</style>

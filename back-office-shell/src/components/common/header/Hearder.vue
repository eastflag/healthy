<template>
    <div class="headerTabLayout">
        <hearder-top/>
        <ul class="d-flex headerNav justify-space-around align-center">
            <li> <router-link to="">슈퍼관리</router-link></li>
            <li> <router-link to="">회원관리</router-link></li>
            <li> <router-link to="">주문관리</router-link></li>
            <li> <router-link to="">상담관리</router-link></li>
            <li> <router-link to="">상품관리</router-link></li>
            <li> <router-link to="">프로모션/마케팅</router-link></li>
            <li> <router-link to="/notice-list">게시판관리</router-link></li>
            <li> <router-link to="">정산</router-link></li>
            <li> <router-link to="">시스템관리</router-link></li>
        </ul>
    </div>
</template>

<script>
    import HearderTop from './HeaderTop'
    export default {
        name: "Hearder",
        components: { HearderTop }
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
            z-index: 2;
            background-color: $color-white;
            border-bottom: 1px solid $color-sub;

            .headerNav{
                width: inherit;
                height: 60px;
            }
        }
    }
</style>

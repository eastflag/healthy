<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content">
                <div class="menuNav">
                    <span>프로모션/마케팅</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>쿠폰관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>쿠폰목록</span>
                </div>
                <div class="title">쿠폰목록</div>
            </div>
        </template>
        <template>
            <coupon-list-search-input />
        </template>
        <template>
            <coupon-list-result />
        </template>
    </v-container>
</template>

<script>
    import couponListSearchInput from '@/components/common/eachPageComponents/promotionalComponents/CouponListSearchInput'
    import couponListResult from '@/components/common/eachPageComponents/promotionalComponents/CouponListResult'

    export default {
        name: "CouponList",
        components: { couponListSearchInput , couponListResult },
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content">
                <div class="menuNav">
                    <span>프로모션/마케팅</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>쿠폰관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>쿠폰발행요청</span>
                </div>
                <div class="title">쿠폰발행요청</div>
            </div>
        </template>
        <template>
            <coupon-issuance-request-list/>
        </template>
    </v-container>
</template>

<script>
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'
    import CouponIssuanceRequestList from '@/components/common/eachPageComponents/promotionalComponents/CouponIssuanceRequestList'
    
    export default {
        name: "CouponIssuanceRequest",
        components :{ BasicBtn , CouponIssuanceRequestList }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    // manuPath Common SCSS
    @import '~@/assets/scss/manuPathCommon.scss';
</style>

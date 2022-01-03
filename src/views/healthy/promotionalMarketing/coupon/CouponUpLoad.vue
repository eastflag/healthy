<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content">
                <div class="menuNav">
                    <span>프로모션/마케팅</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>쿠폰관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>쿠폰등록/수정</span>
                </div>
                <div class="title">쿠폰등록/수정</div>
            </div>
        </template>
        <template>
            <div class="content d-flex align-center justify-end">
                <g-button>저장</g-button>
            </div>
        </template>
        <template>
            <coupon-up-load-input />
        </template>
    </v-container>
</template>

<script>
    import couponUpLoadInput from '@/components/common/eachPageComponents/promotionalComponents/CouponUpLoadInput'

    export default {
        name: "CouponUpLoad",
        components: { couponUpLoadInput },
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

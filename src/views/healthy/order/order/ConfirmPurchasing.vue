<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content">
                <div class="menuNav">
                    <span>주문관리</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>주문관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>구매확정</span>
                </div>
                <div class="title">구매확정</div>
            </div>
        </template>
        <template>
            <confirm-purchasing-search-input />
        </template>
        <template>
            <confirm-purchasing-list />
        </template>
        <template>
            <confirm-purchasing-detail />
        </template>
    </v-container>
</template>

<script>
    import confirmPurchasingSearchInput from '@/components/common/eachPageComponents/orderComponents/ConfirmPurchasingSearchInput'
    import confirmPurchasingList from '@/components/common/eachPageComponents/orderComponents/ConfirmPurchasingList'
    import confirmPurchasingDetail from '@/views/healthy/order/order/details/ConfirmPurchasingDetail'

    export default {
        name: "ConfirmPurchasing",
        components:{ confirmPurchasingSearchInput, confirmPurchasingList, confirmPurchasingDetail }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

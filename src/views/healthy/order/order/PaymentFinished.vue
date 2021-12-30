<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content">
                <div class="menuNav">
                    <span>주문관리</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>주문관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>결제완료</span>
                </div>
                <div class="title">결제완료</div>
            </div>
        </template>
        <template>
            <payment-finished-search-input />
        </template>
        <template>
            <payment-finished-list />
        </template>
        <template>
            <payment-finished-detail />
        </template>
    </v-container>
</template>

<script>
    import paymentFinishedSearchInput from '@/components/common/eachPageComponents/orderComponents/PaymentFinishedSearchInput'
    import paymentFinishedList from '@/components/common/eachPageComponents/orderComponents/PaymentFinishedList'
    import paymentFinishedDetail from '@/views/healthy/order/order/details/PaymentFinishedDetail'

    export default {
        name: "PaymentFinished",
        components:{ paymentFinishedSearchInput, paymentFinishedList, paymentFinishedDetail}
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

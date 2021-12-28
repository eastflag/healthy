<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content">
                <div class="menuNav">
                    <span>주문관리</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>클레임관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>주문취소 목록</span>
                </div>
                <div class="title">주문취소 목록</div>
            </div>
        </template>
        <template>
            <order-cancellation-list-search-input />
        </template>
        <template>
            <order-cancellation-list-result />
        </template>
        <template>
            <order-cancellation-list-detail />
        </template>
    </v-container>
</template>

<script>
    import orderCancellationListSearchInput from '@/components/common/eachPageComponents/claimComponents/OrderCancellationListSearchInput'
    import orderCancellationListResult from '@/components/common/eachPageComponents/claimComponents/OrderCancellationListResult'
    import orderCancellationListDetail from '@/views/healthy/order/claim/details/OrderCancellationListDetail'

    export default {
        name: "OrderCancellationList",
        components:{ orderCancellationListSearchInput, orderCancellationListResult, orderCancellationListDetail }

    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

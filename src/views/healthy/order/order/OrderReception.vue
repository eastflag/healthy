<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content">
                <div class="menuNav">
                    <span>주문관리</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>주문관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>주문접수</span>
                </div>
                <div class="title">주문접수</div>
            </div>
        </template>
        <template>
            <order-search-input />
        </template>
        <template>
            <order-list />
        </template>
    </v-container>
</template>

<script>
    import orderSearchInput from '@/components/common/eachPageComponents/orderComponents/OrderSearchInput'
    import orderList from '@/components/common/eachPageComponents/orderComponents/OrderList'

    export default {
        name: "OrderReception",
        components: { orderSearchInput , orderList },
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

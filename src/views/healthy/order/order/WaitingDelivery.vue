<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content">
                <div class="menuNav">
                    <span>주문관리</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>주문관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>배송대기</span>
                </div>
                <div class="title">배송대기</div>
            </div>
        </template>
        <template>
            <waiting-delivery-search-input />
        </template>
        <template>
            <waiting-delivery-list />
        </template>
        <template>
            <waiting-delivery-detail />
        </template>
    </v-container>
</template>

<script>
    import waitingDeliverySearchInput from '@/components/common/eachPageComponents/orderComponents/WaitingDeliverySearchInput'
    import waitingDeliveryList from '@/components/common/eachPageComponents/orderComponents/WaitingDeliveryList'
    import waitingDeliveryDetail from '@/views/healthy/order/order/details/WaitingDeliveryDetail'

    export default {
        name: "WaitingDelivery",
        components:{ waitingDeliverySearchInput, waitingDeliveryList, waitingDeliveryDetail }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content">
                <div class="menuNav">
                    <span>주문관리</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>주문관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>배송완료</span>
                </div>
                <div class="title">배송완료</div>
            </div>
        </template>
        <template>
            <delivery-complete-search-input />
        </template>
        <template>
            <delivery-complete-list />
        </template>
        <template>
            <delivery-complete-detail />
        </template>
    </v-container>
</template>

<script>
    import deliveryCompleteSearchInput from '@/components/common/eachPageComponents/orderComponents/DeliveryCompleteSearchInput'
    import deliveryCompleteList from '@/components/common/eachPageComponents/orderComponents/DeliveryCompleteList'
    import deliveryCompleteDetail from '@/views/healthy/order/order/details/DeliveryCompleteDetail'


    export default {
        name: "DeliveryComplete",
        components:{ deliveryCompleteSearchInput, deliveryCompleteList, deliveryCompleteDetail }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    // manuPath Common SCSS
    @import '~@/assets/scss/manuPathCommon.scss';
</style>

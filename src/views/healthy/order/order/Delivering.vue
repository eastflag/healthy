<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content">
                <div class="menuNav">
                    <span>주문관리</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>주문관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>배송중</span>
                </div>
                <div class="title">배송중</div>
            </div>
        </template>
        <template>
            <delivering-search-input />
        </template>
        <template>
            <delivering-list />
        </template>
        <template>
            <delivering-detail />
        </template>
    </v-container>
</template>

<script>
    import deliveringSearchInput from '@/components/common/eachPageComponents/orderComponents/DeliveringSearchInput'
    import deliveringList from '@/components/common/eachPageComponents/orderComponents/DeliveringList'
    import deliveringDetail from '@/views/healthy/order/order/details/DeliveringDetail'

    export default {
        name: "Delivering",
        components:{ deliveringSearchInput, deliveringList, deliveringDetail }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    // manuPath Common SCSS
    @import '~@/assets/scss/manuPathCommon.scss';
</style>

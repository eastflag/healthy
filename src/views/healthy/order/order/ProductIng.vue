<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content">
                <div class="menuNav">
                    <span>주문관리</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>주문관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>상품준비중</span>
                </div>
                <div class="title">상품준비중</div>
            </div>
        </template>
        <template>
            <product-ing-search-input />
        </template>
        <template>
            <product-ing-list />
        </template>
        <template>
            <product-ing-detail />
        </template>
    </v-container>
</template>

<script>
    import productIngSearchInput from '@/components/common/eachPageComponents/orderComponents/ProductIngSearchInput'
    import productIngList from '@/components/common/eachPageComponents/orderComponents/ProductIngList'
    import productIngDetail from '@/views/healthy/order/order/details/ProductIngDetail'

    export default {
        name: "ProductIng",
        components:{ productIngSearchInput, productIngList, productIngDetail }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

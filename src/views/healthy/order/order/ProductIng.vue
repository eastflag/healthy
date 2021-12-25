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
            <div class="button d-flex align-center justify-end">
                <basic-btn>히스토리</basic-btn>
                <basic-btn>목록</basic-btn>
                <action-btn>전체주문취소</action-btn>
            </div>
        </template>
    </v-container>
</template>

<script>
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    import productIngSearchInput from '@/components/common/eachPageComponents/orderComponents/ProductIngSearchInput'
    import productIngList from '@/components/common/eachPageComponents/orderComponents/ProductIngList'

    export default {
        name: "ProductIng",
        components:{ BasicBtn , ActionBtn, productIngSearchInput, productIngList }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

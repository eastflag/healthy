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
            <div class="button d-flex align-center justify-end">
                <action-btn>히스토리</action-btn>
                <basic-btn>목록</basic-btn>
            </div>
        </template>
    </v-container>
</template>

<script>
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    import confirmPurchasingSearchInput from '@/components/common/eachPageComponents/orderComponents/ConfirmPurchasingSearchInput'
    import confirmPurchasingList from '@/components/common/eachPageComponents/orderComponents/ConfirmPurchasingList'

    export default {
        name: "ConfirmPurchasing",
        components:{ BasicBtn , ActionBtn, confirmPurchasingSearchInput, confirmPurchasingList }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

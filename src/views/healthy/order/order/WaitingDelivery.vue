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
            <div class="button d-flex align-center justify-end">
                <basic-btn>목록</basic-btn>
                <action-btn>전체주문취소</action-btn>
            </div>
        </template>
    </v-container>
</template>

<script>
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    import waitingDeliverySearchInput from '@/components/common/eachPageComponents/orderComponents/WaitingDeliverySearchInput'
    import waitingDeliveryList from '@/components/common/eachPageComponents/orderComponents/WaitingDeliveryList'

    export default {
        name: "WaitingDelivery",
        components:{ BasicBtn , ActionBtn, waitingDeliverySearchInput, waitingDeliveryList }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

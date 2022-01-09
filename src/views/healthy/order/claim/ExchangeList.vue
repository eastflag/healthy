<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content">
                <div class="menuNav">
                    <span>주문관리</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>클레임관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>교환목록</span>
                </div>
                <div class="title">교환목록</div>
            </div>
        </template>
        <template>
            <exchange-list-search-input />
        </template>
        <template>
            <exchange-list-result />
        </template>
        <template>
            <exchange-list-detail />
        </template>
    </v-container>
</template>

<script>
    import exchangeListSearchInput from '@/components/common/eachPageComponents/claimComponents/ExchangeListSearchInput'
    import exchangeListResult from '@/components/common/eachPageComponents/claimComponents/ExchangeListResult'
    import exchangeListDetail from '@/views/healthy/order/claim/details/ExchangeListDetail'

    export default {
        name: "ExchangeList",
        components:{ exchangeListSearchInput, exchangeListResult, exchangeListDetail }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    // manuPath Common SCSS
    @import '~@/assets/scss/manuPathCommon.scss';
</style>

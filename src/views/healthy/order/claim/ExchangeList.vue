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
    </v-container>
</template>

<script>
    import exchangeListSearchInput from '@/components/common/eachPageComponents/claimComponents/ExchangeListSearchInput'
    import exchangeListResult from '@/components/common/eachPageComponents/claimComponents/ExchangeListResult'

    export default {
        name: "ExchangeList",
        components:{ exchangeListSearchInput, exchangeListResult }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

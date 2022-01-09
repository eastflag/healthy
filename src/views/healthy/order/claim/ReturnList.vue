<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content">
                <div class="menuNav">
                    <span>주문관리</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>클레임관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>반품목록</span>
                </div>
                <div class="title">반품목록</div>
            </div>
        </template>
        <template>
            <return-list-search-input />
        </template>
        <template>
            <return-list-result />
        </template>
        <template>
            <return-list-detail />
        </template>
    </v-container>
</template>

<script>
    import returnListSearchInput from '@/components/common/eachPageComponents/claimComponents/ReturnListSearchInput'
    import returnListResult from '@/components/common/eachPageComponents/claimComponents/ReturnListResult'
    import returnListDetail from '@/views/healthy/order/claim/details/ReturnListDetail'

    export default {
        name: "ReturnList",
        components:{ returnListSearchInput, returnListResult, returnListDetail }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    // manuPath Common SCSS
    @import '~@/assets/scss/manuPathCommon.scss';
</style>

<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content">
                <div class="menuNav">
                    <span>프로모션/마케팅</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>포인트관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>포인트관리</span>
                </div>
                <div class="title">포인트관리</div>
            </div>
        </template>
        <template>
            <point-management-search-input />
        </template>
        <template>
            <point-management-list />
        </template>
    </v-container>
</template>

<script>
    import pointManagementSearchInput from '@/components/common/eachPageComponents/promotionalComponents/PointManagementSearchInput'
    import pointManagementList from '@/components/common/eachPageComponents/promotionalComponents/PointManagementList'

    export default {
        name: "PointManagement",
        components:{ pointManagementSearchInput, pointManagementList }

    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    // manuPath Common SCSS
    @import '~@/assets/scss/manuPathCommon.scss';
</style>



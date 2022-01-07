<template>
    <v-container fluid class="containerLayout">
        <template>
            <div class="content">
                <div class="menuNav">
                    <span>게시판관리</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>FAQ</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>FAQ목록</span>
                </div>
                <div class="title">FAQ목록</div>
            </div>
        </template>
        <template>
            <!--컨포넌트-->
            <faq-search-input/>
        </template>
        <template>
            <!--컨포넌트-->
            <faq-search-list/>
        </template>
    </v-container>
</template>

<script>
import FaqSearchInput from '../../../../components/common/eachPageComponents/cscenterComponents/FaqSearchInput'
import FaqSearchList from '../../../../components/common/eachPageComponents/cscenterComponents/FaqSearchList'
    export default {
        components: { FaqSearchInput, FaqSearchList },
        name: "FAQList"
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

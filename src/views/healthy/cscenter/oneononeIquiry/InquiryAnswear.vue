<template>
    <v-container fluid class="containerLayout">
        <template>
            <div class="content">
                <div class="menuNav">
                    <span>게시판관리</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>1:1문의</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>문의목록</span>
                </div>
                <div class="title">문의목록</div>
            </div>
        </template>
        <template>
            <inquiry-oneonone-answear/>
        </template>
        <template>
            <!--컴포넌트추가-->
        </template>
    </v-container>
</template>

<script>
import InquiryOneononeAnswear from '../../../../components/common/eachPageComponents/cscenterComponents/InquiryOneononeAnswear.vue'

    export default {
        name: "InquiryAnswear",
        components: { InquiryOneononeAnswear }
    }
</script>

<style lang="scss" scop
                InquiryOneononeAnsweared>
</style>

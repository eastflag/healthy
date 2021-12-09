<template>
    <v-container fluid class="containerLayout">
        <template>
            <inquiry-list-input/>
        </template>
        <template>
            <inquiry-list-list/>
        </template>
        <template>
            <!--컴포넌트추가-->
        </template>
    </v-container>
</template>

<script>
    import InquiryListInput from '@/components/common/eachPageComponents/cscenterComponents/InquiryListInput'
    import InquiryListList from '@/components/common/eachPageComponents/cscenterComponents/InquiryListList'

    export default {
        name: "InquiryList",
        components: { InquiryListInput , InquiryListList }
    }
</script>

<style lang="scss" scoped>
</style>

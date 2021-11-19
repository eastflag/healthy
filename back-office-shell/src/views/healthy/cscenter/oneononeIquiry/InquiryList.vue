<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <inquiry-list-input/>
        </template>
        <template>
            <inquiry-list-list/>
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
    #app{
        .containerLayout{

        }
    }
</style>

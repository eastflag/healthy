<template>
    <v-container fluid class="containerLayout">
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
    #app{
        .containerLayout{

        }
    }
</style>

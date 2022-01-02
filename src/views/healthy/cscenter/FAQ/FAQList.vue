<template>
    <v-container fluid class="containerLayout">
        <template>
            <!--컨포넌트-->
            <cs-faq-search-input/>
        </template>
        <template>
            <!--컨포넌트-->
            <cs-faq-search-list/>
        </template>
    </v-container>
</template>

<script>
import CsFaqSearchInput from '../../../../components/common/eachPageComponents/cscenterComponents/FAQ/CsFaqSearchInput'
import CsFaqSearchList from '../../../../components/common/eachPageComponents/cscenterComponents/FAQ/CsFaqSearchList'
    export default {
  components: { CsFaqSearchInput, CsFaqSearchList },
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

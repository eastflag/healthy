<template>
    <v-container fluid class="containerLayout">
        <template>
           <banner-items-input/>
        </template>
        <template>
           <banner-items-form/>
        </template>
    </v-container>
</template>

<script>
    import BannerItemsInput from '@/components/common/eachPageComponents/superAdminComponents/BannerItemsInput'
    import BannerItemsForm from '@/components/common/eachPageComponents/superAdminComponents/BannerItemsForm'

    export default {
        name: "BannerItems",
        components:{ BannerItemsInput , BannerItemsForm }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

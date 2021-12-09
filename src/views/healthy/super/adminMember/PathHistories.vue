<template>
    <v-container fluid class="containerLayout">
        <template>
            <histories-input/>
        </template>
        <template>
            <histories-list/>
        </template>
    </v-container>
</template>

<script>
    import HistoriesInput from '@/components/common/eachPageComponents/superAdminComponents/HistoriesInput'
    import HistoriesList from '@/components/common/eachPageComponents/superAdminComponents/HistoriesList'

    export default {
        name: "PathHistories",
        components: { HistoriesInput , HistoriesList },
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

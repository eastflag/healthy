<template>
    <v-container fluid class="containerLayout">
        <template>
            <pop-up-list-input/>
        </template>
        <template>
            <pop-up-list-form/>
        </template>
    </v-container>
</template>

<script>
    import popUpListInput from '@/components/common/eachPageComponents/superAdminComponents/PopUpListInput'
    import popUpListForm from '@/components/common/eachPageComponents/superAdminComponents/PopUpListForm'

    export default {
        name: "PopUpList",
        components: { popUpListInput , popUpListForm }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';

</style>

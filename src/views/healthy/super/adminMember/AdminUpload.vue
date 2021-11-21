<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <admin-input/>
        </template>
        <template>
            <admin-list-form/>
        </template>
    </v-container>
</template>

<script>
    import adminInput from '@/components/common/eachPageComponents/superAdminComponents/AdminInput'
    import adminListForm from '@/components/common/eachPageComponents/superAdminComponents/AdminListForm'

    export default {
        name: "AdminList",
        components:{ adminInput , adminListForm }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

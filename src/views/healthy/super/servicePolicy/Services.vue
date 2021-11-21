<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template v-if="show">
            <services-list-form/>
        </template>
        <template v-if="!show">
            <services-upload/>
        </template>
    </v-container>
</template>

<script>
    import ServicesListForm from '@/components/common/eachPageComponents/superAdminComponents/ServicesListForm'
    import ServicesUpload from '@/components/common/eachPageComponents/superAdminComponents/ServicesUpload'

    export default {
        name: "Services",
        components:{ ServicesListForm , ServicesUpload },
        data(){
            return{
                show: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app{
    }
</style>

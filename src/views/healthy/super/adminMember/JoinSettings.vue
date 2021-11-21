<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="button d-flex align-center justify-end">
                <basic-btn>취소</basic-btn>
                <action-btn>저장</action-btn>
            </div>
        </template>
        <template>
            <setting-form/>
        </template>
    </v-container>
</template>

<script>
    import SettingForm from '@/components/common/eachPageComponents/superAdminComponents/SettingForm'
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'

    export default {
        name: "JoinSettings",
        components:{ ActionBtn , BasicBtn , SettingForm }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app{
        .button{
            button:first-child{
                margin-right: 15px;
            }
        }
    }
</style>

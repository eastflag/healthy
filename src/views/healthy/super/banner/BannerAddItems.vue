<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="button d-flex align-center justify-end">
                <basic-btn>취소</basic-btn>
                <action-btn>저장</action-btn>
            </div>
        </template>
        <template>
            <banner-add-items-input/>
        </template>
        <template>
            <banner-add-items-form/>
        </template>
    </v-container>
</template>

<script>
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'
    import BannerAddItemsInput from '@/components/common/eachPageComponents/superAdminComponents/BannerAddItemsInput'
    import BannerAddItemsForm from '@/components/common/eachPageComponents/superAdminComponents/BannerAddItemsForm'
    export default {
        name: "BannerAddItems",
        components:{ ActionBtn , BasicBtn , BannerAddItemsInput , BannerAddItemsForm}
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

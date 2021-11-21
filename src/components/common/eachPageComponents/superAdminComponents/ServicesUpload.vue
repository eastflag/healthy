<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="">
        <template>
            <div class="button d-flex align-center justify-end">
                <basic-btn>취소</basic-btn>
                <action-btn>저장</action-btn>
            </div>
        </template>
        <template>
            <upload-editor-input/>
        </template>
        <template>
            <upload-editor-form/>
        </template>
        <template>
            <services-upload-success-modal/>
            <services-upload-cancel-modal/>
        </template>
    </v-container>
</template>

<script>
    import ActionBtn from '../../../../components/common/buttonComponents/ActionBtn'
    import BasicBtn from '../../../../components/common/buttonComponents/BasicBtn'

    import ServicesUploadSuccessModal from './ServicesUploadComponents/modal/ServicesUploadSuccessModal'
    import ServicesUploadCancelModal from './ServicesUploadComponents/modal/ServicesUploadCancelModal'

    import UploadEditorInput from '../../../../components/common/eachPageComponents/superAdminComponents/ServicesUploadComponents/UploadEditorInput'
    import UploadEditorForm from '../../../../components/common/eachPageComponents/superAdminComponents/ServicesUploadComponents/UploadEditorForm'


    export default {
        name: "ServicesUpload",
        components: { ActionBtn , BasicBtn , UploadEditorInput , UploadEditorForm , ServicesUploadSuccessModal , ServicesUploadCancelModal },
        data() {
            return {

            };
        },
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

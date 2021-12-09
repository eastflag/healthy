<template>
    <v-container fluid class="containerLayout">
        <template>
            <div class="content d-flex align-center justify-end">
                <g-button>저장</g-button>
            </div>
        </template>
        <template>
            <upload-editor-input/>
        </template>
        <template>
            <upload-editor-form/>
        </template>
    </v-container>
</template>

<script>
    import UploadEditorInput from '@/components/common/eachPageComponents/cscenterComponents/UploadEditorInput'
    import UploadEditorForm from '@/components/common/eachPageComponents/cscenterComponents/UploadEditorForm'

    export default {
        name: "NoticeUploadRevise",
        components: { UploadEditorInput , UploadEditorForm },
        data() {
            return {

            };
        },
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app{
        .containerLayout{
            .content{
                width: 100%;
                height: 32px;
                overflow: hidden;
            }
        }
    }
</style>

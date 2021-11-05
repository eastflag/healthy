<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content d-flex align-center justify-end">
                <g-button>저장</g-button>
            </div>
        </template>
        <template>
            <upload-editor/>
        </template>
        <template>
            <upload-form/>
        </template>
    </v-container>
</template>

<script>
    import UploadForm from '@/components/common/boardComponents/UploadForm'
    import UploadEditor from '@/components/common/boardComponents/UploadEditor'

    export default {
        name: "NoticeUploadRevise",
        components: { UploadForm , UploadEditor },
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

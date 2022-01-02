<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content d-flex align-center justify-end">
                <g-button>저장</g-button>
            </div>
        </template>
        <template>
            <faq-upload-revise-editor/>
            <!--컴포넌트-->
        </template>
        <template>
            <!--컴포넌트-->
        </template>
    </v-container>
</template>

<script>
import FaqUploadReviseEditor from '../../../../components/common/eachPageComponents/cscenterComponents/FaqUploadReviseEditor';

    //견본('@/views/healthy/cscenter/notice/NoticeUploadRevise') 와 비슷한 폼
    export default {
        name: "FAQUploadRevise",
        components: { FaqUploadReviseEditor },
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

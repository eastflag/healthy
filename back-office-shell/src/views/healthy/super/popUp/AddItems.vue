<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="button d-flex align-center justify-end">
                <basic-btn>취소</basic-btn>
                <action-btn>저장</action-btn>
            </div>
        </template>
        <template>
            <!--컴포넌트 추가 생성  ++ -->
        </template>
    </v-container>
</template>

<script>
    import ActionBtn from '../../../../components/common/buttonComponents/ActionBtn'
    import BasicBtn from '../../../../components/common/buttonComponents/BasicBtn'

    export default {
        name: "PopUpload",
        components: { ActionBtn , BasicBtn }
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

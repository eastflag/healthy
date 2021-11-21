<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="button d-flex align-center justify-end">
                <basic-btn>취소</basic-btn>
                <action-btn>등록</action-btn>
            </div>
        </template>
        <template>
            <!--컨포넌트-->
        </template>
        <template>
            <!--컨포넌트 추가생성 ++ -->
            <!--기획서상 3장이 각각 페이지가아닌, UI상  height: auto 로 보여짐-->
        </template>
    </v-container>
</template>

<script>
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    export default {
        name: "ProductUpLoad",
        components:{ BasicBtn , ActionBtn }
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

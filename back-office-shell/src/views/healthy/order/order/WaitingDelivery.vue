<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="button d-flex align-center justify-end">
                <basic-btn>목록</basic-btn>
                <action-btn>전체주문취소</action-btn>
            </div>
        </template>
        <template>
            <!--컨포넌트-->
        </template>
        <template>
            <!--컨포넌트-->
        </template>
    </v-container>
</template>

<script>
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    export default {
        name: "WaitingDelivery",
        components:{ BasicBtn , ActionBtn }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="button d-flex align-center justify-end">
                <basic-btn>취소</basic-btn>
                <action-btn>저장</action-btn>
            </div>
        </template>
        <div class="d-flex justify-space-between">
            <three-depths/>
            <join-up-form/>
        </div>
    </v-container>
</template>

<script>
    import ActionBtn from '../../../../components/common/buttonComponents/ActionBtn'
    import BasicBtn from '../../../../components/common/buttonComponents/BasicBtn'
    import threeDepths from './JoinItemsCommon/NavThreeDepths'
    import JoinUpForm from './JoinItemsCommon/JoinUpForm'

    export default {
        name: "AdminUpload",
        components:{ ActionBtn , BasicBtn , threeDepths , JoinUpForm }
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

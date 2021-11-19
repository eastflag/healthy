<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog value="true" content-class="rounded-0 elevation-0" width="500px">
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="title">
                <h2>비밀번호 변경</h2>
            </div>
            <form action="" class="loginInfoLayout">
                <input type="password" placeholder="초기 비밀번호">
                <input type="password" placeholder="변경 비밀번호">
                <input type="password" placeholder="변경 비밀번호 확인">
                <div class="button d-flex align-center justify-center">
                    <ActionBtn>확인</ActionBtn>
                </div>
            </form>
            <span>비밀번호를 다시 확인해 주세요.</span>
        </v-card>
    </v-dialog>
</template>

<script>
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    export default {
        name: "passwordModal",
        components: { ActionBtn }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/popUpModal/popUpCommon.scss';
    #app{
        span{
            display: inline-block;
            width: inherit;
            height: 10px;
            text-align: center;
            font-size: $font-13;
            letter-spacing: -0.1px;
            color: red;
        }

        .button{
            margin-top: 15px;
        }
    }
</style>

<template>
    <v-dialog value="true" content-class="rounded-0 elevation-0" width="600px">
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="title">
                <h2>비밀번호 변경</h2>
            </div>
            <form action="" class="loginInfoLayout">
                <input type="password" placeholder="초기 비밀번호">
                <input type="password" placeholder="변경 비밀번호">
                <input type="password" placeholder="변경 비밀번호 확인">
                <div class="button d-flex align-center justify-center">
                    <action-btn>확인</action-btn>
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
        .modalLayout{
            background: #F9F9F9;
            padding-top:40px;
            height: 450px;
            border: 1px solid $color-bg-border;;

            .title{
                margin-bottom: 30px;
                text-align: center;
                h2{
                    font-size: 24px;
                    color: $color-main;
                }
            }

            .loginInfoLayout{
                width: 90%;
                margin: 0 auto;

                input[type="password"]{
                    height: 60px;
                    background: $color-white;
                    padding-left: 20px;

                    &:first-child{
                        border-radius: 5px 5px 0 0;
                        border-bottom: none;
                        &:focus{
                            border-bottom: 1px solid $color-sub;
                        }
                    }
                    &:nth-child(3){
                        border-top: none;
                        border-radius: 0 0 5px 5px;
                        &:focus{
                            border-top: 1px solid $color-sub;
                        }
                    }

                }
            }
            span{
                display: inline-block;
                width: inherit;
                padding-left: 32px;
                margin-top: 10px;
                text-align: left;
                font-size: $font-13;
                letter-spacing: -0.1px;
                color: red;
            }

            .button{
                margin-top: 40px;
                width: 100%;
                height: 50px;
                border-radius: $border-radius-root;
                color: #999999;
                background: $color-bg-border;

                button{
                    width: inherit;
                    height: inherit;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                &.active{
                    color: $color-white;
                    background-color: $color-sub;
                }
            }
        }
    }
</style>

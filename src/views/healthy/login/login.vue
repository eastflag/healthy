<template>
    <v-container fluid class="loginLayoutPage">
        <div class="loginFormLayout">
            <div class="title">
                <div class="logo d-flex justify-center align-center">
                    <img src="@/assets/images/icons/logo.svg" alt="건강하다">
                </div>
                <h2>Admin Login</h2>
            </div>
            <form action="" class="loginInfoLayout">
                <input type="text" placeholder="아이디">
                <input type="password" placeholder="비밀번호">
                <div class="button">
                    <button>로그인</button>
                </div>
            </form>
            <span>아이디 또는 비밀번호를 다시 확인해 주세요.</span>
        </div>
        <template>
            <password-modal/>
        </template>
    </v-container>
</template>

<script>
    export default {
        name: "login",
        components:{
            passwordModal: () => import( /* webpackChunkName: ""*/ "./passwordModal" ),
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app{
        .loginLayoutPage{
            width: 1920px;
            height: 1080px;
            padding-top: 300px;

            .loginFormLayout{
                width: 500px;
                height: 210px;
                margin: auto;

                .title{
                    margin-bottom: 30px;
                    .logo{margin-bottom: 80px;}
                    h2{
                        text-align: center;
                        font-size: 24px;
                    }
                }
                .loginInfoLayout{

                    input{
                        height: 60px;
                        background: $color-white;
                        padding-left: 50px;

                        &::placeholder{
                            color: $color-placeholder;
                        }
                        &[type="text"]{
                            border-radius: 5px 5px 0 0;
                            background: url("~@/assets/images/icons/Id_icon.svg") no-repeat 15px;
                        }
                        &[type="password"]{
                            border-radius: 0 0 5px 5px;
                            border-top: 0;
                            background: url("~@/assets/images/icons/pwd_icon.svg") no-repeat 15px;

                            &:focus{
                                border-top: 1px solid $color-sub;
                            }
                        }
                    }
                    .button{
                        margin-top: 30px;
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

                span{
                    display: inline-block;
                    width: inherit;
                    height: 10px;
                    margin-top: 60px;
                    text-align: left;
                    font-size: $font-13;
                    letter-spacing: -0.1px;
                    color: red;
                }
            }
        }
    }
</style>

<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="loginLayoutPage">
        <div class="loginFormLayout">
            <div class="title">
                <img src="" alt="건강하다로고위치">
                <h2>Admin Login</h2>
            </div>
            <form action="" class="loginInfoLayout">
                <input type="text" placeholder="아이디">
                <input type="password" placeholder="비밀번호">
                <div class="button">
                    <button>로그인</button>
                </div>
            </form>
            <span>아이디 또는 비밀번호를 다시 확인해 주세요. 아이디 또는 비밀번호를 다시 확인해 주세요.</span>
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
            /*margin: 300px auto;*/
            padding-top: 300px;
            .loginFormLayout{
                width: 500px;
                height: 210px;
                margin: auto;
                .loginInfoLayout{

                    .button{
                        margin-top: 5px;
                        width: 100%;
                        height: 50px;
                        background-color: #88BFB5;
                        border-radius: $border-radius-root;
                        button{
                            width: inherit;
                            height: inherit;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                }

                span{
                    display: inline-block;
                    width: inherit;
                    height: 10px;
                    text-align: center;
                    font-size: $font-13;
                    letter-spacing: -0.1px;
                    color: red;
                }
            }
        }
    }
</style>

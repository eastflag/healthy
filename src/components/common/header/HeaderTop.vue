<template>
    <div class="hearderTop d-flex">
        <v-icon class="logo">$logo</v-icon>
        <div class="button d-flex justify-end">
            <button class="loginInfo d-flex align-center justify-space-between"><v-icon>$person</v-icon>로그인 정보</button>
            <button>로그아웃</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderTop"
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app{
        .hearderTop{
            width: 100%;
            height: 50px;
            padding: 10px 0 10px 30px;
            background-color: $color-main;

            .button{
                width: 100%;
                margin-right: 50px;

                button{
                    margin-right: 15px;
                    font-size: $font-14;
                    color: $color-white;

                    cursor: pointer;
                    &.loginInfo{
                        width: 100px;
                        margin-right: 30px;
                    }
                }
            }
        }
    }
</style>

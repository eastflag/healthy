<template>
    <div class="hearderTop d-flex">
        <v-icon>$logo</v-icon>
        <div class="button d-flex justify-end">
            <basic-btn>로그인 정보</basic-btn>
            <basic-btn>로그아웃</basic-btn>
        </div>
    </div>
</template>

<script>
    import BasicBtn from '../buttonComponents/BasicBtn'
    export default {
        name: "HeaderTop",
        components:{ BasicBtn },
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

            a{
                display: inline-block;
            }

            .button{
                width: 100%;
                button{
                    width: 110px;
                    margin-right: 15px;
                    font-weight: bold;
                    color: $color-main;
                    background-color: $color-white;
                }
            }
        }
    }
</style>

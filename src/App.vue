<template>
    <v-app id="app">
        <router-view />
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
            }
        },
        computed: {

        },
        methods: {
        }
    }
</script>

<style lang="scss">
@import '~@/assets/scss/_index.scss';
// 공통 scss는 여기에 정의
#app{
        .containerLayout{
            .content{
                width: 99%;
                height: 60px;
                overflow: hidden;

                .menuNav{
                    width: 200px;
                    height: 25px;
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: $font-12;
                    color: $color-span;

                    span:last-child{
                        color:  $color-basic;
                    }
                }

                .title{
                    display: inline-block;
                    margin-top: 5px;
                    font-size: $font-24 !important;
                }
            }
        }
    }
</style>

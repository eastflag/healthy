<template>
    <div class="hearderTop d-flex">
        <router-link to="/"><v-icon class="logo">$logo</v-icon></router-link>
        <span>Healthy HADA</span>
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

           a{
               display: inline-block;
           }
           >span{
               height: 30px;
               display: flex;
               justify-content: center;
               align-items: center;
               padding-left: 5px;
               color: white;
           }
       }
    }
</style>

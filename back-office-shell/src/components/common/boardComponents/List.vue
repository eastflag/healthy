<template>
    <div class="boardLayout">
        <p>board List</p>
    </div>
</template>

<script>
    export default {
        name: "List"
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app{
        .boardLayout{
            width: 95%;
            height: 300px;
            margin-top: 50px;
            border: 1px solid $color-sub;
        }
    }
</style>

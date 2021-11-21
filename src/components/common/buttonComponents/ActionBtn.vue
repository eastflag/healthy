<template>
    <button class="btn mid bg_green" v-bind="$attrs" v-on="$listeners">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "button"
    }
</script>

<style lang="scss" scoped>
    #app{
        .button{
            margin-bottom: 15px;
        }
    }
</style>

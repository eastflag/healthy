<template>
    <div class="button d-flex justify-center">
        <button class="btn mid bg_green" v-bind="$attrs" v-on="$listeners">
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        name: "PlusBtn"
    }
</script>

<style lang="scss" scoped>
    button{
        display: flex;
        height: inherit;
        align-items: center;
        justify-content: center;
    }
</style>

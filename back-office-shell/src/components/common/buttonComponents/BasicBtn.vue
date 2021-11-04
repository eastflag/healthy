<template>
    <button class="btn mid line_green" v-bind="$attrs" v-on="$listeners">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "BasicBtn.vue"
    }
</script>

<style scoped>

</style>

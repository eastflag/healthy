<template>
    <div class="button d-flex justify-center">
        <button class="btn mid bg_green" v-bind="$attrs" v-on="$listeners">
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        name: "GlobalButton",
    };
</script>

<template>
    <div class="button d-flex justify-center">
        <button class="btn mid bg_green" v-bind="$attrs" v-on="$listeners">
            <v-icon class="plusBtn">$plusBtn</v-icon><slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        name: "PlusBtn"
    }
</script>

<style lang="scss" scoped>
    #app{
        .button{
            margin-bottom: 15px;

            button{
                display: flex;
                align-items: center;
                justify-content: center;

                .plusBtn{
                    padding-right: 5px;
                }
            }
        }
    }
</style>

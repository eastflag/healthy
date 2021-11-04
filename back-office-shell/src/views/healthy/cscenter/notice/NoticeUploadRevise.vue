<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content d-flex align-center justify-end">
                <g-button>저장</g-button>
            </div>
        </template>
        <template>
            <board-input/>
        </template>
    </v-container>
</template>

<script>

    export default {
        name: "NoticeUploadRevise",
        components: {
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app{
        .containerLayout{
            .content{
                width: 99%;
                height: 60px;
                overflow: hidden;
            }
        }
    }
</style>

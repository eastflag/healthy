<template>
    <v-container fluid class="editorLayout">
        <TipTap :options="options"/>
    </v-container>
</template>

<script>
    // Import the editor
    import TipTap from './editorComponents/TipTap'

    export default {
        name: "ProductUploadEditorPage",
        components: {
            TipTap
        },
        data () {
            return {
                options: {
                    content: '<blockquote><p>Testing...</p></blockquote><ul><li><p><b>bold</b></p></li><li><p><i>italic</i></p></li><li><p><u>underline</u></p></li></ul>',
                    editable: true,
                    supportImage: true,
                    supportVideo: true
                }
            }
        }
    }
</script>


<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app{
        .editorLayout {
            max-width: 1680px;
            min-height: 300px;
            max-height: 300px;
            margin: 5px auto 0 auto;
            border: 1px solid $color-bg-border;
            border-radius: $border-radius-root;
            background-color: $color-white;
        }
    }

</style>

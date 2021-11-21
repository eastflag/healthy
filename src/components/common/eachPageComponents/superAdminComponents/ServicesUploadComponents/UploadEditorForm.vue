<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
        <v-main class="content">
            <TipTap :options="options"/>
        </v-main>
        <div class="button d-flex align-center justify-center">
            <action-btn>목록</action-btn>
        </div>
    </v-container>
</template>

<script>
    // Import the editor
    import TipTap from './editorComponents/TipTap'
    import ActionBtn from '../../../../../components/common/buttonComponents/ActionBtn'

    export default {
        name: "UploadEditorPage",
        components: {
            TipTap , ActionBtn
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
        .boardLayout {
            max-width: 1680px;
            min-height: 706px;
            height: auto;
            margin: 0 auto;
            border: 1px solid $color-bg-border;
            border-top: none;
            border-radius: 0 0 5px 5px;
            background-color: $color-white;

            .content{
                box-sizing: border-box;
                width: 1612px;
                min-height: 640px;
                margin: 0 auto;
                background-color: $color-white;
                border: 1px solid $color-bg-border;
            }

            .button{
                margin-top: 15px;
                margin-bottom: 15px;
            }
        }
    }
</style>

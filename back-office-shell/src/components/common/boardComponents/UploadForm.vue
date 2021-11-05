<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
        <div class="editor">
            <vue-editor v-model="content"></vue-editor>
        </div>
    </v-container>
</template>

<script>
    import { VueEditor } from "vue2-editor";

    export default {
        components: {
            VueEditor
        },

        data() {
            return {
                content: "<p>Some one text</p>"
            };
        }
    };
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app{
        .boardLayout{
            max-width: 1680px;
            min-height: 550px;
            height: auto;
            margin: 5px auto 0 auto;
            border: 1px solid $color-bg-border;
            border-radius:  $border-radius-root;
            background-color: $color-white;
            z-index: 2;
            .editor{
                .quillWrapper{
                    height: 500px;
                    .ql-toolbar{
                        &.ql-snow{
                            background-color: #042623;
                            .ql-video{
                                display: none !important;
                            }
                        }
                    }
                    #quill-container{
                        background: #D6843C;
                        height: auto;
                        overflow: scroll;
                        @include customScrollBar();

                        &.ql-container, &.ql-snow{
                            border: none;
                            .ql-editor{
                                background-color: #333333;
                            }
                        }
                    }
                }
            }
        }
    }
</style>


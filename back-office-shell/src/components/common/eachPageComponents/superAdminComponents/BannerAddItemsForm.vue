<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="pageFormLayout">
        <v-main>
            <div class="title d-flex justify-space-between">
                <div class="d-flex"><v-icon class="titleIcon">$titleIcon</v-icon><span>배너 이미지</span></div>
            </div>
            <template>
                <table>
                    <colgroup>
                        <col width="200px">
                        <col width="*">
                    </colgroup>
                    <tr style="border-top: 1px solid #E5E5E5">
                        <th>타이틀</th>
                        <td>
                            <div class="selectbx d-flex">
                                <input type="text" id="titleImg" name="info1" placeholder="INPUT BOX">
                            </div>
                        </td>
                    </tr>
                    <tr class="imagesFormLayout">
                        <th>이미지</th>
                        <td class="imagesForm">
                            <div class="col-md-5">
                                <form action="">
                                    <div class="">
                                        <template v-if="preview">
                                            <v-img :src="preview" class="imagesFormView"
                                                   max-height="250"
                                                   max-width="250"/>
                                            <div class="imageText">
                                                <p class="mb-0">이미지 파일 이름 : {{ image.name }}</p>
                                                <p class="mb-0">사이즈 : {{ (image.size/1024)/ 1000 }}MB</p>
                                                <!--<p class="mb-0">사이즈 : {{ image.size/1024 }}KB</p>-->
                                            </div>
                                        </template >
                                    </div>
                                    <input type="file"  accept=".jpg, .png" @change="previewImage" class="form-control-file" id="my-file">
                                </form>
                                <div class="infoText">
                                    <span>- 확장자 : jpg , png</span>
                                    <span> - 허용용량 : 20 MB</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>배너이미지 링크</th>
                        <td>
                            <div class="selectbx d-flex">
                                <input type="url" id="imagesURL" name="info1" placeholder="이동할 URL을 입력해 주세요.">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>노출순서</th>
                        <td>
                            <div class="selectbx d-flex">
                                <input type="text" id="cont" name="info1" placeholder="INPUT BOX">
                            </div>
                        </td>
                    </tr>
                </table>
            </template>
        </v-main>
        <v-main>
            <div class="title d-flex justify-space-between">
                <div class="d-flex"><v-icon class="titleIcon">$titleIcon</v-icon><span>배너 동영상</span></div>
            </div>
            <template>
                <table>
                    <colgroup>
                        <col width="200px">
                        <col width="*">
                    </colgroup>
                    <tr style="border-top: 1px solid #E5E5E5">
                        <th>타이틀</th>
                        <td>
                            <div class="selectbx d-flex">
                                <input type="text" id="titleImg" name="info1" placeholder="INPUT BOX">
                            </div>
                        </td>
                    </tr>
                    <tr class="videoFormLayout">
                        <th>동영상</th>
                        <td class="videoForm">
                            <form action="">
                                <input type="file" accept=".avi, .mpg, .mp4" @change="uploadImageFile" class="" id="">
                            </form>
                            <div class="infoText">
                                <span>- 확장자 : avi , mpg , mp4</span>
                                <span> - 허용용량 : 100 MB</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>배너영상 링크</th>
                        <td>
                            <div class="selectbx d-flex">
                                <input type="url" id="videoURL" name="info1" placeholder="이동할 URL을 입력해 주세요.">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>노출순서</th>
                        <td>
                            <div class="selectbx d-flex">
                                <input type="text" id="cont" name="info1" placeholder="INPUT BOX">
                            </div>
                        </td>
                    </tr>
                </table>
            </template>
        </v-main>
    </v-container>
</template>

<script>
    export default {
        name: "BannerAddItemsForm",
        components: { },
        data(){
            return{
                num:'5',
                preview: null,
                image: null,
                video: null,
            }
        },
        methods: {
            previewImage: function (event) {
                let input = event.target;
                if (input.files) {
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        this.preview = e.target.result;
                    }
                    this.image = input.files[0];
                    reader.readAsDataURL(input.files[0]);
                }
                console.log("imagesUpload",event.target.files);
            },
            uploadImageFile: function (event) {
                let input = event.target;
                if (input.files){
                    this.video = input.files[0];
                }
                console.log("videoUpload",event.target.files);
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app{
        .pageFormLayout{
            max-width: 1680px;
            min-height: 883px;
            height: auto;
            margin: 10px auto 0 auto;
            border: 1px solid $color-bg-border;
            border-radius:  $border-radius-root;
            background-color: $color-white;

            .title{
                width: 1612px;
                margin: 40px auto 0;
                font-size: $font-16;
                font-weight: bold;

                .titleIcon{
                    margin-right: 10px;
                }
            }


            table{
                width: 1612px;
                max-width: 1612px;
                margin: 20px 0 30px 30px;

                tr{
                    border-bottom: 1px solid $color-border;

                    &.imagesFormLayout{
                        position: relative;
                        height: 380px;
                        th{
                            height: inherit;
                        }
                        // 이미지 업로드 썸네일
                        .imagesForm{
                            position: absolute;
                            left: 200px;
                            top: 20px;

                            .imagesFormView{
                                display: block;
                                border: 1px solid $color-border;
                            }

                            .form-control-file{
                                display: inline-block;
                                margin-top: 2px;
                            }
                            .infoText{
                                font-size: $font-12;
                                color: red;
                                width: 300px;
                                span{
                                    display: inline-block;
                                    margin-top: 3px;
                                    font-size: $font-12;
                                    letter-spacing: -0.5px;

                                    &:last-child{
                                        margin-left: 10px;
                                    }
                                }
                            }

                            p{
                                width: 300px;
                                margin: 0;
                                padding: 0;
                            }
                        }
                    }
                    &.videoFormLayout{
                        position: relative;
                        th{
                            height: 90px;
                        }
                        // 동영상 업로드
                        .videoForm{

                            .infoText{
                                font-size: $font-12;
                                color: red;
                                width: 500px;
                                span{
                                    display: inline-block;
                                    margin-top: 3px;
                                    font-size: $font-12;
                                    letter-spacing: -0.5px;
                                    &:last-child{
                                        margin-left: 10px;
                                    }
                                }
                            }
                        }
                    }
                }

                th{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 52px;
                    font-size: $font-13;
                    background: $color-table-bg;
                }

                td{
                    padding:0 32px;
                    font-size: $font-12;
                    text-align:left;

                    &:first-child{
                        border-bottom: none;
                    }
                    .selectbx{
                        width: 100%;
                        select{
                            width: 260px;
                            margin-right: 25px;
                            background:url('~@/assets/images/icons/search.svg') no-repeat 226px center;

                            option {
                                height: 20px;
                                font-size: $font-20;
                            }
                        }
                        input{
                            width: 650px;
                            &:focus{
                                border: 1px solid $color-sub;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

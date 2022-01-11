<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog v-model="dialogs.showImgUploadModal" content-class="rounded-0 elevation-0" width="500px">
        <!--value="true"-->
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="and_popup_input">
                <div class="modalTitle"><span>이미지파일</span></div>
                <div class="inputLayoutContent" style="margin: 24px;">
                  <div class="inputWrapper">
                    <label class="customFileLabel" for="customFile">파일선택</label>
                    <div class="fileName"><span>{{file_name}}</span></div>
                    <input hidden id="customFile" type="file" @change="handleFileChange"/>
                  </div>

                </div>
                <div class="button d-flex justify-center">
                    <action-btn>확인</action-btn>
                    <basic-btn>닫기</basic-btn>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'
    export default {
        name: "ImgUploadModal",
        props: [
            "dialogs"
        ],
        methods: {
          handleFileChange(e) {
            this.file_name = e.target.files[0].name;
          },
        },
        components:{ BasicBtn, ActionBtn },
        data() {
          return {
            file_name: '선택된 파일 없음'
          }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/popUpModal/popUpCommon.scss';
    #app{
        .button{
            margin-top: 20px;
            button:first-child{
                margin-right: 15px;
            }
        }
        .inputWrapper{
          display: flex;
          align-items: center;
        }
        .customFileLabel{
            cursor: pointer;
            background-color: #07403A;
            color: #F9F9F9;
            font-size: 11px;
            padding: 7px 19px;
            padding-top: 10px;
            border-radius: 5px;
        }
        .fileName{
          margin-left: 15px;
          border: 1px solid $color-bg-border;
          display: inline-block;
          height: 34px;
          width: 304px;
          padding-left: 10px;
          padding-top: 5px;
        }
    }
</style>

<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog value="true" content-class="rounded-0 elevation-0" width="500px">
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="popup_bx" id="id01">
                <div class="tit d-flex justify-space-between">
                    <span>승인</span>
                    <button><v-icon>$closeBtn</v-icon></button>
                </div>
                <ul class="listForm">
                    <li><em>업체명</em>  <span>{{ object.company }}</span></li>
                    <li><em>id </em>  <span>{{ object.id }}</span></li>
                    <li><em>전화번호</em>  <span>{{ object.phoneNumber }}</span></li>
                </ul>
                <div class="inputLayoutContent">
                    <input type="text"placeholder="요청사유 표시">
                </div>
                <div class="button d-flex justify-center">
                    <action-btn>승인</action-btn>
                    <basic-btn>미승인</basic-btn>
                </div>
            </div>
        </v-card>
        <!--<success-modal/>-->
        <!--<not-approved-modal/>-->
    </v-dialog>
</template>


<script>
    import ActionBtn from '../../../../../components/common/buttonComponents/ActionBtn'
    import BasicBtn from '../../../../../components/common/buttonComponents/BasicBtn'

    export default {
        name: "ApprovalModal",
        components:{ ActionBtn , BasicBtn,
            successModal: () =>
                import( /* webpackChunkName: "webDataTable"*/ "./SuccessModal.vue" ),
            notApprovedModal: () =>
                import( /* webpackChunkName: "webDataTable"*/ "./NotApprovedModal.vue" )
        },
        data(){
            return{
                object:
                {
                    company : '종근당',
                    id : 'store1',
                    phoneNumber : '010-1111-1111'
                },
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
    }
</style>

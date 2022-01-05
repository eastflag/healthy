<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content">
                <div class="menuNav">
                    <span>상품관리</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>상품관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>상품등록/수정</span>
                </div>
                <div class="title">상품등록/수정</div>
            </div>
        </template>
        <template>
            <div class="button d-flex align-center justify-end">
                <basic-btn>취소</basic-btn>
                <action-btn>등록</action-btn>
            </div>
        </template>
        <template>
            <!--컨포넌트-->
            <product-upload-category/>
        </template>
        <template>
            <!--컨포넌트-->
            <product-upload-basic-info/>
        </template>
        <template>
            <!--컨포넌트-->
            <product-upload-sales-info/>
        </template>
        <template>
            <!--컨포넌트-->
            <product-upload-detail-and-additional-info/>
        </template>
        <template>
            <!--컨포넌트-->
            <product-upload-etc-info/>
        </template>
        <template>
            <!--컨포넌트 추가생성 ++ -->
            <!--기획서상 3장이 각각 페이지가아닌, UI상  height: auto 로 보여짐-->

          <!--버튼 컴포넌트 예시-->
          <!-- <action-btn class="upLoad">보기</action-btn>
          <delete-btn>삭제</delete-btn>
          <basic-btn class="upLoad">파일불러오기</basic-btn> -->
        </template>
    </v-container>
</template>

<script>
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    import DeleteBtn from "../../../../components/common/buttonComponents/DeleteBtn";
    import ProductUploadCategory from '@/components/common/eachPageComponents/productComponents/ProductUploadCategory'
    import ProductUploadBasicInfo from '@/components/common/eachPageComponents/productComponents/ProductUploadBasicInfo'
    import ProductUploadSalesInfo from '../../../../components/common/eachPageComponents/productComponents/ProductUploadSalesInfo.vue'
    import ProductUploadDetailAndAdditionalInfo from '../../../../components/common/eachPageComponents/productComponents/ProductUploadDetailAndAdditionalInfo.vue'
    import ProductUploadEtcInfo from '../../../../components/common/eachPageComponents/productComponents/ProductUploadEtcInfo.vue'

    export default {
        name: "ProductUpLoad",
        components:{ BasicBtn , ActionBtn, DeleteBtn, ProductUploadCategory, ProductUploadBasicInfo, ProductUploadSalesInfo, ProductUploadEtcInfo, ProductUploadDetailAndAdditionalInfo }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app{
        .button{
            button:first-child{
                margin-right: 15px;
            }
        }
    }
</style>

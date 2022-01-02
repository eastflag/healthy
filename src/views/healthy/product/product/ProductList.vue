<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content">
                <div class="menuNav">
                    <span>상품관리</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>상품관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>상품목록</span>
                </div>
                <div class="title">상품목록</div>
            </div>
        </template>
        <template>
            <!--컨포넌트-->
          <product-search-input/>
        </template>
        <template>
            <!--컨포넌트-->
          <product-search-list/>
        </template>
    </v-container>
</template>

<script>
    import ProductSearchInput from '@/components/common/eachPageComponents/productComponents/ProductSearchInput'
    import ProductSearchList from '@/components/common/eachPageComponents/productComponents/ProductSearchList'

    export default {
      name: "ProductList",
      components: { ProductSearchInput, ProductSearchList }
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

          .boardNav{
            width: 200px;
            height: 25px;
            display:flex;
            justify-content: space-between;
            align-items: center;
            font-size: $font-12;
            color: $color-span;

            span:last-child{
              color:  $color-basic;
            }
          }

          .title{
            display: inline-block;
            margin-top: 5px;
            font-size: $font-24 !important;
          }
        }
      }
    }
</style>

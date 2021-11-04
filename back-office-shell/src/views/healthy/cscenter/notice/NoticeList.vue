<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="content">
                <div class="boardNav">
                    <span>게시판관리</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>공지사항</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>공지목록</span>
                </div>
                <div class="title">공지목록</div>
            </div>
        </template>
        <template>
            <board-input/>
        </template>
        <template>
            <board-list/>
        </template>
    </v-container>
</template>

<script>
    import boardList from '@/components/common/boardComponents/BoardList'
    import boardInput from '@/components/common/boardComponents/BoardInput'

    export default {
        name: "NoticeList",
        components: { boardInput , boardList }
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

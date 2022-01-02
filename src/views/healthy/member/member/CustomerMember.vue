<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
      <template>
        <div class="content">
          <div class="menuNav">
            <span>회원관리</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>회원관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>고객회원</span>
          </div>
          <div class="title">고객회원</div>
        </div>
      </template>
        <template>
            <customer-member-input/>
        </template>
        <template>
            <member-list/>
        </template>

        <template>
          <div class="button d-flex justify-end mt-5">
            <basic-btn class="mr-2">취소</basic-btn>
            <action-btn>저장</action-btn>
          </div>
        </template>
        <template>
          <member-edit></member-edit>
        </template>
    </v-container>
</template>

<script>
    import CustomerMemberInput from '@/components/common/eachPageComponents/memberComponents/CustomerMemberInput'
    import MemberList from '@/components/common/eachPageComponents/memberComponents/MemberList'
    import ActionBtn from "../../../../components/common/buttonComponents/ActionBtn";
    import BasicBtn from "../../../../components/common/buttonComponents/BasicBtn";
    import MemberEdit from "../../../../components/common/eachPageComponents/memberComponents/MemberEdit";

    export default {
        name: "CustomerMember",
        components: { CustomerMemberInput, MemberList, ActionBtn, BasicBtn, MemberEdit },
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

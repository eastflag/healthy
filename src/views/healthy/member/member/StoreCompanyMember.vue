<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
      <template>
        <div class="content">
          <div class="menuNav">
            <span>회원관리</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>회원관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>입점업체 회원</span>
          </div>
          <div class="title">입점업체 회원</div>
        </div>
      </template>
        <template>
            <store-member-input></store-member-input>
        </template>
        <template>
            <store-member-list></store-member-list>
        </template>

        <template>
          <div class="button d-flex justify-end mt-5">
            <basic-btn class="mr-2">취소</basic-btn>
            <action-btn>저장</action-btn>
          </div>
        </template>
        <template>
            <store-member-edit></store-member-edit>
        </template>
    </v-container>
</template>

<script>
    import StoreMemberInput from "../../../../components/common/eachPageComponents/memberComponents/StoreMemberInput";
    import StoreMemberList from "../../../../components/common/eachPageComponents/memberComponents/StoreMemberList";
    import ActionBtn from "../../../../components/common/buttonComponents/ActionBtn";
    import BasicBtn from "../../../../components/common/buttonComponents/BasicBtn";
    import StoreMemberEdit from "../../../../components/common/eachPageComponents/memberComponents/StoreMemberEdit";

    export default {
        name: "StoreCompanyMember",
      components: {StoreMemberInput, StoreMemberList, ActionBtn, BasicBtn, StoreMemberEdit}
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

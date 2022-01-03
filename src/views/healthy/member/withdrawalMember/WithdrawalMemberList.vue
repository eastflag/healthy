<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
      <template>
          <div class="content">
            <div class="menuNav">
              <span>회원관리</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>회원관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>탈퇴회원리스트</span>
            </div>
            <div class="title">탈퇴회원리스트</div>
          </div>
        </template>
        <template>
            <withdrawal-member-input></withdrawal-member-input>
        </template>
        <template>
            <withdrawal-members-list></withdrawal-members-list>
        </template>
        <template>
            <withdrawal-member-edit userStatus="탈퇴"></withdrawal-member-edit>
        </template>
    </v-container>
</template>

<script>
    import WithdrawalMemberInput
      from "../../../../components/common/eachPageComponents/memberComponents/WithdrawalMemberInput";
    import WithdrawalMembersList
      from "../../../../components/common/eachPageComponents/memberComponents/WithdrawalMembersList";
    import WithdrawalMemberEdit
      from "../../../../components/common/eachPageComponents/memberComponents/WithdrawalMemberEdit";

    export default {
        name: "WithdrawalMemberList",
        components: {WithdrawalMemberInput, WithdrawalMembersList, WithdrawalMemberEdit}
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
      <template>
        <div class="content">
          <div class="menuNav">
            <span>회원관리</span><v-icon class="pagingArrow">$pagingArrow</v-icon><span>회원관리</span><v-icon class="actionPagingArrow">$actionPagingArrow</v-icon><span>전문인회원</span>
          </div>
          <div class="title">전문인회원</div>
        </div>
      </template>
        <template>
            <trchnical-member-input></trchnical-member-input>
        </template>
        <template>
            <trchnical-member-list></trchnical-member-list>
        </template>

        <template>
          <div class="button d-flex justify-end mt-5">
            <basic-btn class="mr-2">취소</basic-btn>
            <action-btn>저장</action-btn>
          </div>
        </template>
        <template>
          <trchnical-member-edit></trchnical-member-edit>
        </template>
    </v-container>
</template>

<script>
    import TrchnicalMemberInput
      from "../../../../components/common/eachPageComponents/memberComponents/TrchnicalMemberInput";
    import TrchnicalMemberList
      from "../../../../components/common/eachPageComponents/memberComponents/TrchnicalMemberList";
    import ActionBtn from "../../../../components/common/buttonComponents/ActionBtn";
    import BasicBtn from "../../../../components/common/buttonComponents/BasicBtn";
    import TrchnicalMemberEdit
      from "../../../../components/common/eachPageComponents/memberComponents/TrchnicalMemberEdit";

    export default {
        name: "TrchnicalMember",
        components: {TrchnicalMemberInput, TrchnicalMemberList, ActionBtn, BasicBtn, TrchnicalMemberEdit}
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
        <div class="title d-flex justify-space-between">
            <div class="d-flex align-center"><span>LIST</span> ('{{num}}'의 리스트가 조회되었습니다.)</div>
            <div class="selectbx">
                <select id="departure" name="departure">
                    <option value="num1" selected>가입일 최신 순</option>
                    <option value="num2">가입일 과거 순</option>
                </select>
                <basic-btn class="ml-3">엑셀다운</basic-btn>
            </div>
        </div>
        <table>
            <colgroup>
                <col width="5%">
                <col width="15%">
                <col width="15%">
                <col width="15%">
                <col width="20%">
                <col width="20%">
                <col width="10%">
            </colgroup>
            <thead>
            <tr>
                <th>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                    </div>
                </th>
                <th><span>상태</span></th>
                <th><span>ID</span></th>
                <th><span>업체명</span></th>
                <th><span>사업자번호</span></th>
                <th><span>가입일</span></th>
                <th><span>관리</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" name="list_check"><label for="list1"></label>
                    </div>
                </td>
                <td><span>정상</span></td>
                <td><span>store1</span></td>
                <td><span>종근당</span></td>
                <td><span>109-86-12345</span></td>
                <td><span>010-1234-5678</span></td>
                <td><span><action-btn>수정</action-btn></span></td>
            </tr>
            <tr>
              <td>
                <div class="spot">
                  <input class="checkbx" type="checkbox" name="list_check"><label for="list1"></label>
                </div>
              </td>
              <td><span>정상</span></td>
              <td><span>store1</span></td>
              <td><span>종근당</span></td>
              <td><span>109-86-12345</span></td>
              <td><span>010-1234-5678</span></td>
              <td><span><action-btn>수정</action-btn></span></td>
            </tr>
            </tbody>
        </table>
        <plus-btn>더보기</plus-btn>
    </v-container>
</template>

<script>
    import PlusBtn from '../../buttonComponents/PlusBtn'
    import BasicBtn from '../../buttonComponents/BasicBtn'
    import ActionBtn from '../../buttonComponents/ActionBtn'

    export default {
        name: "TrchnicalMemberList",
        components: { PlusBtn, BasicBtn, ActionBtn },
        data(){
            return{
                num:'2'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    // ListForm Common SCSS
    @import '~@/assets/scss/listFormCommon.scss';
    #app {
        .boardLayout {
            min-height: 675px;
        }
    }
</style>

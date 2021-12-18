<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><span>LIST</span> ('{{num}}'의 리스트가 조회되었습니다.)</div>
            <div class="selectbx">
                <select id="departure" name="departure">
                    <option value="num1" selected>가입일 최신 순</option>
                    <option value="num2">가입일 과거 순</option>
                </select>
                <basic-btn class="ml-3">엑셀다운</basic-btn>
                <basic-btn class="ml-3">선택 회원 포인트 지급</basic-btn>
            </div>
        </div>
        <table>
            <colgroup>
                <col width="2%">
                <col width="5%">
                <col width="5%">
                <col width="5%">
                <col width="5%">
                <col width="10%">
                <col width="5%">
                <col width="5%">
            </colgroup>
            <thead>
            <tr>
                <th>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                    </div>
                </th>
                <th><span>회원상태</span></th>
                <th><span>회원등급</span></th>
                <th><span>ID</span></th>
                <th><span>이름</span></th>
                <th><span>연락처</span></th>
                <th><span>가입일</span></th>
                <th><span>관리</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                    </div>
                </td>
                <td><span>정상</span></td>
                <td><span>1등급</span></td>
                <td><span>user1</span></td>
                <td><span>홍길동</span></td>
                <td><span>010-1234-5678</span></td>
                <td><span>2021-09-10</span></td>
                <td><span><action-btn>수정</action-btn></span></td>
            </tr>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list2" name="list_check"><label for="list2"></label>
                    </div>
                </td>
                <td><span>이용정지</span></td>
                <td><span>2등급</span></td>
                <td><span>user1</span></td>
                <td><span>홍길동</span></td>
                <td><span>010-1234-5678</span></td>
                <td><span>2021-09-08</span></td>
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
        name: "MemberList",
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

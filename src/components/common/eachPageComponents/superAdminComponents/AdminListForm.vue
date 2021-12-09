<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><span>LISTLISTLIST</span> ('{{num}}'의 리스트가 조회되었습니다.)</div>
            <div class="selectbx">
                <select id="departure" name="departure">
                    <option value="num1" selected>등록일자 최신 순</option>
                    <option value="num2">게시일 최신 순</option>
                    <option value="num3">게시일 과거 순</option>
                </select>
            </div>
        </div>
        <table>
            <colgroup>
                <col width="2%">
                <col width="5%">
                <col width="15%">
                <col width="5%">
                <col width="5%">
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
                <th><span>권한</span></th>
                <th><span>업체명</span></th>
                <th><span>아이디</span></th>
                <th><span>등록일자</span></th>
                <th><span>계정상태</span></th>
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
                <td><span>일반관리자</span></td>
                <td><span>삼청리네트웍스</span></td>
                <td><span>Admin1</span></td>
                <td><span>2021-04-01 hh:mm:ss</span></td>
                <td><span>Y</span></td>
                <td><span><action-btn>수정</action-btn></span></td>
            </tr>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list2" name="list_check"><label for="list2"></label>
                    </div>
                </td>
                <td><span>일반관리자</span></td>
                <td><span>삼청리네트웍스</span></td>
                <td><span>Admin1</span></td>
                <td><span>2021-04-01 hh:mm:ss</span></td>
                <td><span>Y</span></td>
                <td><span><action-btn>수정</action-btn></span></td>
            </tr>
            </tbody>
        </table>
        <plus-btn>더보기</plus-btn>
    </v-container>
</template>

<script>
    import PlusBtn from '../../buttonComponents/PlusBtn'
    import ActionBtn from '../../buttonComponents/ActionBtn'

    export default {
        name: "AdminListForm",
        components: { PlusBtn , ActionBtn },
        data(){
            return{
                num:'5'
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

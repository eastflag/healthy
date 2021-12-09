<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><span>LISTLISTLIST</span> ('{{num}}'의 리스트가 조회되었습니다.)</div>
            <div class="selectbx">
                <select id="departure" name="departure">
                    <option value="num1" selected>게시일자 최신 순</option>
                    <option value="num2">게시일자 최신 순</option>
                    <option value="num3">게시일자 최신 순</option>
                </select>
            </div>
        </div>
        <table>
            <colgroup>
                <col width="2%">
                <col width="5%">
                <col width="5%">
                <col width="5%">
                <col width="5%">
                <col width="5%">
            </colgroup>
            <thead>
            <tr>
                <th>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list3" name="list_check"><label for="list3"></label>
                    </div>
                </th>
                <th><span>팝업제목</span></th>
                <th><span>표시여부</span></th>
                <th><span>시작일자</span></th>
                <th><span>종료일자</span></th>
                <th><span>관리</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list3" name="list_check"><label for="list3"></label>
                    </div>
                </td>
                <td><span>신규가입</span></td>
                <td><span>표시</span></td>
                <td><span>2012-11-13 24:00:00</span></td>
                <td><span>2012-11-13 24:00:00</span></td>
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
        name: "popUpListForm",
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
</style>

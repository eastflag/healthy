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
        <table style="width: 100%; height: auto;">
            <colgroup>
                <col width="2%">
                <col width="5%">
                <col width="5%">
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
                <th><span>등록자</span></th>
                <th><span>등록일</span></th>
                <th><span>약관실행일자</span></th>
                <th><span>수정자</span></th>
                <th><span>수정일자</span></th>
                <th><span>버전</span></th>
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
                <td><span>Admin</span></td>
                <td><span>2012-11-13 24:00:00</span></td>
                <td><span>2012-11-13 24:00:00</span></td>
                <td><span>super</span></td>
                <td><span>2012-11-13 24:00:00</span></td>
                <td><span>V1.01</span></td>
                <td><span><action-btn>수정</action-btn></span></td>
            </tr>
            </tbody>
        </table>
        <div class="button d-flex justify-center">
            <action-btn>등록</action-btn>
        </div>
    </v-container>
</template>

<script>
    import ActionBtn from '../../buttonComponents/ActionBtn'

    export default {
        name: "ServicesListForm",
        components: { ActionBtn },
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
    #app{
        .boardLayout{
            min-height: 920px;
        }
    }
</style>

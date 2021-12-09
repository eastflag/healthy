<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><span>LISTLISTLIST</span> ('{{num}}'의 리스트가 조회되었습니다.)</div>
            <div class="selectbx">
                <select id="departure" name="departure">
                    <option value="num1" selected>50</option>
                    <option value="num2">50</option>
                    <option value="num3">50</option>
                </select>
            </div>
        </div>
        <table>
            <colgroup>
                <col width="5%">
                <col width="5%">
                <col width="5%">
                <col width="15%">
                <col width="10%">
                <col width="10%">
                <col width="5%">
                <col width="5%">
                <col width="5%">
                <col width="10%">
                <col width="5%">
            </colgroup>
            <thead>
            <tr>
                <th><span>번호</span></th>
                <th><span>배너분류</span></th>
                <th><span>배너위치</span></th>
                <th><span>배너명</span></th>
                <th><span>노출시작일</span></th>
                <th><span>노출종료일</span></th>
                <th><span>전시타입</span></th>
                <th><span>전시여부</span></th>
                <th><span>노출순서</span></th>
                <th><span>등록일자</span></th>
                <th><span>관리</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><span>1</span></td>
                <td><span>MAIN</span></td>
                <td><span>TOP</span></td>
                <td><span>PC_MAIN_TOP</span></td>
                <td><span>2012-11-13 24:00:00</span></td>
                <td><span>2012-11-13 24:00:00</span></td>
                <td><span>웹</span></td>
                <td><span>노출함</span></td>
                <td><span>1</span></td>
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
        name: "BannerItemsForm",
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
            min-height: 625px;
        }
    }
</style>

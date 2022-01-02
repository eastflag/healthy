<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><span>LIST</span> ('{{num}}'의 리스트가 조회되었습니다.)</div>
            <div class="selectbx">
                <select id="departure" name="departure">
                  <option value="num1">조회수 순</option>
                  <option value="num2">접수일 최근 순</option>
                  <option value="num3">접수일 과거 순</option>
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
                <col width="10%">
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
                <th><span>상태</span></th>
                <th><span>분류</span></th>
                <th><span>상담/주문번호</span></th>
                <th><span>제목</span></th>
                <th><span>등록ID</span></th>
                <th><span>담당자</span></th>
                <th><span>접수일자</span></th>
                <th><span>비고</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                    </div>
                </td>
                <td><span>답변완료</span></td>
                <td><span>상담문의</span></td>
                <td><span>C20211524</span></td>
                <td><span>제목</span></td>
                <td><span>scn3002</span></td>
                <td><span>SCN345</span></td>
                <td><span>2021-10-30</span></td>
                <td><span><basic-btn>답변완료</basic-btn></span></td>
            </tr>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                    </div>
                </td>
                <td><span>답변완료</span></td>
                <td><span>상담문의</span></td>
                <td><span>C20211524</span></td>
                <td><span>제목</span></td>
                <td><span>scn3002</span></td>
                <td><span>SCN345</span></td>
                <td><span>2021-10-30</span></td>
                <td><span><basic-btn>답변완료</basic-btn></span></td>
            </tr>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                    </div>
                </td>
                <td><span>답변완료</span></td>
                <td><span>상담문의</span></td>
                <td><span>C20211524</span></td>
                <td><span>제목</span></td>
                <td><span>scn3002</span></td>
                <td><span>SCN345</span></td>
                <td><span>2021-10-30</span></td>
                <td><span><basic-btn>답변완료</basic-btn></span></td>
            </tr>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                    </div>
                </td>
                <td><span>미답변</span></td>
                <td><span>상담문의</span></td>
                <td><span>C20211524</span></td>
                <td><span>제목</span></td>
                <td><span>scn3002</span></td>
                <td><span>SCN345</span></td>
                <td><span>2021-10-30</span></td>
                <td><span><action-btn>답변하기</action-btn></span></td>
            </tr>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                    </div>
                </td>
                <td><span>답변완료</span></td>
                <td><span>상담문의</span></td>
                <td><span>C20211524</span></td>
                <td><span>제목</span></td>
                <td><span>scn3002</span></td>
                <td><span>SCN345</span></td>
                <td><span>2021-10-30</span></td>
                <td><span><basic-btn>답변완료</basic-btn></span></td>
            </tr>
            </tbody>
        </table>
        <plus-btn>더보기</plus-btn>
    </v-container>
</template>

<script>
    import PlusBtn from '../../../buttonComponents/PlusBtn'
    import BasicBtn from '../../../buttonComponents/BasicBtn'
    import ActionBtn from '../../../buttonComponents/ActionBtn'

    export default {
        name: "CsFaqSearchList",
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

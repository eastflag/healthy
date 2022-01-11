<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><span>LIST</span> ('{{num}}'의 리스트가 조회되었습니다.)</div>
            <div class="selectbx">
                <select id="departure" name="departure">
                  <option value="num1">조회수 순</option>
                  <option value="num2">게시일 최근 순</option>
                  <option value="num2">게시일 과거순</option>
                  <option value="num3">추천수 순</option>
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
                <col width="15%">
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
                        <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                    </div>
                </th>
                <th><span>구분</span></th>
                <th><span>상태</span></th>
                <th><span>대분류</span></th>
                <th><span>소분류</span></th>
                <th><span>제목</span></th>
                <th><span>조회수</span></th>
                <th><span>추천수</span></th>
                <th><span>게시자</span></th>
                <th><span>게시일</span></th>
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
                <td><span>전문인</span></td>
                <td><span>게시</span></td>
                <td><span>회원/멤버십</span></td>
                <td><span>회원가입/탈퇴</span></td>
                <td><span>제목</span></td>
                <td><span>100,000</span></td>
                <td><span>10,000</span></td>
                <td><span>SCN345</span></td>
                <td><span>2021-10-03</span></td>
                <td><span><action-btn>TOP등록</action-btn></span></td>
            </tr>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                    </div>
                </td>
                <td><span>전문인</span></td>
                <td><span>게시</span></td>
                <td><span>주문/결제</span></td>
                <td><span>로그인</span></td>
                <td><span>제목</span></td>
                <td><span>1,000</span></td>
                <td><span>1,000</span></td>
                <td><span>SCN345</span></td>
                <td><span>2021-10-03</span></td>
                <td><span><basic-btn>TOP해제</basic-btn></span></td>
            </tr>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                    </div>
                </td>
                <td><span>고객</span></td>
                <td><span>미게시</span></td>
                <td><span>배송</span></td>
                <td><span>회원정보 변경</span></td>
                <td><span>제목</span></td>
                <td><span>100</span></td>
                <td><span>10</span></td>
                <td><span>S545</span></td>
                <td><span>2021-10-03</span></td>
                <td><span><action-btn>TOP등록</action-btn></span></td>
            </tr>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                    </div>
                </td>
                <td><span>전문인</span></td>
                <td><span>게시</span></td>
                <td><span>교환/반품/환불</span></td>
                <td><span>건강멤버십</span></td>
                <td><span>제목</span></td>
                <td><span>10</span></td>
                <td><span>10</span></td>
                <td><span>devops</span></td>
                <td><span>2021-10-03</span></td>
                <td><span><basic-btn>TOP해제</basic-btn></span></td>
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
        name: "FaqSearchList",
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
            min-height: 600px;
        }
    }
</style>

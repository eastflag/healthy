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
        <table>
            <colgroup>
                <col width="4%">
                <col width="16%">
                <col width="8%">
                <col width="10%">
                <col width="8%">
                <col width="10%">
                <col width="18%">
                <col width="6%">
                <col width="10%">
                <col width="7%">
            </colgroup>
            <thead>
            <tr>
                <th>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                    </div>
                </th>
                <th><span>주문번호</span></th>
                <th><span>상태</span></th>
                <th><span>주문일</span></th>
                <th><span>성명</span></th>
                <th><span>휴대폰번호</span></th>
                <th><span>제품명</span></th>
                <th><span>주문수량</span></th>
                <th><span>입금예정금액</span></th>
                <th><span>비고</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list2" name="list_check"><label for="list2"></label>
                    </div>
                </td>
                <td><span><a>OD202111001-123456</a></span></td>
                <td><span>주문접수</span></td>
                <td><span>2022-09-01</span></td>
                <td><span>홍길동</span></td>
                <td><span>010-1234-1234</span></td>
                <td class="letterLimit"><span>종근당활력 홍삼파워 10글자 이상테스트</span></td>
                <td><span>1</span></td>
                <td><span>70,000</span></td>
                <td><span><button class="btn sm bg_green" @click="dialogs.showAdminSettingModal = true">입금확인</button></span></td>
            </tr>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list3" name="list_check"><label for="list3"></label>
                    </div>
                </td>
                <td><span><a>OD202111001-123456</a></span></td>
                <td><span>주문접수</span></td>
                <td><span>2022-09-01</span></td>
                <td><span>홍길동</span></td>
                <td><span>010-1234-1234</span></td>
                <td class="letterLimit"><span>종근당활력 홍삼파워 10글자 이상테스트</span></td>
                <td><span>1</span></td>
                <td><span>70,000</span></td>
                <td><span><button class="btn sm bg_green" @click="dialogs.showAdminSettingModal = true">입금확인</button></span></td>
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
            min-height: 675px;
        }
    }
</style>

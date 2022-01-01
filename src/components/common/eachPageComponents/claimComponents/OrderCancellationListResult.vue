<template>
    <v-container fluid class="listBoardLayout">
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><span>LIST</span> ('{{num}}'의 리스트가 조회되었습니다.)</div>
            <div class="selectbx">
                <select id="departure" name="departure">
                    <option value="num1" selected>주문일 최신 순</option>
                    <option value="num2">주문일 과거 순</option>
                </select>
                <basic-btn class="ml-3">엑셀다운</basic-btn>
            </div>
        </div>
        <table>
            <colgroup>
                <col width="4%">
                <col width="15%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="10%">
                <col width="15%">
                <col width="4%">
                <col width="4%">
                <col width="8%">
                <col width="8%">
                <col width="6%">
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
                <th><span>스토어명</span></th>
                <th><span>제품명</span></th>
                <th><span>주문수량</span></th>
                <th><span>신청수량</span></th>
                <th><span>취소요청일</span></th>
                <th><span>취소완료일</span></th>
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
                <td><span>취소처리중</span></td>
                <td><span>2021-09-01</span></td>
                <td><span>홍길동</span></td>
                <td><span>종근당</span></td>
                <td class="letterLimit"><span>종근당활력 홍삼파워 10글자 이상테스트</span></td>
                <td><span>1</span></td>
                <td><span>1</span></td>
                <td><span>2021-10-05</span></td>
                <td><span>-</span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list3" name="list_check"><label for="list3"></label>
                    </div>
                </td>
                <td><span><a>OD202111001-123456</a></span></td>
                <td><span>취소처리중</span></td>
                <td><span>2021-09-01</span></td>
                <td><span>홍길동</span></td>
                <td><span>종근당</span></td>
                <td class="letterLimit"><span>종근당활력 홍삼파워 10글자 이상테스트</span></td>
                <td><span>1</span></td>
                <td><span>1</span></td>
                <td><span>2021-10-05</span></td>
                <td><span>2021-10-07</span></td>
                <td><span></span></td>
            </tr>
            </tbody>
        </table>
        <plus-btn>더보기</plus-btn>
    </v-container>
</template>

<script>
    import PlusBtn from '../../buttonComponents/PlusBtn'
    import BasicBtn from '../../buttonComponents/BasicBtn'

    export default {
        name: "OrderCancellationListResult",
        components: { PlusBtn, BasicBtn },
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
</style>


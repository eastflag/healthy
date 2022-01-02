<template>
    <v-container fluid class="listBoardLayout">
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><span>LIST</span> ('{{num}}'의 리스트가 조회되었습니다.)</div>
            <div class="selectbx">
                <select id="departure" name="departure">
                    <option value="num1" selected>처리일자 최신 순</option>
                    <option value="num2">처리일자 과거 순</option>
                </select>
                <basic-btn class="ml-3">엑셀다운</basic-btn>
            </div>
        </div>
        <table>
            <colgroup>
                <col width="4%">
                <col width="12%">
                <col width="11%">
                <col width="10%">
                <col width="10%">
                <col width="12%">
                <col width="11%">
                <col width="10%">
                <col width="11%">
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
                <th><span>회원명</span></th>
                <th><span>아이디</span></th>
                <th><span>회원등급</span></th>
                <th><span>적립내용</span></th>
                <th><span>포인트</span></th>
                <th><span>적립상태</span></th>
                <th><span>처리일자</span></th>
                <th><span>관리</span></th>
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
                <td><span>홍길동</span></td>
                <td><span>User</span></td>
                <td><span>1등급</span></td>
                <td><span>상품주문</span></td>
                <td><span>1,000</span></td>
                <td><span>적립</span></td>
                <td><span>2021-10-07</span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list3" name="list_check"><label for="list3"></label>
                    </div>
                </td>
                <td><span><a>OD202111001-123456</a></span></td>
                <td><span>홍길동</span></td>
                <td><span>User</span></td>
                <td><span>1등급</span></td>
                <td><span>상품주문</span></td>
                <td><span>1,000</span></td>
                <td><span>적립</span></td>
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
        name: "ConfirmPurchasingList",
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


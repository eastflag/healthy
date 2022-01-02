<template>
    <v-container fluid class="listBoardLayout">
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><span>LIST</span> ('{{num}}'의 리스트가 조회되었습니다.)</div>
            <div class="selectbx">
                <select id="departure" name="departure">
                    <option value="num1" selected>발급일 최신 순</option>
                    <option value="num2">발급일 과거 순</option>
                </select>
                <basic-btn class="ml-3">엑셀다운</basic-btn>
            </div>
        </div>
        <table>
            <colgroup>
                <col width="4%">
                <col width="8%">
                <col width="8%">
                <col width="12%">
                <col width="10%">
                <col width="8%">
                <col width="10%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="8%">
                <col width="5%">
            </colgroup>
            <thead>
                <tr>
                    <th>
                        <div class="spot">
                            <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                        </div>
                    </th>
                    <th><span>발급방식</span></th>
                    <th><span>사용방식</span></th>
                    <th><span>쿠폰명</span></th>
                    <th><span>등록일자</span></th>
                    <th><span>사용대상</span></th>
                    <th><span>쿠폰타입</span></th>
                    <th><span>혜택정보</span></th>
                    <th><span>카테고리제한</span></th>
                    <th><span>사용기간</span></th>
                    <th><span>발급 현황</span></th>
                    <th><span>사용</span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="spot">
                            <input class="checkbx" type="checkbox" id="list2" name="list_check"><label for="list2"></label>
                        </div>
                    </td>
                    <td><span>자동</span></td>
                    <td><span>PC</span></td>
                    <td><span>회원가입 쿠폰</span></td>
                    <td><span>2021-09-01</span></td>
                    <td><span>전문인</span></td>
                    <td><span>정액할인(원)</span></td>
                    <td><span>1,000</span></td>
                    <td><span>Y</span></td>
                    <td><span>90일</span></td>
                    <td><span>100,000</span></td>
                    <td><span>Y</span></td>
                </tr>
                <tr>
                    <td>
                        <div class="spot">
                            <input class="checkbx" type="checkbox" id="list3" name="list_check"><label for="list3"></label>
                        </div>
                    </td>
                    <td><span>다운</span></td>
                    <td><span>APP</span></td>
                    <td><span>모바일 웹 알림</span></td>
                    <td><span>2021-10-01<br />(2021-10-01)</span></td>
                    <td><span>고객</span></td>
                    <td><span>정률할인(5%)</span></td>
                    <td><span>5</span></td>
                    <td><span>Y</span></td>
                    <td><span>30일</span></td>
                    <td><span>10,000</span></td>
                    <td><span>Y</span></td>
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
        name: "CouponListResult",
        components: { PlusBtn, BasicBtn},
        data(){
            return{
                num:'2',
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    // ListForm Common SCSS
    @import '~@/assets/scss/listFormCommon.scss';
</style>


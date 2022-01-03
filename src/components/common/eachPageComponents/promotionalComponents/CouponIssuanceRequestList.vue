<template>
    <v-container fluid class="listBoardLayout">
        <div class="title d-flex justify-space-between">
            <div class="d-flex"></div>
            <div class="selectbx">
                <basic-btn class="ml-3" @click="dialogs.showHoldingModal = true">선택보류</basic-btn>
                <basic-btn class="ml-3" @click="dialogs.showAllListAprvModal = true">일괄승인</basic-btn>
                <basic-btn class="ml-3" @click="dialogs.showSelectedListAprvModal = true">선택승인</basic-btn>
            </div>
        </div>
        <table>
            <colgroup>
                <col width="4%">
                <col width="7%">
                <col width="7%">
                <col width="6%">
                <col width="6%">
                <col width="7%">
                <col width="8%">
                <col width="7%">
                <col width="7%">
                <col width="7%">
                <col width="7%">
                <col width="7%">
                <col width="6%">
                <col width="7%">
                <col width="4%">
            </colgroup>
            <thead>
                <tr>
                    <th>
                        <div class="spot">
                            <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                        </div>
                    </th>
                    <th><span>요청일</span></th>
                    <th><span>요청ID</span></th>
                    <th><span>요청횟수</span></th>
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
                    <td><span>2021-10-01</span></td>
                    <td><span>pro01</span></td>
                    <td style="text-decoration: underline; color: blue"><span>3회</span></td>
                    <td><span>자동</span></td>
                    <td><span>PC</span></td>
                    <td><span>회원가입쿠폰</span></td>
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
                    <td><span>2021-10-01</span></td>
                    <td><span>pro01</span></td>
                    <td style="text-decoration: underline; color: blue"><span>3회</span></td>
                    <td><span>자동</span></td>
                    <td><span>PC</span></td>
                    <td><span>회원가입쿠폰</span></td>
                    <td><span>2021-09-01</span></td>
                    <td><span>전문인</span></td>
                    <td><span>정액할인(원)</span></td>
                    <td><span>1,000</span></td>
                    <td><span>Y</span></td>
                    <td><span>90일</span></td>
                    <td><span>100,000</span></td>
                    <td><span>Y</span></td>
                </tr>
            </tbody>
        </table>
        <plus-btn>더보기</plus-btn>
        <holding-modal :dialogs="dialogs" />
        <selected-list-aprv-modal :dialogs="dialogs" />
        <all-list-aprv-modal :dialogs="dialogs" />
    </v-container>
</template>

<script>
    import PlusBtn from '../../buttonComponents/PlusBtn'
    import BasicBtn from '../../buttonComponents/BasicBtn'
    import HoldingModal from '@/views/healthy/promotionalMarketing/coupon/modal/HoldingModal'
    import SelectedListAprvModal from '@/views/healthy/promotionalMarketing/coupon/modal/SelectedListAprvModal'
    import AllListAprvModal from '@/views/healthy/promotionalMarketing/coupon/modal/AllListAprvModal'

    export default {
        name: "CouponIssuanceRequestList",
        components: { PlusBtn, BasicBtn, HoldingModal, SelectedListAprvModal, AllListAprvModal },
        data(){
            return{
                dialogs: {
                    showHoldingModal: false,
                    showSelectedListAprvModal: false,
                    showAllListAprvModal: false,
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    // ListForm Common SCSS
    @import '~@/assets/scss/listFormCommon.scss';
</style>

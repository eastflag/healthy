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
                <basic-btn class="ml-3" @click="dialogs.showBundleProcessingModal = true">일괄수정</basic-btn>
            </div>
        </div>
        <table>
            <colgroup>
                <col width="4%">
                <col width="17%">
                <col width="11%">
                <col width="11%">
                <col width="11%">
                <col width="6%">
                <col width="18%">
                <col width="11%">
                <col width="8%">
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
                <th><span>스토어명</span></th>
                <th><span>제품명</span></th>
                <th><span>주문수량</span></th>
                <th><span>배송정보</span></th>
                <th><span>배송완료일</span></th>
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
                <td><span>배송중</span></td>
                <td><span>종근당</span></td>
                <td class="letterLimit"><span>종근당활력 홍삼파워 10글자 이상테스트</span></td>
                <td><span>1</span></td>
                <td><span>택배사:CJ대한동운<br/>운송장번호:123-4567-8234<br/>발송일자:2021-10-01</span></td>
                <td><span>2021-10-05</span></td>
                <td><span></span></td>
            </tr>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list3" name="list_check"><label for="list3"></label>
                    </div>
                </td>
                <td><span><a>OD202111001-123456</a></span></td>
                <td><span>배송중</span></td>
                <td><span>종근당</span></td>
                <td class="letterLimit"><span>종근당활력 홍삼파워 10글자 이상테스트</span></td>
                <td><span>1</span></td>
                <td><span>택배사:CJ대한동운<br/>운송장번호:123-4567-8234<br/>발송일자:2021-10-01</span></td>
                <td><span>2021-10-05</span></td>
                <td><span></span></td>
            </tr>
            </tbody>
        </table>
        <plus-btn>더보기</plus-btn>
        <bundle-processing-modal :dialogs="dialogs" />
    </v-container>
</template>

<script>
    import PlusBtn from '../../buttonComponents/PlusBtn'
    import BasicBtn from '../../buttonComponents/BasicBtn'
    import BundleProcessingModal from '@/views/healthy/order/order/Modal/BundleProcessingModal'

    export default {
        name: "DeliveryCompleteList",
        components: { PlusBtn, BasicBtn, BundleProcessingModal },
        data(){
            return{
                num:'2',
                dialogs: {
                    showBundleProcessingModal: false,
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


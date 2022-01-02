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
        <admin-setting-modal :dialogs="dialogs" />
        <bundle-processing-modal :dialogs="dialogs" />
    </v-container>
</template>

<script>
    import PlusBtn from '../../buttonComponents/PlusBtn'
    import BasicBtn from '../../buttonComponents/BasicBtn'
    import AdminSettingModal from '@/views/healthy/order/order/Modal/AdminSettingModal'
    import BundleProcessingModal from '@/views/healthy/order/order/Modal/BundleProcessingModal'

    export default {
        name: "OrderList",
        components: { PlusBtn, BasicBtn, AdminSettingModal, BundleProcessingModal },
        data(){
            return{
                num:'3',
                dialogs: {
                    showAdminSettingModal: false,
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


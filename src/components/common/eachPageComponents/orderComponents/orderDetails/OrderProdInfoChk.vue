<template>
    <v-main>
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><v-icon class="titleIcon">$titleIcon</v-icon><span>주문상품정보</span></div>
        </div>
        <table>
            <colgroup>
                <col width="4%">
                <col width="10%">
                <col width="15%">
                <col width="16%">
                <col width="10%">
                <col width="9%">
                <col width="9%">
                <col width="9%">
                <col width="5%">
                <col width="10%">
            </colgroup>
            <thead>
                <tr style="border-top: 1px solid #E5E5E5">
                    <th></th>
                    <th>스토어명</th>
                    <th>제품이미지</th>
                    <th>제품명</th>
                    <th>옵션명</th>
                    <th>상품금액</th>
                    <th>할인금액</th>
                    <th>주문금액</th>
                    <th>주문수량</th>
                    <th>주문상태</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="spot">
                            <input class="checkbx" type="checkbox" id="list11" name="list_check"><label for="list11"></label>
                        </div>
                    </td>
                    <td>종근당</td>
                    <td valign="middle"><img src="" width="150" height="150" alt="이미지" align="center"/></td>
                    <td>종근당 슈퍼활력업 파워</td>
                    <td>-</td>
                    <td>100,000원</td>
                    <td>33,000원</td>
                    <td>70,000원</td>
                    <td>1</td>
                    <td>
                        <div>
                           <span style="color: red">취소주문</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="spot">
                            <input class="checkbx" type="checkbox" id="list12" name="list_check"><label for="list12"></label>
                        </div>
                    </td>
                    <td>종근당</td>
                    <td valign="middle"><img src="" width="150" height="150" alt="이미지" align="center"/></td>
                    <td>종근당 슈퍼활력업 파워</td>
                    <td>-</td>
                    <td>100,000원</td>
                    <td>33,000원</td>
                    <td>70,000원</td>
                    <td>1</td>
                    <td>
                        <div>
                           결제완료
                        </div>
                        <div>
                            <basic-btn @click="dialogs.showOrderCancelConfirmModal = true">주문취소</basic-btn>
                        </div>
                        <div>
                            <basic-btn @click="dialogs.showWaitingDeliveryModal = true">배송대기</basic-btn>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <order-cancel-confirm-modal :dialogs="dialogs" />
        <waiting-delivery-modal :dialogs="dialogs" />
    </v-main>
</template>

<script>
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'
    import OrderCancelConfirmModal from '@/views/healthy/order/order/Modal/OrderCancelConfirmModal'
    import WaitingDeliveryModal from '@/views/healthy/order/order/Modal/WaitingDeliveryModal'

    export default {
        name: "OrderProdInfoChk",
        components:{ BasicBtn, OrderCancelConfirmModal, WaitingDeliveryModal },
        data() {
            return {
                dialogs: {
                    showOrderCancelConfirmModal: false,
                    showWaitingDeliveryModal: false
                },
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app {
        .title{
            width: 1612px;
            margin: 40px auto 0;
            font-size: $font-16;
            font-weight: bold;

            .titleIcon{
                margin-right: 10px;
            }
        }
        table {
            width: 1612px;
            max-width: 1612px;
            margin-top: 20px;

            thead {
                tr {
                    th {
                        text-align: center;
                        vertical-align: middle;
                        height: 52px;
                        font-size: $font-15;
                        background: $color-table-bg;
                    }
                }
            }

            tbody {
                tr {
                    td {
                        position: relative;
                        text-align: center;
                        vertical-align: middle;
                        height: 210px;
                        font-size: $font-12;
                        border: 1px solid $color-border;
                        padding: 5px;
                        line-height: 38px;

                        &:first-child {
                            border-left: none;
                        }

                        &:last-child {
                            border-right: none;
                        }

                        img {
                            text-align: center;
                            vertical-align: middle;
                        }

                        .spot{
                            position: absolute;
                            left:30%;
                            bottom: 45%;
                        }
                    }
                }
            }
        }

        .button{
            button:first-child{
                margin-right: 15px;
            }
        }
    }
</style>



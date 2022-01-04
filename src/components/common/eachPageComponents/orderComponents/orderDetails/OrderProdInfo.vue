<template>
    <v-main>
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><v-icon class="titleIcon">$titleIcon</v-icon><span>주문상품정보</span></div>
        </div>
        <table>
            <colgroup>
                <col width="10%">
                <col width="15%">
                <col width="17%">
                <col width="10%">
                <col width="10%">
                <col width="10%">
                <col width="10%">
                <col width="6%">
                <col width="10%">
            </colgroup>
            <thead>
                <tr style="border-top: 1px solid #E5E5E5">
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
                    <td>종근당</td>
                    <td valign="middle"><img src="./hangleImg.jpg" width="150" height="150" alt="이미지" align="center"/></td>
                    <td>종근당 슈퍼활력업 파워</td>
                    <td>-</td>
                    <td>100,000원</td>
                    <td>33,000원</td>
                    <td>70,000원</td>
                    <td>1</td>
                    <td v-if="orderState === 'orderReception'">
                        <div>
                           {{ getState }}
                        </div>
                        <div>
                            <basic-btn @click="dialogs.showOrderCancleConfirmModal = true">주문취소</basic-btn>
                        </div>
                        <div>
                            <basic-btn>입금확인</basic-btn>
                        </div>
                    </td>
                    <td v-else-if="orderState === 'asd'">
                        <div>
                            {{ getState }}
                        </div>
                        <div>
                            <basic-btn @click="dialogs.showOrderCancelCompleteModal = true">취소완료</basic-btn>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <order-cancel-complete-modal :dialogs="dialogs" />
        <order-cancel-confirm-modal :dialogs="dialogs" />
    </v-main>
</template>

<script>
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'
    import OrderCancelCompleteModal from '@/views/healthy/order/claim/Modal/OrderCancelCompleteModal'
    import OrderCancelConfirmModal from '@/views/healthy/order/order/Modal/OrderCancelConfirmModal'

    export default {
        name: "OrderProdInfo",
        components:{ BasicBtn, OrderCancelCompleteModal, OrderCancelConfirmModal },
        props: {
            orderState: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                dialogs: {
                    showOrderCancelCompleteModal: false,
                    showOrderCancleConfirmModal: false
                },
            }
        },
        computed: {
            getState() {
                if ( this.orderState === 'orderReception') {
                    return '주문접수'
                }
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
                        text-align: center;
                        vertical-align: middle;
                        min-height: 170px;
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



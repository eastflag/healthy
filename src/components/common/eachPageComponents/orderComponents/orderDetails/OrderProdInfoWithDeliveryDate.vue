<template>
    <v-main>
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><v-icon class="titleIcon">$titleIcon</v-icon><span>주문상품정보</span></div>
        </div>
        <table>
            <colgroup>
                <col width="9%">
                <col width="14%">
                <col width="13%">
                <col width="7%">
                <col width="7%">
                <col width="7%">
                <col width="7%">
                <col width="4%">
                <col width="13%">
                <col width="7%">
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
                    <th>배송정보</th>
                    <th>배송완료</th>
                    <th>주문상태</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>종근당</td>
                    <td valign="middle"><img src="" width="150" height="150" alt="이미지" align="center"/></td>
                    <td>종근당 슈퍼활력업 파워</td>
                    <td>-</td>
                    <td>100,000원</td>
                    <td>33,000원</td>
                    <td>70,000원</td>
                    <td>1</td>
                    <td style="line-height: normal">
                        택배사 : CJ대한통운
                        <br />
                        운송장번호 : 1232435435
                        <br />
                        발송일자 : 2021-10-01
                    </td>
                    <td>
                        2021-10-05
                    </td>
                    <td v-if="orderState === 'deliveringComplete'">
                        <div>
                           {{ getState }}
                        </div>
                        <div>
                            <basic-btn>배송조회</basic-btn>
                        </div>
                        <div>
                            <basic-btn>구매확정</basic-btn>
                        </div>
                        <div>
                            <basic-btn @click="dialogs.showReturnReqModal = true">반품신청</basic-btn>
                        </div>
                        <div>
                            <basic-btn @click="dialogs.showExchangeReqModal = true">교환신청</basic-btn>
                        </div>
                    </td>
                    <td v-else-if="orderState === 'confirmPurchasing'">
                        <div>
                            {{ getState }}
                        </div>
                        <div>
                            <basic-btn>상품평 보기</basic-btn>
                        </div>
                        <div>
                            <basic-btn>포인트 지급</basic-btn>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <exchange-req-modal :dialogs="dialogs" />
        <return-req-modal :dialogs="dialogs" />
        <member-issue-point-modal :dialogs="dialogs" />
    </v-main>
</template>

<script>
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'
    import ExchangeReqModal from '@/views/healthy/order/order/Modal/ExchangeReqModal'
    import ReturnReqModal from '@/views/healthy/order/order/Modal/ReturnReqModal'
    import MemberIssuePointModal from '@/views/healthy/member/member/Modal/MemberIssuePointModal'

    export default {
        name: "OrderProdInfoWithDelivery",
        components:{ BasicBtn, ExchangeReqModal, ReturnReqModal, MemberIssuePointModal },
        props: {
            orderState: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                dialogs: {
                    showExchangeReqModal: false,
                    showMemberIssuePointModal: false,
                    showReturnReqModal: false,
                },
            }
        },
        computed: {
            getState() {
                switch (this.orderState) {
                    case 'deliveringComplete':
                        return '배송완료'
                    case 'confirmPurchasing':
                        return '구매확정'
                    default:
                        return ''
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



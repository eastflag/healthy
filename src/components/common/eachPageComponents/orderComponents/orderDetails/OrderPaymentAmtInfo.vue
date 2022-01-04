<template>
    <v-main>
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><v-icon class="titleIcon">$titleIcon</v-icon><span>주문/결제 금액 정보</span></div>
        </div>
        <table v-if="showPaymentTable">
            <colgroup>
                <col width="15%">
                <col width="15%">
                <col width="15%">
                <col width="15%">
                <col width="15%">
                <col width="22%">
            </colgroup>
            <thead>
                <tr style="border-top: 1px solid #E5E5E5">
                    <th colspan="6">주문금액</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="text-align: left; font-weight: 800">상품금액</td>
                    <td style="font-weight: 800">100,000원</td>
                    <td style="text-align: left; font-weight: 800">포인트혜택</td>
                    <td >총 700원</td>
                    <td style="text-align: left; font-weight: 800">결제수단</td>
                    <td style="text-align: left; font-weight: 800; border-bottom: none; padding-left: 35px">
                        무통장입금
                    </td>
                </tr>
                <tr>
                    <td style="text-align: left; font-weight: 800">배송비</td>
                    <td style="font-weight: 800">3,000원</td>
                    <td>기본적립</td>
                    <td>700원</td>
                    <td rowspan="6"></td>
                    <td rowspan="6" class="bankbook">
                        <br/>입금내역
                        <br/><span>2021-09-02, 입금확인</span>
                        <br/>승인번호
                        <br/><span>1234</span>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: left; font-weight: 800">할인금액</td>
                    <td style="font-weight: 800">-33,000원</td>
                    <td>멤버십 추가적립</td>
                    <td>0원</td>
                </tr>
                <tr>
                    <td>스토어할인</td>
                    <td>-30,000원</td>
                    <td>스토어 추가적립</td>
                    <td>0원</td>
                </tr>
                <tr>
                    <td>쿠폰할인</td>
                    <td>0원</td>
                    <td rowspan="3" colspan="2"></td>
                </tr>
                <tr>
                    <td>배송비할인</td>
                    <td>-3,000원</td>
                </tr>
                <tr>
                    <td>포인트할인</td>
                    <td>0원</td>
                </tr>
            </tbody>
        </table>
        <table v-else>
            <colgroup>
                <col width="15%">
                <col width="15%">
                <col width="15%">
                <col width="15%">
                <col width="15%">
                <col width="22%">
            </colgroup>
            <thead>
                <tr style="border-top: 1px solid #E5E5E5; border-bottom: 1px solid #E5E5E5">
                    <th colspan="6">주문금액</th>
                </tr>
            </thead>
        </table>
    </v-main>
</template>

<script>
  

    export default {
        name: "OrderPaymentAmtInfo",
        props: {
            showPaymentTable: {
                type: Boolean,
                required: false,
                default: true
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
                        text-align: left;
                        vertical-align: middle;
                        height: 52px;
                        padding-left: 16px;
                        font-size: $font-15;
                        background: $color-table-bg;
                    }
                }
            }

            tbody {
                tr {
                    th {
                        text-align: right;
                        vertical-align: middle;
                        height: 52px;
                        padding: 0 16px;
                        font-size: $font-13;
                        background: $color-table-bg;
                        border: 1px solid $color-border;
                    }

                    td {
                        text-align: right;
                        vertical-align: middle;
                        height: 52px;
                        padding: 0 16px;
                        font-size: $font-13;
                        border: 1px solid $color-border;

                        &:first-child {
                            border-left: none;
                        }

                        &:last-child {
                            border-right: none;
                        }
                    }
                }
            }
        }

        .bankbook {
            text-align: left;
            padding: 0 35px;
            vertical-align: top;
            font-size: $font-13;
            font-weight: 800;
            line-height: 25px;
            border-top: none;

            span {
                font-weight: normal;
            }
        }

        .button{
            button:first-child{
                margin-right: 15px;
            }
        }
    }
</style>



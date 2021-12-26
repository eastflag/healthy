<template>
        <table>
            <colgroup>
                <col width="10%">
                <col width="18.5%">
                <col width="10%">
                <col width="18.5%">
                <col width="10%">
                <col width="10%">
            </colgroup>
            <thead>
                <tr>
                    <th colspan="6">주문금액</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>상품금액</td>
                    <td>100,000원</td>
                    <td>포인트혜택</td>
                    <td>총 700원</td>
                    <td>결제수단</td>
                    <td>무통장입금</td>
                </tr>
                <tr>
                    <td>배송비</td>
                    <td>3,000원</td>
                    <td>기본적립</td>
                    <td>700원</td>
                    <td rowspan="6"></td>
                    <td rowspan="6">입금내역<br/>2021-09-02, 입금확인<br/>승인번호<br/>1234</td>
                </tr>
                <tr>
                    <td>할인금액</td>
                    <td>-33,000원</td>
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
                    <td rowspan="3"></td>
                    <td rowspan="3"></td>
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
</template>

<script>
  

    export default {
        name: "OrderUserInfo",
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app {
        table {
            width: 1612px;
            max-width: 1612px;
            margin-top: 20px;

            thead {
                tr {
                    border-bottom: 1px solid $color-border;
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
                    border-bottom: 1px solid $color-border;
                    th {
                        text-align: left;
                        vertical-align: middle;
                        height: 52px;
                        padding-left: 16px;
                        font-size: $font-13;
                        background: $color-table-bg;
                    }

                    td {
                        text-align: left;
                        vertical-align: middle;
                        height: 52px;
                        padding-left: 16px;
                        font-size: $font-12;

                        &:first-child {
                            border-bottom: none;
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



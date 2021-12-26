<template>
        <table>
            <colgroup>
                <col width="20%">
                <col width="28.5%">
                <col width="20%">
                <col width="28.5%">
            </colgroup>
            <tbody>
                <tr>
                    <th>신청일자</th>
                    <td>2021-09-01</td>
                    <th>완료(환불)처리일자</th>
                    <td>2021-09-01</td>
                </tr>
                <tr>
                    <th>신청자</th>
                    <td>홍길동</td>
                    <th>완료(환불)처리자</th>
                    <td>-</td>
                </tr>
                <tr>
                    <th>스토어할인</th>
                    <td>-30,000원</td>
                    <th>취소상품금액</th>
                    <td>100,000원</td>
                </tr>
                <tr>
                    <th>쿠폰할인</th>
                    <td>0원</td>
                    <th>환불배송비</th>
                    <td>3,000원</td>
                </tr>
                <tr>
                    <th>배송비할인</th>
                    <td>-3,000원</td>
                    <th>환불 결제금액</th>
                    <td>70,000원</td>
                </tr>
                <tr>
                    <th>포인트할인</th>
                    <td>0원</td>
                    <th rowspan="3"></th>
                    <td rowspan="3"></td>
                </tr>
                <tr>
                    <th>환급 적립금</th>
                    <td>700원</td>
                </tr>
                <tr>
                    <th>사유</th>
                    <td>[단순 변심]</td>
                </tr>
                <tr>
                    <th>환불계좌</th>
                    <td colspan="3">카드결제</td>
                </tr>
                <tr>
                    <th>관리자메모</th>
                    <td colspan="3">카드결제</td>
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



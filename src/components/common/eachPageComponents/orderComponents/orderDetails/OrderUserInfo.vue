<template>
        <table>
            <colgroup>
                <col width="15%">
                <col width="33.5%">
                <col width="15%">
                <col width="33.5%">
            </colgroup>
            <thead>
                <tr>
                    <th colspan="4">OD202111001-123456 주문 회원정보</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>ID</th>
                    <td>User1</td>
                    <th>이름</th>
                    <td>홍길동</td>
                </tr>
                <tr>
                    <th>휴대폰번호</th>
                    <td>010-1234-134</td>
                    <th>결제구분</th>
                    <td>무통장입금<br/>(신한은행 110-333-3333333 / 입금자 : 홍길동)</td>
                </tr>
                <tr>
                    <th>주문일자</th>
                    <td>2021-09-21 12:05:21</td>
                    <th>결제일자</th>
                    <td>-</td>
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
                    border: 1px solid $color-border;
                    border-left: none;
                    border-right: none;
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
                        text-align: center;
                        vertical-align: middle;
                        height: 52px;
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
    }
</style>



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
                    <th>발급사유</th>
                    <td>개인소득공제</td>
                    <th>신분확인 ID</th>
                    <td>010-1234-1234</td>
                </tr>
                <tr>
                    <th>신청일자</th>
                    <td>2021-09-01 13:11:25</td>
                    <th>발급상태</th>
                    <td>발급신청 발급하기</td>
                </tr>
                <tr>
                    <th>발급일자</th>
                    <td colspan="3"></td>
                </tr>
            </tbody>
        </table>
</template>

<script>
    export default {
        name: "CashReceipt",
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



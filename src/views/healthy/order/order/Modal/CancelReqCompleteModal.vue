<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog v-model="showCancelReqCompleteModal" content-class="rounded-0 elevation-0" width="500px">
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="and_popup_input">
                <div class="modalTitle"><span>주문취소 완료</span></div>
                <div class="modalBody">
                    <div class="exchangeMsg">
                        주문취소 완료되었습니다.
                    </div>
                    <div class="table1">
                        <table>
                            <colgroup>
                                <col width="67%">
                                <col width="15%">
                                <col width="15%">
                            </colgroup>
                            <thead>
                                <tr style="border-top: 1px solid #E5E5E5">
                                    <th>상품명</th>
                                    <th>주문수량</th>
                                    <th>교환수량</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>종근당 슈퍼활력업 파워</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="table2">
                        <table>
                            <colgroup>
                                <col width="30%">
                                <col width="*%">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th>총 환불예정금액</th>
                                    <td>70,000원</td>
                                </tr>
                                <tr>
                                    <th>반환적립금</th>
                                    <td>700원</td>
                                </tr>
                                <tr>
                                    <th>환불금액</th>
                                    <td>70,000원</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="button d-flex justify-center">
                    <action-btn class="upBtn">확인</action-btn>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'

    export default {
        name: "CancelReqCompleteModal",
        props: [
            "showCancelReqCompleteModal"
        ],
        components:{ ActionBtn }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/popUpModal/popUpCommon.scss';
    #app{
        .and_popup_input {
            min-height: 220px;
            height: 100%;
        }
        .modalBody {
            padding: 0 24px;

            .exchangeMsg {
                height: 38px;
                margin: 10px 0;
                font-size: $font-14;
                background: $color-table-bg;
                line-height: 38px;
                text-align: center;
            }

            .table1 {
                table {
                    width: 100%;
                    margin: 20px 0;

                    thead {
                        tr {
                            height: 38px;
                            th {
                                text-align: center;
                                vertical-align: middle;
                                font-size: $font-12;
                                background: $color-table-bg;
                                border: 1px solid $color-border;
                                border-left: none;
                                &:last-child {
                                    border-right: none;
                                }
                            }
                        }
                    }

                    tbody {
                        tr {
                            height: 38px;
                            td {
                                font-size: $font-12;
                                text-align: center;
                                vertical-align: middle;
                                border: 1px solid $color-border;
                                border-left: none;
                                &:last-child {
                                    border-right: none;
                                }
                            }
                        }
                    }
                }
            }

            .table2 {
                table {
                    width: 100%;
                    margin: 0 0 20px 0;

                    tbody {
                        tr {
                            height: 38px;
                            th {
                                text-align: center;
                                vertical-align: middle;
                                font-size: $font-12;
                                background: $color-table-bg;
                                border: 1px solid $color-border;
                                border-left: none;
                            }
                            td {
                                font-size: $font-12;
                                text-align: right;
                                vertical-align: middle;
                                padding-right: 16px;
                                border: 1px solid $color-border;
                                border-right: none;
                            }
                        }
                    }
                }
            }
        }
        .button{
            margin: 20px auto;
        }
    }
</style>

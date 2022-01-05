<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog v-model="dialogs.showReturnDirectionModal" content-class="rounded-0 elevation-0" width="650px">
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="and_popup_input">
                <p class="tableTitle">운송장등록 - (주문번호 : {{orderNum}})</p>
                <div class="modalBody">
                    <table>
                        <colgroup>
                            <col width="27%">
                            <col width="70%">
                        </colgroup>
                        <tr>
                            <th>배송업체</th>
                            <td>
                                <div class="selectbx d-flex">
                                    <select id="returnPlace" name="returnPlace">
                                        <option value="del1">del1</option>
                                        <option value="del2">del2</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>송장번호</th>
                            <td>
                                <input type="text" id="detail" name="detail" placeholder="INPUTBOX">
                            </td>
                        </tr>
                    </table>
                    <p>아래 선택한 주문상품을 입력하신 배송정보로 배송 처리합니다.</p>
                    <div class="ordInfo">
                        <table>
                            <colgroup>
                                <col width="6%">
                                <col width="40%">
                                <col width="9%">
                                <col width="14%">
                                <col width="14%">
                                <col width="14%">
                            </colgroup>
                            <thead>
                                <tr style="border-top: 1px solid #E5E5E5">
                                    <th>
                                        <div class="spot">
                                            <input class="checkbx" type="checkbox" id="ordModalchk1" name="list_check"><label for="ordModalchk1"></label>
                                        </div>
                                    </th>
                                    <th><span>주문상품</span></th>
                                    <th><span>수량</span></th>
                                    <th><span>배송비</span></th>
                                    <th><span>주상품금액</span></th>
                                    <th><span>주문금액</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="spot">
                                            <input class="checkbx" type="checkbox" id="ordModalchk2" name="list_check"><label for="ordModalchk2"></label>
                                        </div>
                                    </td>
                                    <td>
                                        <img src="" width="73" height="73" alt="이미지" align="center"/><span>종근당 슈퍼활력업 파워</span>
                                    </td>
                                    <td><span>1</span></td>
                                    <td><span>3,000원</span></td>
                                    <td><span>100,000원</span></td>
                                    <td><span>70,000원</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="button d-flex justify-center">
                    <delete-btn>닫기</delete-btn>
                    <action-btn class="upBtn">등록</action-btn>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    import DeleteBtn from '@/components/common/buttonComponents/DeleteBtn'

    export default {
        name: "ReturnDirection",
        props: [
            "dialogs"
        ],
        components:{ ActionBtn, DeleteBtn },
        data() {
            return {
                orderNum: 'OD202111001-123456'
            }
        }
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
            margin: 25px auto;
            vertical-align: middle;

            p {
                font-size: $font-12;
                margin-top: 20px;
            }

            table {
                width: 100%;
                
                tr {
                    height: 38px;
                    th {
                        text-align: left;
                        padding-left: 16px;
                        vertical-align: middle;
                        font-size: $font-12;
                        background: $color-table-bg;
                        border: 1px solid $color-border;
                        border-left: none;
                    }

                    td {
                        text-align: left;
                        padding-left: 16px;
                        vertical-align: middle;
                        font-size: $font-12;
                        border: 1px solid $color-border;
                        border-right: none;

                        .selectbx {
                            height: inherit;
                            display: flex;
                            align-items: center;
                            select {
                                width: 55%;
                                background: url('~@/assets/images/icons/search.svg') no-repeat 205px center;

                                option {
                                    height: 20px;
                                    font-size: $font-20;
                                }
                            }
                        }
                        input {
                            width: 55%;
                        }
                    }
                }
            }
        }
        .button{
            margin: 20px auto;
            button:first-child{
                margin-right: 15px;
            }
        }

        .dm_bx{
            position: relative;
            width: 100%;
            height: inherit;
            display: flex;
            align-items: center;

            .datebx {
                display: inline-block;
                width: 260px;
                height: 30px;
                margin: 0 10px;

                &:first-child {
                    margin-left: 0;
                }

                .calen {
                    background: url('~@/assets/images/icons/calender.svg') no-repeat 226px center;
                    background-size: 20px auto;
                    cursor: pointer;
                    height: 100%;
                }
            }
        }
        .ordInfo {
            table {
                width: 100%;
                thead {
                    tr {
                        th {
                            height: 38px;
                            position: relative;
                            vertical-align: middle;
                            align-items: center;
                            text-align: center;
                            padding: 0;
                            font-size: $font-12;
                            background: $color-table-bg;
                            border: none;
                            .spot{
                                position: absolute;
                                left:30%;
                                bottom: 55%;
                            }
                        }
                    }
                }

                tbody {
                    tr {
                        td {
                            height: 100px;
                            position: relative;
                            text-align: center;
                            vertical-align: middle;
                            padding: 0;
                            font-size: $font-12;
                            font-weight: 400;
                            border: 1px solid $color-border;
                            &:first-child {
                                border-left: none;
                            }
                            &:last-child {
                                border-right: none;
                            }
                            .spot{
                                position: absolute;
                                left:30%;
                                bottom: 55%;
                            }
                            img {
                                text-align: center;
                                vertical-align: middle;
                                margin-right: 10px;
                            }
                        }
                    }
                }
            }
        }
        
    }
</style>

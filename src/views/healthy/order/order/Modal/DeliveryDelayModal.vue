<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog v-model="dialogs.showDeliveryDelayModal" content-class="rounded-0 elevation-0" width="650px">
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="and_popup_input">
                <p class="tableTitle">배송지연 - (주문번호 : {{orderNum}})</p>
                <div class="modalBody">
                    <table>
                        <colgroup>
                            <col width="27%">
                            <col width="70%">
                        </colgroup>
                        <tr>
                            <th>배송예정일</th>
                            <td>
                                <div class="dm_bx">
                                    <div class="datebx">
                                        <input type="text" id="strtDate1" name="strtDate1" :placeholder=todate class="calen">
                                        <label for="strtDate1"></label>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>배송지연사유</th>
                            <td>
                                <div>
                                    <textarea name="" id="" cols="15" rows="5" placeholder="사유입력 표시"></textarea>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="button d-flex justify-center">
                    <action-btn class="upBtn">확인</action-btn>
                    <delete-btn>닫기</delete-btn>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    import DeleteBtn from '@/components/common/buttonComponents/DeleteBtn'

    export default {
        name: "DeliveryDelayModal",
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

            table {
                width: 100%;
                
                tr {
                    th {
                        text-align: left;
                        padding-left: 16px;
                        vertical-align: middle;
                        font-size: $font-13;
                        background: $color-table-bg;
                        border: 1px solid $color-border;
                        border-left: none;
                    }

                    td {
                        text-align: left;
                        padding: 12px 16px;
                        vertical-align: middle;
                        border: 1px solid $color-border;
                        border-right: none;

                        textarea {
                            width: 100%;
                            height: 80px;
                            padding: 10px;
                            word-break: break-word;
                            font-weight: normal;
                            border: 1px solid $color-bg-border;

                            &::placeholder{
                                font-weight: normal;
                            }
                            &:focus{
                                border: 1px solid $color-sub;
                            }
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
        
    }
</style>

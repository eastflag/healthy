<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog v-model="dialogs.showExchangeReqModal" content-class="rounded-0 elevation-0" width="800px">
        <v-card class="rounded-0 elevation-0 modalLayout">
            <div class="and_popup_input">
                <div class="modalTitle"><span>교환 신청</span></div>
                <p class="tableTitle">주문정보</p>
                <div class="modalBody">
                    <table>
                        <colgroup>
                            <col width="15%">
                            <col width="33.5%">
                            <col width="15%">
                            <col width="33.5%">
                        </colgroup>
                        <tr>
                            <th>배송예정일</th>
                            <td>OD202111001-123456</td>
                            <th>결제금액</th>
                            <td>70,000</td>
                        </tr>
                        <tr>
                            <th>주문일자</th>
                            <td>2021-09-02 15:30:58</td>
                            <th>결제구분</th>
                            <td>카드결제</td>
                        </tr>
                        <tr>
                            <th>결제일자</th>
                            <td colspan="3">2021-09-02 15:33:52</td>
                        </tr>
                    </table>
                </div>
                <p class="tableTitle">상품정보</p>
                <div class="modalBody2">
                    <table>
                        <colgroup>
                            <col width="7%">
                            <col width="17%">
                            <col width="17%">
                            <col width="17%">
                            <col width="17%">
                            <col width="22%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>
                                    <div class="spot">
                                        <input class="checkbx" type="checkbox" id="modalchk1" name="list_check"><label for="modalchk1"></label>
                                    </div>
                                </th>
                                <th><span>스토어명</span></th>
                                <th><span>제품명</span></th>
                                <th><span>수량</span></th>
                                <th><span>주문금액</span></th>
                                <th><span>개봉여부</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="spot">
                                        <input class="checkbx" type="checkbox" id="modalchk2" name="list_check"><label for="modalchk2"></label>
                                    </div>
                                </td>
                                <td><span>종근당</span></td>
                                <td><span>홍삼튼튼</span></td>
                                <td style="padding: 0 7px">
                                    <div class="selectbx d-flex">
                                        <select id="count1" name="count1">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                </td>
                                <td><span>25,000원</span></td>
                                <td>
                                    <div class="radioSpot">
                                        <input class="radiobx" type="radio" id="openYN1" name="radio"><label for="openYN1"><em>미개봉</em></label>
                                    </div>
                                    <div class="radioSpot">
                                        <input class="radiobx" type="radio" id="openYN2" name="radio"><label for="openYN2"><em>개봉</em></label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="spot">
                                        <input class="checkbx" type="checkbox" id="modalchk3" name="list_check"><label for="modalchk3"></label>
                                    </div>
                                </td>
                                <td><span>유한양행</span></td>
                                <td><span>비타민가득</span></td>
                                <td style="padding: 0 7px">
                                    <div class="selectbx d-flex">
                                        <select id="count1" name="count1">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                </td>
                                <td><span>25,000원</span></td>
                                <td>
                                    <div class="radioSpot">
                                        <input class="radiobx" type="radio" id="openYN3" name="radio"><label for="openYN3"><em>미개봉</em></label>
                                    </div>
                                    <div class="radioSpot">
                                        <input class="radiobx" type="radio" id="openYN4" name="radio"><label for="openYN4"><em>개봉</em></label>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="reasonForExchange">
                    <div class="exchangeSelectbx d-flex">
                        <span>교환사유선택</span>
                        <select id="exchangeReason" name="exchangeReason">
                            <option value="val1">단순변심</option>
                            <option value="val2">상품불만족</option>
                            <option value="val3">상품불량</option>
                            <option value="val4">주문오류</option>
                            <option value="val15">상품파손</option>
                            <option value="val16">오배송</option>
                        </select>
                    </div>
                    <textarea name="" id="" cols="15" rows="5" placeholder="-직접입력 시 활성화"></textarea>
                </div>
                <p class="tableTitle">회수지 정보</p>
                <div  class="modalBody">
                    <table>
                        <colgroup>
                            <col width="15%">
                            <col width="*">
                        </colgroup>
                        <thead>
                            <tr style="border-top: 1px solid #E5E5E5">
                                <th colspan="2">회수지 입력</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th style="background: none">회수지 선택</th>
                                <td>
                                    <div class="selectbx d-flex">
                                        <select id="returnPlace" name="returnPlace">
                                            <option value="home">집</option>
                                            <option value="comp">회사</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th style="background: none">보내는분</th>
                                <td>
                                    (07769)서울시 강서구 마곡중앙6로40/10층
                                </td>
                            </tr>
                            <tr>
                                <th style="background: none">연락처1</th>
                                <td>
                                   010-1234-1234
                                </td>
                            </tr>
                            <tr>
                                <th style="background: none">연락처2</th>
                                <td>
                                   
                                </td>
                            </tr>
                            <tr>
                                <th style="background: none">주소</th>
                                <td style="height: 70px">
                                    <div class="leftRightSort">
                                        <span>
                                            (우편번호)
                                            <br />
                                            서울시 강서구 마곡중앙6로40
                                            <br />
                                            세부주소
                                        </span>
                                        <basic-btn class="upBtn">주소 찾기</basic-btn>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="tableTitle">배송지 정보</p>
                <div  class="modalBody">
                    <table>
                        <colgroup>
                            <col width="15%">
                            <col width="*">
                        </colgroup>
                        <thead>
                            <tr style="border-top: 1px solid #E5E5E5">
                                <th colspan="2">회수지 입력</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th style="background: none">회수지 선택</th>
                                <td>
                                    <div class="selectbx d-flex">
                                        <select id="returnPlace" name="returnPlace">
                                            <option value="home">집</option>
                                            <option value="comp">회사</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th style="background: none">보내는분</th>
                                <td>
                                    (07769)서울시 강서구 마곡중앙6로40/10층
                                </td>
                            </tr>
                            <tr>
                                <th style="background: none">연락처1</th>
                                <td>
                                   010-1234-1234
                                </td>
                            </tr>
                            <tr>
                                <th style="background: none">연락처2</th>
                                <td>
                                   
                                </td>
                            </tr>
                            <tr>
                                <th style="background: none">주소</th>
                                <td style="height: 70px">
                                    <div class="leftRightSort">
                                        <span>
                                            (우편번호)
                                            <br />
                                            서울시 강서구 마곡중앙6로40
                                            <br />
                                            세부주소
                                        </span>
                                        <basic-btn class="upBtn">주소 찾기</basic-btn>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="button d-flex justify-center">
                    <action-btn class="upBtn" @click="showExchangeReqCompleteModal = true">교환신청</action-btn>
                    <delete-btn>닫기</delete-btn>
                </div>
            </div>
        </v-card>
    <exchange-req-complete-modal :showExchangeReqCompleteModal="showExchangeReqCompleteModal" />
    </v-dialog>
</template>

<script>
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    import DeleteBtn from '@/components/common/buttonComponents/DeleteBtn'
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'
    import ExchangeReqCompleteModal from './ExchangeReqCompleteModal'

    export default {
        name: "ExchangeReqModal",
        props: [
            "dialogs"
        ],
        components:{ ActionBtn, DeleteBtn, BasicBtn, ExchangeReqCompleteModal },
        data() {
            return {
                orderNum: 'OD202111001-123456',
                showExchangeReqCompleteModal: false,
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
        .modalTitle {
            margin: 0;
            &:before{
                content: "";
                position: absolute;
                width: 0px;
                height: 0px;
                background-color: $color-sub;
            }
            span{
                padding-left: 0px;
            }
        }
        .tableTitle {
            border-left: 3px solid $color-sub;
            font-size: $font-13;
        }
        .modalBody {
            margin: 10px auto;
            vertical-align: middle;

            table {
                width: 100%;
                
                tr {
                    height: 38px;
                    th {
                        text-align: left;
                        vertical-align: middle;
                        padding-left: 16px;
                        font-size: $font-12;
                        background: $color-table-bg;
                        border: 1px solid $color-border;
                        &:first-child {
                            border-left: none;
                        }
                    }

                    td {
                        text-align: left;
                        vertical-align: middle;
                        padding-left: 16px;
                        font-size: $font-12;
                        font-weight: 400;
                        border: 1px solid $color-border;
                        &:last-child {
                            border-right: none;
                        }
                        .leftRightSort {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }
                        .selectbx {
                            height: inherit;
                            display: flex;
                            align-items: center;
                            select {
                                width: 35%;
                                background: url('~@/assets/images/icons/search.svg') no-repeat 200px center;

                                option {
                                    height: 20px;
                                    font-size: $font-20;
                                }
                            }
                        }
                    }
                }
            }
        }
        .modalBody2 {
            margin: 10px auto;
            vertical-align: middle;

            table {
                width: 100%;
                
                tr {
                    height: 38px;
                    th {
                        position: relative;
                        vertical-align: middle;
                        align-items: center;
                        text-align: center;
                        font-size: $font-12;
                        background: $color-table-bg;
                        &:first-child {
                            border-left: none;
                        }
                        .spot{
                            position: absolute;
                            left:30%;
                            bottom: 55%;
                        }
                    }

                    td {
                        position: relative;
                        text-align: left;
                        vertical-align: middle;
                        padding-left: 16px;
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
                        .radioSpot {
                            display: inline-flex;
                            margin-right: 15px;

                            em {
                                width:100px;
                                padding-left:26px;
                            }
                        }
                        .selectbx {
                            height: inherit;
                            display: flex;
                            align-items: center;
                            select {
                                width: 100%;
                                background: url('~@/assets/images/icons/search.svg') no-repeat 95px center;

                                option {
                                    height: 20px;
                                    font-size: $font-20;
                                }
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
        .reasonForExchange {
            padding: 20px;
            width: 100%;
            font-size: $font-12;
            .exchangeSelectbx {
                height: inherit;
                display: flex;
                align-items: center;
                margin: 0 0 5px 0;
                select {
                    width: 32%;
                    background: url('~@/assets/images/icons/search.svg') no-repeat 200px center;
                    margin-left: 30px;

                    option {
                        height: 20px;
                        font-size: $font-20;
                    }
                }
            }

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
</style>

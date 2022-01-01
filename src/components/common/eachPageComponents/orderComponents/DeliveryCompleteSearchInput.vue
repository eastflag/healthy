<template>
    <v-container fluid class="boardLayout">
        <table>
            <colgroup>
                <col width="200px">
                <col width="*">
            </colgroup>
            <tr style="border-top: 1px solid #E5E5E5">
                <th>기간</th>
                <td>
                    <div class="dm_bx">
                        <div class="innerSelectbx d-flex">
                            <select id="orderDetailSelect" name="orderDetailSelect">
                                <option value="date1">당일</option>
                                <option value="date2">주문일</option>
                                <option value="date3">결제일</option>
                                <option value="date4">발송일</option>
                                <option value="date5">배송완료</option>
                            </select>
                        </div>
                        <div class="datebx">
                            <input type="text" id="strtDate1" name="strtDate1" :placeholder=todate class="calen">
                            <label for="strtDate1"></label>
                        </div>
                        ~
                        <div class="datebx">
                            <input type="text" id="strtDate2" name="strtDate2" :placeholder=todate class="calen">
                            <label for="strtDate2"></label>
                        </div>
                        <div class="month">
                            <span class="on">당일</span><span>1주일</span><span>1개월</span><span>3개월</span><span>6개월</span><span>1년</span><span>전체</span>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th>상세검색</th>
                <td>
                    <div class="selectbx d-flex">
                        <select id="orderDetailSelect" name="orderDetailSelect">
                            <option value="">전체</option>
                            <option value="name">성명</option>
                            <option value="id">id</option>
                            <option value="phoneNum">휴대폰번호</option>
                            <option value="orderNum">주문번호</option>
                        </select>
                        <input type="text" id="detail" name="detail" placeholder="INPUTBOX">
                    </div>
                </td>
            </tr>
        </table>
        <div class="button d-flex justify-center">
            <action-btn>조회</action-btn>
            <basic-btn>초기화</basic-btn>
        </div>
    </v-container>
</template>

<script>
    import ActionBtn from '../../buttonComponents/ActionBtn'
    import BasicBtn from '../../buttonComponents/BasicBtn'
    import dayjs from 'dayjs'

    export default {
        name: "DeliveryCompleteSearchInput",
        components: { ActionBtn , BasicBtn , dayjs },
        data() {
            return {
                todate: dayjs().format("YYYY-MM-DD"),
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

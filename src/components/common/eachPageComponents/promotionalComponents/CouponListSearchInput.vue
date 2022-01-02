<template>
    <v-container fluid class="searchBoardLayout">
        <table>
            <colgroup>
                <col width="200px">
                <col width="606px">
                <col width="200px">
                <col width="*">
            </colgroup>
            <tr style="border-top: 1px solid #E5E5E5">
              <th>발급방식</th>
              <td>
                <div class="selectbx d-flex">
                    <select id="issueWay" name="issueWay">
                        <option value="auto">자동발급(자동)</option>
                        <option value="download">다운로드(다운)</option>
                    </select>
                </div>
              </td>
              <th>사용방식</th>
              <td>
                <div class="selectbx d-flex">
                    <select id="useWay" name="useWay">
                        <option value="pc">PC</option>
                        <option value="app">APP</option>
                        <option value="all">전체(PC+APP)</option>
                    </select>
                </div>
              </td>
            </tr>
            <tr>
                <th>등록일자</th>
                <td colspan="3">
                    <div class="dm_bx">
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
                <th>발급대상</th>
                <td colspan="3">
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="state1" name="list_check"><label for="state1"><em>전체</em></label>
                    </div>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="state2" name="list_check"><label for="state2"><em>고객</em></label>
                    </div>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>전문인</em></label>
                    </div>
                </td>
            </tr>
            <tr>
                <th>상세검색</th>
                <td colspan="3">
                    <div class="selectbx d-flex">
                        <select id="couponDetailSelect" name="couponDetailSelect">
                            <option value="">전체</option>
                            <option value="couponNum">쿠폰명</option>
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
        name: "CouponListSearchInput",
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

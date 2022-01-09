<template>
    <v-container fluid class="searchBoardLayout">
        <table>
            <colgroup>
                <col width="200px">
                <col width="*">
            </colgroup>
            <tr style="border-top: 1px solid #E5E5E5">
                <th>기간</th>
                <td>
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
                <th>상태</th>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="state1" name="list_check"><label for="state1"><em>전체</em></label>
                    </div>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="state2" name="list_check"><label for="state2"><em>교환신청</em></label>
                    </div>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="state3" name="list_check"><label for="state3"><em>교환처리중</em></label>
                    </div>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="state4" name="list_check"><label for="state4"><em>교환회수지시</em></label>
                    </div>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="state5" name="list_check"><label for="state5"><em>교환완료</em></label>
                    </div>
                </td>
            </tr>
            <tr>
                <th>상세검색</th>
                <td>
                    <div class="selectbx d-flex">
                        <select id="claimDetailSelect" name="claimDetailSelect">
                            <option value="">전체</option>
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
        name: "ExchangeListSearchInput",
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
    // SearchInputForm Common SCSS
    @import '~@/assets/scss/searchInputFormCommon.scss';
</style>

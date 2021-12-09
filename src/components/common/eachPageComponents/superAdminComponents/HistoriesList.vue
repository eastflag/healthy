<template>
    <v-container fluid class="boardLayout">
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><span>LISTLISTLIST</span> ('{{ num }}'의 리스트가 조회되었습니다.)</div>
            <div class="selectbx">
                <select id="departure" name="departure">
                    <option value="num1" selected>조회수 순</option>
                    <option value="num2">게시일 최신 순</option>
                    <option value="num3">게시일 과거 순</option>
                </select>
            </div>
        </div>
        <table>
            <colgroup>
                <col width="5%">
                <col width="20%">
                <col width="30%">
                <col width="45%">
            </colgroup>
            <thead>
            <tr>
                <th>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                    </div>
                </th>
                <th><span>아이디</span></th>
                <th><span>기간</span></th>
                <th><span>경로</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list2" name="list_check"><label for="list2"></label>
                    </div>
                </td>
                <td><span>admin</span></td>
                <td><span>2021-09-07 24:00:00</span></td>
                <td><span>상담관리 > 상담조회 > 상담상세</span></td>
            </tr>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list3" name="list_check"><label for="list3"></label>
                    </div>
                </td>
                <td><span>admin</span></td>
                <td><span>2021-09-07 24:00:00</span></td>
                <td><span>상담관리 > 상담조회 > 상담상세</span></td>
            </tr>
            </tbody>
        </table>
        <plus-btn>더보기</plus-btn>
    </v-container>
</template>

<script>
    import PlusBtn from '../../buttonComponents/PlusBtn'

    export default {
        name: "HistoriesList",
        components: { PlusBtn },
        data(){
            return{
                num:'5'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    // ListForm Common SCSS
    @import '~@/assets/scss/listFormCommon.scss';
    #app {
        .boardLayout {
            min-height: 655px;
        }
    }
</style>

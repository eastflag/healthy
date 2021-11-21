<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><span>LISTLISTLIST</span> ('{{num}}'의 리스트가 조회되었습니다.)</div>
            <div class="selectbx">
                <select id="departure" name="departure">
                    <option :key="i" :value="data.value" v-for="(data, idex) in options">{{ data.title }}</option>
                </select>
            </div>
        </div>
        <table style="width: 100%; height: auto;">
            <colgroup>
                <col width="5%">
                <col width="5%">
                <col width="10%">
                <col width="10%">
                <col width="10%">
                <col width="25%">
                <col width="10%">
                <col width="11%">
                <col width="11%">
                <col width="11%">
            </colgroup>
            <thead>
                <tr>
                    <th>
                        <div class="spot">
                            <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                        </div>
                    </th>
                    <th><span>구분</span></th>
                    <th><span>상태</span></th>
                    <th><span>분류</span></th>
                    <th><span>게시여부</span></th>
                    <th><span>제목</span></th>
                    <th><span>조회수</span></th>
                    <th><span>게시자</span></th>
                    <th><span>게시기간</span></th>
                    <th><span>비고</span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="spot">
                            <input class="checkbx" type="checkbox" id="list2" name="list_check"><label for="list2"></label>
                        </div>
                    </td>
                    <td><span>전체</span></td>
                    <td><span>공지</span></td>
                    <td><span>일반</span></td>
                    <td><span>게시</span></td>
                    <td><span>건강하다 출시안내</span></td>
                    <td><span>10,000</span></td>
                    <td><span>scn345</span></td>
                    <td><span>2021.08.01~12.31</span></td>
                    <td><span><action-btn>공지등록</action-btn></span></td>
                </tr>
                <tr>
                    <td>
                        <div class="spot">
                            <input class="checkbx" type="checkbox" id="list3" name="list_check"><label for="list3"></label>
                        </div>
                    </td>
                    <td><span>전체</span></td>
                    <td><span>공지</span></td>
                    <td><span>일반</span></td>
                    <td><span>게시</span></td>
                    <td><span>건강하다 출시안내</span></td>
                    <td><span>10,000</span></td>
                    <td><span>scn345</span></td>
                    <td><span>2021.08.01~12.31</span></td>
                    <td><span><basic-btn>공지해제</basic-btn></span></td>
                </tr>
            </tbody>
        </table>
        <plus-btn>더보기</plus-btn>
    </v-container>
</template>

<script>
    import PlusBtn from '../../buttonComponents/PlusBtn'
    import ActionBtn from '../../buttonComponents/ActionBtn'
    import BasicBtn from '../../buttonComponents/BasicBtn'

    export default {
        name: "BoardList",
        components: { PlusBtn , ActionBtn , BasicBtn },
        data(){
            return{
                num:'5',
                options:[
                    { value: "num1", title: "조회수 순" },
                    { value: "num2", title: "게시일 최신 순" },
                    { value: "num3", title: "게시일 과거 순" },
                ]
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
            min-height: 545px;
        }
    }
</style>

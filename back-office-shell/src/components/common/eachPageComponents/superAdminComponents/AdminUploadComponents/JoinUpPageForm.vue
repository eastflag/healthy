<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
        <table>
            <colgroup>
                <col width="200px">
                <col width="*">
            </colgroup>
            <tr class="disabled" style="border-top: 1px solid #E5E5E5">
                <th>권한</th>
                <td>
                    <div class="selectbx">
                        <select id="departure" name="departure" disabled>
                            <option value="num1">일반관리자</option>
                            <option value="num2">검색2</option>
                            <option value="num3">검색3</option>
                        </select>
                    </div>
                </td>
            </tr>
            <tr class="disabled">
                <th class="disabled">관리코드</th>
                <td>
                    <span class="disabled">scn001= UID</span>
                </td>
            </tr>
            <tr class="disabled">
                <th>업체명</th>
                <td>
                    <span>삼천리네트웍스</span>
                </td>
            </tr>
            <tr class="disabled">
                <th>아이디</th>
                <td>
                    <span>scn01</span>
                </td>
            </tr>
            <tr>
                <th>관리자 권한</th>
                <td>
                    <div class="button">
                        <basic-btn>비밀번호 초기화</basic-btn>
                    </div>
                </td>
            </tr>
            <tr class="disabled">
                <th>전화번호</th>
                <td>
                    <div class="selectbx">
                        <input type="text" id="phone" name="phone" placeholder="01012345678" disabled>
                    </div>
                </td>
            </tr>
            <tr class="disabled">
                <th>이메일</th>
                <td>
                    <div class="selectbx d-flex">
                        <input type="text" id="email" name="email" placeholder="example@example.co.kr" disabled>
                        <div class="button">
                            <basic-btn>중복 확인</basic-btn>
                        </div>
                    </div>
                </td>
            </tr>
            <tr class="disabled">
                <th>관리자 권한</th>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="permit" name="list_check" disabled><label for="permit"><em class="disabled">허용</em></label>
                    </div>
                </td>
            </tr>
            <tr>
                <th>계정 상태</th>
                <td>
                    <div v-for="(item, index) in radioBox" :key="index" class="spot">
                        <input class="radiobx" type="radio" :id="item.idx" name="radio"><label :for="item.idx"><em>{{ item.title }}</em></label>
                    </div>
                </td>
            </tr>
        </table>
    </v-container>
</template>

<script>
    import BasicBtn from '../../../buttonComponents/BasicBtn'
    export default {
        name: "JoinUpForm",
        components: { BasicBtn },
        data() {
            return {
                show: true,
                radioBox: [
                    {
                        idx:1,
                        title: '활동',
                    },
                    {
                        idx:2,
                        title: '차단',
                    },
                ]
            }
        },
    }
</script>

<style scoped>

</style>

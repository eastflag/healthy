<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="boardLayout">
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><span>LIST</span> ('{{num}}'의 리스트가 조회되었습니다.)</div>
            <div class="selectbx">
                <select id="departure" name="departure">
                  <option value="num2">등록일 최신 순</option>
                  <option value="num3">등록일 과거 순</option>
                  <option value="num3">수정일 최신 순</option>
                  <option value="num4">수정일 과거 순</option>
                </select>
                <basic-btn class="ml-3">엑셀다운</basic-btn>
                <basic-btn class="ml-3" @click="dialogs.showProductSearchList = true">일괄수정</basic-btn>
            </div>
        </div>
        <table>
            <colgroup>
                <col width="1%">
                <col width="3%">
                <col width="5%">
                <col width="5%">
                <col width="5%">
                <col width="5%">
                <col width="5%">
                <col width="5%">
                <col width="3%">
                <col width="6%">
                <col width="6%">
                <col width="3%">
                <col width="2%">
            </colgroup>
            <thead>
            <tr>
                <th>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                    </div>
                </th>
                <th><span>상품코드</span></th>
                <th><span>카테고리</span></th>
                <th><span>제조사</span></th>
                <th><span>상품명</span></th>
                <th><span>상품가격</span></th>
                <th><span>할인금액</span></th>
                <th><span>판매여부</span></th>
                <th><span>재고</span></th>
                <th><span>등록일</span></th>
                <th><span>수정일</span></th>
                <th><span>관리자</span></th>
                <th><span>관리</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div class="spot">
                        <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                    </div>
                </td>
                <td><span>1234</span></td>
                <td><span>대분류>중분류>소분류</span></td>
                <td><span>종근당</span></td>
                <td><span>종근당 활력 홍삼파</span></td>
                <td><span>25,000원</span></td>
                <td><span>1,000원</span></td>
                <td><span>판매중</span></td>
                <td><span>999</span></td>
                <td><span>2021-09-01</span></td>
                <td><span>2021-09-01</span></td>
                <td><span>admin</span></td>
                <td><span><action-btn>수정</action-btn></span></td>
            </tr>
            <tr>
              <td>
                <div class="spot">
                  <input class="checkbx" type="checkbox" id="list1" name="list_check"><label for="list1"></label>
                </div>
              </td>
              <td><span>1234</span></td>
              <td><span>대분류>중분류>소분류</span></td>
              <td><span>유한양행</span></td>
              <td><span>유한양행 비타민활</span></td>
              <td><span>25,000원</span></td>
              <td><span>3,000원</span></td>
              <td><span>판매중지</span></td>
              <td><span>0</span></td>
              <td><span>2021-09-01</span></td>
              <td><span>2021-09-01</span></td>
              <td><span>admin</span></td>
              <td><span><action-btn>수정</action-btn></span></td>
            </tr>
            </tbody>
        </table>
        <plus-btn>더보기</plus-btn>
        <product-list-batch-edit-modal :dialogs="dialogs"/>
    </v-container>
</template>

<script>
    import PlusBtn from '../../buttonComponents/PlusBtn'
    import BasicBtn from '../../buttonComponents/BasicBtn'
    import ActionBtn from '../../buttonComponents/ActionBtn'
    import ProductListBatchEditModal from './Modal/ProductListBatchEditModal'

    export default {
        name: "ProductSearchList",
        components: { PlusBtn, BasicBtn, ActionBtn, ProductListBatchEditModal },
        data(){
            return{
                num:'2',
                dialogs: {
                  showProductSearchList: false,
                },
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
            min-height: 675px;
        }
    }
</style>

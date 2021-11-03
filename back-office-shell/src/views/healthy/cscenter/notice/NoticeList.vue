<template>
    <div class="containerLayout">
        <template>
            <form action="#" class="searchInputLayout">
                <fieldset id="" class="">
                    <!--<legend></legend>-->
                    <div class="d-flex inputLayout">
                        <span>가입일 <br> 기간선택</span>
                        <input type="text" value="2021.11.02">
                        <input type="text" value="2021.11.02">
                        <div class="button">
                            <button>월</button>
                            <button>월</button>
                            <button>월</button>
                            <button>월</button>
                        </div>
                    </div>
                    <div class="inputLayout">
                        <span>게시물 상태</span>
                        <input type="radio" id="num1" name="radio">
                        <label for="num1">전체</label>
                        <input type="radio" id="num2" name="radio">
                        <label for="num2">공지</label>
                        <input type="radio" id="num3" name="radio">
                        <label for="num3">일반</label>
                    </div>
                    <div class="inputLayout">
                        <span>직접검색</span>
                        <select name="directSearch" id="directSearch">
                            <option value="분류">분류</option>
                            <option value="게시자">게시자</option>
                            <option value="제목">제목</option>
                        </select>
                    </div>
                </fieldset>
            </form>
            <div class="button">
                <v-btn>조회</v-btn>
                <v-btn>초기화</v-btn>
            </div>
            <board-list/>
        </template>
    </div>
</template>

<script>
    import boardList from '@/components/common/boardComponents/List'

    export default {
        name: "NoticeList",
        components: { boardList }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app{
        .containerLayout{
            .searchInputLayout{
                width: 95%;
                height: 200px;
                border: 1px solid $color-sub;

                .inputLayout{
                }
            }
        }
    }
</style>

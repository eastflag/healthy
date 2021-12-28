<template>
        <table>
            <colgroup>
                <col width="20%">
                <col width="28.5%">
                <col width="20%">
                <col width="28.5%">
            </colgroup>
            <thead>
                <tr>
                    <th colspan="4">배송지정보</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>반는사람</td>
                    <td>홍길동</td>
                    <td>연락처</td>
                    <td>010-1234-1234</td>
                </tr>
                <tr>
                    <td>박는주소</td>
                    <td>(07769) 서울시 강서구 마곡중앙 6로 40/10층</td>
                    <td rowspan="2">배송정보수정</td>
                    <td rowspan="2">배송정보수정</td>
                </tr>
                <tr>
                    <td>배송요청사항</td>
                    <td>문앞에 높아주세요</td>
                </tr>
            </tbody>
        </table>
</template>

<script>
  

    export default {
        name: "DeliveryInfo",
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app {
        table {
            width: 1612px;
            max-width: 1612px;
            margin-top: 20px;

            thead {
                tr {
                    border-bottom: 1px solid $color-border;
                    th {
                        text-align: left;
                        vertical-align: middle;
                        height: 52px;
                        padding-left: 16px;
                        font-size: $font-15;
                        background: $color-table-bg;
                    }
                }
            }

            tbody {
                tr {
                    border-bottom: 1px solid $color-border;
                    th {
                        text-align: left;
                        vertical-align: middle;
                        height: 52px;
                        padding-left: 16px;
                        font-size: $font-13;
                        background: $color-table-bg;
                    }

                    td {
                        text-align: left;
                        vertical-align: middle;
                        height: 52px;
                        padding-left: 16px;
                        font-size: $font-12;

                        &:first-child {
                            border-bottom: none;
                        }
                    }
                }
            }
        }

        .button{
            button:first-child{
                margin-right: 15px;
            }
        }
    }
</style>



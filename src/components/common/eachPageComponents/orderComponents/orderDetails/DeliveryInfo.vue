<template>
    <v-main>
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><v-icon class="titleIcon">$titleIcon</v-icon><span>배송지정보</span></div>
        </div>
        <table>
            <colgroup>
                <col width="15%">
                <col width="33.5%">
                <col width="15%">
                <col width="33.5%">
            </colgroup>
            <thead>
                <tr>
                    <th colspan="4">배송지정보</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>받는사람</td>
                    <td>홍길동</td>
                    <td>연락처</td>
                    <td>010-1234-1234</td>
                </tr>
                <tr>
                    <td>받는주소</td>
                    <td>(07769) 서울시 강서구 마곡중앙 6로 40/10층</td>
                    <td rowspan="2">배송정보수정</td>
                    <td rowspan="2"><basic-btn>배송정보수정</basic-btn></td>
                </tr>
                <tr>
                    <td>배송요청사항</td>
                    <td>문앞에 높아주세요</td>
                </tr>
            </tbody>
        </table>
    </v-main>
</template>

<script>
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'

    export default {
        name: "DeliveryInfo",
        components: { BasicBtn },

    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app {
        .title{
            width: 1612px;
            margin: 40px auto 0;
            font-size: $font-16;
            font-weight: bold;

            .titleIcon{
                margin-right: 10px;
            }
        }
        table {
            width: 1612px;
            max-width: 1612px;
            margin-top: 20px;

            thead {
                border: 1px solid $color-border;
                border-left: none;
                border-right: none;

                tr {
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
                    th {
                        text-align: left;
                        vertical-align: middle;
                        height: 52px;
                        padding-left: 16px;
                        font-size: $font-13;
                        background: $color-table-bg;
                        border: 1px solid $color-border;
                    }

                    td {
                        text-align: left;
                        vertical-align: middle;
                        height: 52px;
                        padding-left: 16px;
                        font-size: $font-12;
                        border: 1px solid $color-border;

                        &:first-child {
                            border-left: none;
                        }
                        &:last-child {
                            border-right: none;
                        }
                    }
                }
            }
        }
    }
</style>



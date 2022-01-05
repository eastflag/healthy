<template>
    <v-main>
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><v-icon class="titleIcon">$titleIcon</v-icon><span>{{getTitle}}</span></div>
        </div>
        <table>
            <colgroup>
                <col width="15%">
                <col width="33.5%">
                <col width="15%">
                <col width="33.5%">
            </colgroup>
            <tbody>
                <tr style="border-top: 1px solid #E5E5E5">
                    <th>신청일자</th>
                    <td>2021-09-01</td>
                    <th>완료(환불)처리일자</th>
                    <td>2021-09-01</td>
                </tr>
                <tr>
                    <th>신청자</th>
                    <td>홍길동</td>
                    <th>완료(환불)처리자</th>
                    <td>-</td>
                </tr>
                <tr>
                    <th>스토어할인</th>
                    <td>-30,000원</td>
                    <th>취소상품금액</th>
                    <td>100,000원</td>
                </tr>
                <tr>
                    <th>쿠폰할인</th>
                    <td>0원</td>
                    <th>환불배송비</th>
                    <td>3,000원</td>
                </tr>
                <tr>
                    <th>배송비할인</th>
                    <td>-3,000원</td>
                    <th>환불 결제금액</th>
                    <td>70,000원</td>
                </tr>
                <tr>
                    <th>포인트할인</th>
                    <td>0원</td>
                    <td rowspan="3"></td>
                    <td rowspan="3"></td>
                </tr>
                <tr>
                    <th>환급 적립금</th>
                    <td style="text-align: right;">700원</td>
                </tr>
                <tr>
                    <th>사유</th>
                    <td>[단순 변심]</td>
                </tr>
                <tr>
                    <th>환불계좌</th>
                    <td colspan="3">카드결제</td>
                </tr>
                <tr>
                    <th>관리자메모</th>
                    <td colspan="3">
                        <div class="leftRightSort">
                            <textarea name="" id="" cols="15" rows="5" placeholder="관리자 메모"></textarea>
                            <action-btn class="button">등록</action-btn>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </v-main>
</template>

<script>
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'

    export default {
        name: "ReturnProdInfo",
        components:{ ActionBtn },
        props: {
            subTitle: {
                type: String,
                required: true,
            }
        },
        computed: {
            getTitle() {
                if (this.subTitle === 'exchangeInfo') {
                    return '교환정보'
                } else if (this.subTitle === 'returnInfo') {
                    return '반품정보'
                }
            }
        }
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

            tbody {
                tr {
                    border-bottom: 1px solid $color-border;
                    
                    th {
                        text-align: left;
                        vertical-align: middle;
                        height: 52px;
                        padding: 0 16px;
                        font-size: $font-13;
                        background: $color-table-bg;
                        
                    }

                    td {
                        text-align: left;
                        vertical-align: middle;
                        height: 52px;
                        padding: 0 16px;
                        font-size: $font-12;

                        textarea {
                            width: 100%;
                            height: 70px;
                            padding: 10px 16px;
                            margin: 10px auto;
                            word-break: break-word;
                            font-weight: normal;
                            border: 1px solid $color-bg-border;

                            &::placeholder{
                                font-weight: normal;
                            }
                            &:focus{
                                border: 1px solid $color-sub;
                            }
                        }

                        .leftRightSort {
                            display: flex;
                            align-items: flex-end;
                            justify-content: space-between;

                            .button{
                                margin-left: 15px;
                                
                            }
                        }
                    }
                    &:nth-child(n+3) {
                        th {
                            text-align: right;
                        }
                        td {
                            text-align: right;
                        }
                    }
                    &:nth-child(n+7) {
                        th {
                            text-align: left;
                        }
                        td {
                            text-align: left;
                        }
                    }
                }
            }
        }
    }
</style>



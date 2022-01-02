<template>
    <v-main>
        <div class="title d-flex justify-space-between">
            <div class="d-flex"><v-icon class="titleIcon">$titleIcon</v-icon><span>거래증빙서류(현금영수증)</span></div>
        </div>
        <table>
            <colgroup>
                <col width="15%">
                <col width="33.5%">
                <col width="15%">
                <col width="33.5%">
            </colgroup>
            <tbody>
                <tr>
                    <th>발급사유</th>
                    <td>개인소득공제</td>
                    <th>신분확인 ID</th>
                    <td>010-1234-1234</td>
                </tr>
                <tr>
                    <th>신청일자</th>
                    <td>2021-09-01 13:11:25</td>
                    <th>발급상태</th>
                    <td>{{aprvState}}<basic-btn class="button upBtn" @click="getIssueInfo" v-if="showIssueBtn">발급하기</basic-btn><span v-else>{{aprvNum}}</span></td>
                </tr>
                <tr>
                    <th>발급일자</th>
                    <td colspan="3">{{issueDate}}</td>
                </tr>
            </tbody>
        </table>
        <div class="footerInfo">
            <p>&#8251; 입금전 상태에서는 현금영수증을 발급할 수 없습니다. 입금확인 후 이용해 주십시요.</p>
        </div>
    </v-main>
</template>

<script>
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'

    export default {
        name: "CashReceipt",
        components: { BasicBtn },
        data() {
            return {
                showIssueBtn: true,
                aprvState: '발급신청',
                aprvNum: '',
                issueDate: ''
            }
        },
        methods: {
            getIssueInfo() {
                this.showIssueBtn = false;
                this.aprvState = '발급완료';
                this.aprvNum = '(승인번호 : 12345678)';
                this.issueDate = '2021-09-01 13:05:21';
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
                    border: 1px solid $color-border;
                    border-left: none;
                    border-right: none;
                    th {
                        text-align: center;
                        vertical-align: middle;
                        height: 52px;
                        font-size: $font-13;
                        background: $color-table-bg;
                    }

                    td {
                        text-align: left;
                        vertical-align: middle;
                        height: 52px;
                        padding-left: 16px;
                        font-size: $font-12;
                    }
                }
            }
        }

        .button{
            margin-left: 15px;
        }

        .footerInfo {
            margin: 15px 0 10px 15px;
            p {
                font-size: $font-13;
                color: red;
            }
        }
    }
</style>



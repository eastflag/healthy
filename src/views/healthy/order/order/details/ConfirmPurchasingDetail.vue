<template>
    <v-container fluid class="boardLayout">
        <template>
            <div class="button d-flex align-center justify-end">
                <basic-btn>히스토리</basic-btn>
                <basic-btn>목록</basic-btn>
            </div>
        </template>
        <template>
            <order-user-info :showOrderUserInfoTable="false" />
        </template>
        <template>
            <order-prod-info-with-delivery-date :orderState = "'confirmPurchasing'" />
        </template>
        <template>
            <order-payment-amt-info />
        </template>
        <template>
            <delivery-info />
        </template>
    </v-container>
</template>

<script>
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    import orderUserInfo from '@/components/common/eachPageComponents/orderComponents/orderDetails/OrderUserInfo'
    import OrderProdInfoWithDeliveryDate from '@/components/common/eachPageComponents/orderComponents/orderDetails/OrderProdInfoWithDeliveryDate'
    import orderPaymentAmtInfo from '@/components/common/eachPageComponents/orderComponents/orderDetails/OrderPaymentAmtInfo'
    import deliveryInfo from '@/components/common/eachPageComponents/orderComponents/orderDetails/DeliveryInfo'

    export default {
        name: "ConfirmPurchasingDetail",
        components: { ActionBtn, BasicBtn, orderUserInfo, OrderProdInfoWithDeliveryDate, orderPaymentAmtInfo, deliveryInfo },
        
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app {
        .boardLayout {
            max-width: 1680px;
            margin: 15px auto 0 auto;
            border: 1px solid $color-bg-border;
            border-radius:  $border-radius-root;
            background-color: $color-white;
            padding: 40px 30px;

            table {
                width: 1612px;
                max-width: 1612px;

                tr {
                    border-bottom: 1px solid $color-border;
                }

                th {
                    display: flex;
                    align-items: center;
                    height: 52px;
                    padding-left: 16px;
                    font-size: $font-13;
                    background: $color-table-bg;
                }

                td {
                    padding:0 32px;
                    font-size: $font-12;
                    text-align: left;

                    &:first-child {
                        border-bottom: none;
                    }
                }
            }

            .button{
                button:first-child{
                    margin-right: 15px;
                }
            }
        }
    }
</style>

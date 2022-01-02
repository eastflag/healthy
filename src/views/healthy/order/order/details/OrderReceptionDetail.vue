<template>
    <v-container fluid class="boardLayout">
        <template>
            <div class="button d-flex align-center justify-end">
                <basic-btn>목록</basic-btn>
                <action-btn>전체주문취소</action-btn>
            </div>
        </template>
        <template>
            <order-user-info />
        </template>
        <template>
            <order-prod-info />
        </template>
        <template>
            <order-payment-amt-info />
        </template>
        <template>
            <delivery-info />
        </template>
        <template>
            <cash-receipt />
        </template>
    </v-container>
</template>

<script>
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'
    import ActionBtn from '@/components/common/buttonComponents/ActionBtn'
    import orderUserInfo from '@/components/common/eachPageComponents/orderComponents/orderDetails/OrderUserInfo'
    import orderProdInfo from '@/components/common/eachPageComponents/orderComponents/orderDetails/OrderProdInfo'
    import orderPaymentAmtInfo from '@/components/common/eachPageComponents/orderComponents/orderDetails/OrderPaymentAmtInfo'
    import deliveryInfo from '@/components/common/eachPageComponents/orderComponents/orderDetails/DeliveryInfo'
    import cashReceipt from '@/components/common/eachPageComponents/orderComponents/orderDetails/CashReceipt'

    export default {
        name: "OrderReceptionDetail",
        components: { ActionBtn, BasicBtn, orderUserInfo, orderProdInfo, orderPaymentAmtInfo, deliveryInfo, cashReceipt },
        
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app {
        .button{
                margin: 30px;
                button:first-child{
                    margin-right: 15px;
                }
        }
    }
</style>

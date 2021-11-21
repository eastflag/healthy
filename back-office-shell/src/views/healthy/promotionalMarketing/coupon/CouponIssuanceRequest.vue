<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <div class="button d-flex align-center justify-end">
                <basic-btn>선택보류</basic-btn>
                <basic-btn>일괄승인</basic-btn>
                <basic-btn>선택승인</basic-btn>
            </div>
        </template>
        <template>
            <!--컨포넌트-->
            <coupon-issuance-request-list/>
        </template>
        <holding-modal/>
    </v-container>
</template>

<script>
    import HoldingModal from './modal/HoldingModal'
    import BasicBtn from '@/components/common/buttonComponents/BasicBtn'
    import CouponIssuanceRequestList from '@/components/common/eachPageComponents/promotionalComponents/CouponIssuanceRequestList'
    export default {
        name: "CouponIssuanceRequest",
        components :{ HoldingModal, BasicBtn , CouponIssuanceRequestList }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app{
        .button{
            button{
                margin-right: 15px;
                &:last-child{
                    margin-right: 0px;
                }
            }
        }
    }
</style>

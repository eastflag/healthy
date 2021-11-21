<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <consultation-reservation-input/>
        </template>
        <template>
            <!--컨포넌트-->
        </template>
    </v-container>
</template>

<script>
    import ConsultationReservationInput from '@/components/common/eachPageComponents/consultationComponents/ConsultationReservationInput'
    export default {
        name: "ConsultationReservation",
        components: { ConsultationReservationInput }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>

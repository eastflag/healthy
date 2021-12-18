<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container fluid class="containerLayout">
        <template>
            <!--컨포넌트-->
        </template>
        <template>
            <!--컨포넌트 추가 생성 ++ -->
            <template>
                <customer-member-input/>
            </template>
            <template>
                <member-list/>
            </template>
        </template>
    </v-container>
</template>

<script>
    import CustomerMemberInput from '@/components/common/eachPageComponents/memberComponents/CustomerMemberInput'
    import MemberList from '@/components/common/eachPageComponents/memberComponents/MemberList'
    export default {
        name: "CustomerMember",
        components: { CustomerMemberInput, MemberList } 
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
    #app{
        .containerLayout{
            .content{
                width: 99%;
                height: 60px;
                overflow: hidden;

                .boardNav{
                    width: 200px;
                    height: 25px;
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: $font-12;
                    color: $color-span;

                    span:last-child{
                        color:  $color-basic;
                    }
                }

                .title{
                    display: inline-block;
                    margin-top: 5px;
                    font-size: $font-24 !important;
                }
            }
        }
    }
</style>

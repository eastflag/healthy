<template>
    <v-app id="app">
        <router-view />
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
            }
        },
        computed: {

        },
        methods: {
        }
    }
</script>

<style lang="scss">
@import '~@/assets/scss/_index.scss';
// 공통 scss는 여기에 정의
#app {
  .containerLayout {
    .content {
      width: 99%;
      height: 60px;
      overflow: hidden;

      .menuNav {
        width: 220px;
        height: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: $font-12;
        color: $color-span;

        span:last-child {
          color: $color-basic;
        }
      }

      .title {
        display: inline-block;
        margin-top: 5px;
        font-size: $font-24 !important;
      }
    }
  }

  .modalLayout {
    .modalTitle {
      padding: 16px 0 8px 0;
      margin: 0 24px;
      border-bottom: 1px solid $color-main;
    }
    .tableTitle {
      border-left: 3px solid $color-sub;
      margin: 22px 0 10px 0;
      padding: 0 0 0 12px;
    }
    .modalTableLayout {
      width: 100%;
      table{
        display: block;
        width: 100%;
        height: auto;
        min-height: 436px;
        margin: 20 auto 15px;
        padding-bottom: 15px;
        overflow: auto;
        background: url("~@/assets/images/icons/not_find_info.svg") no-repeat 50% 20%;

        thead{
          tr{
            th{
              position: relative;
              height:52px;
              width: 1612px;
              background: $color-table-bg;
              border-top:1px solid $color-border;
              border-bottom:1px solid $color-border;
              font-size:13px;

              .spot{
                position: absolute;
                left: 30px;
              }

              span{
                height: inherit;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }
        tbody{
          td{
            position: relative;
            height:52px;
            border-bottom:1px solid $color-border;
            font-size: $font-13;
            background-color: $color-white;
            .spot{
              position: absolute;
              left: 30px;
            }

            span{
              height: inherit;
              display: flex;
              justify-content: center;
              align-items: center;

              button{
                height: 25px;
                font-size: inherit;
              }
            }
          }
        }
      }
    }
  }
}
</style>

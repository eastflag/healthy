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

  .boardLayout {
      max-width: 1680px;
      min-height: 300px;
      margin: 15px auto 0 auto;
      border: 1px solid $color-bg-border;
      border-radius:  $border-radius-root;
      background-color: $color-white;

      table {
          width: 1612px;
          max-width: 1612px;
          margin: 40px 0 30px 30px;

          tr {
              border-bottom: 1px solid $color-border;
          }

          th {
              vertical-align: middle;
              align-items: center;
              text-align: left;
              padding-left: 16px;
              height: 52px;
              font-size: $font-13;
              background: $color-table-bg;
          }

          td {
              padding:0 32px;
              font-size: $font-12;
              text-align: left;
              vertical-align: middle;

              &:first-child {
                  border-bottom: none;
              }

              .dm_bx{
                  position: relative;
                  width: 100%;
                  height: inherit;
                  display: flex;
                  align-items: center;

                  .innerSelectbx {
                      height: inherit;
                      display: flex;
                      align-items: center;
                      select {
                          width: 260px;
                          margin-right: 5px;
                          background: url('~@/assets/images/icons/search.svg') no-repeat 226px center;

                          option {
                              height: 20px;
                              font-size: $font-20;
                          }
                      }
                  }

                  .datebx {
                      display: inline-block;
                      width: 260px;
                      height: 30px;
                      margin: 0 10px;

                      &:first-child {
                          margin-left: 0;
                      }

                      .calen {
                          background: url('~@/assets/images/icons/calender.svg') no-repeat 226px center;
                          background-size: 20px auto;
                          cursor: pointer;
                          height: 100%;
                      }
                  }

                  .month {
                      span {
                          display: inline-block;
                          width: 60px;
                          height: 30px;
                          border: 1px solid $color-sub;
                          border-right: none;
                          line-height:30px;
                          text-align:center;
                          cursor: pointer;

                          &:last-child {
                              border-right:1px solid $color-sub;
                          }

                          &.on {
                              display: inline-block;
                              width: 60px;
                              height: 30px;
                              text-align: center;
                              line-height: 30px;
                              background-color: $color-sub;
                          }
                      }
                  }
              }
              
              .spot {
                  display: inline-flex;
                  margin-right: 15px;

                  em {
                      width:100px;
                      padding-left:26px;
                  }
              }

              .selectbx {
                  width: 100%;
                  height: inherit;
                  display: flex;
                  align-items: center;
                  select {
                      width: 260px;
                      margin-right: 15px;
                      background: url('~@/assets/images/icons/search.svg') no-repeat 226px center;

                      option {
                          height: 20px;
                          font-size: $font-20;
                      }
                  }
                  input {
                      width: 650px;
                      height: 30px;
                      &:focus{
                          border: 1px solid $color-sub;
                      }
                  }
                  .doubleInput {
                      width: 315px;
                      &:focus {
                          border: 1px solid $color-sub;
                      }
                  }
                  span {
                      margin: 0 7px;
                  }
              }
          }
      }

      .button{
          margin: 20px auto;
          button:first-child{
              margin-right: 15px;
          }
      }
  }

  .listBoardLayout{
      max-width: 1680px;
      min-height: 625px;
      height: auto;
      margin: 10px auto 0 auto;
      border: 1px solid $color-bg-border;
      border-radius:  $border-radius-root;
      background-color: $color-white;

      .title{
          width: 1612px;
          margin: 40px auto 0;
          font-size: $font-16;
          font-weight: bold;

          div>span{
              padding-right: 5px;
          }

          .selectbx{
              select{
                  width: 260px;
                  height: 30px;
                  padding: 0 10px;
                  background:url('~@/assets/images/icons/search.svg') no-repeat 226px center;
                  font-size: $font-12;
                  color: $color-action;

                  option {
                      height: 20px;
                      color:  $color-basic;
                      font-size: $font-20;
                  }
              }
          }
      }

      table{
          display: block;
          width: 1612px;
          max-width: 1612px;
          height: auto;
          min-height: 436px;
          margin: 20px auto 15px;
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
                      justify-content: center;
                      vertical-align: middle;
                      align-items: center;

                      .spot{
                          position: absolute;
                          left: 30px;
                          bottom: 52%;
                      }
                  }
              }
          }
          tbody{
              tr {
                  td{
                      position: relative;
                      height:52px;
                      border-bottom:1px solid $color-border;
                      font-size: $font-13;
                      background-color: $color-white;
                      justify-content: center;
                      vertical-align: middle;
                      text-align: center;

                      &:nth-child(2){
                          span{
                              a {
                                  text-decoration: underline;
                                  color: $color-basic;
                              }
                          }
                      }

                      .spot{
                          position: absolute;
                          left: 30px;
                          bottom: 52%;
                      }

                      span {

                          button{
                              height: 25px;
                              font-size: inherit;
                          }
                      }
                  }
              }
          }
      }
      .letterLimit {
          height: inherit;
          span{
              display: inline-block;
              width: 160px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-bottom: -7px;
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

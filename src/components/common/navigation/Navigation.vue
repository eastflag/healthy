<template>
    <transition name="page" slot-scope="value">
        <div class='navigationLayout'>
            <div class="title">{{title}}</div>
            <ul class='nav'>
                <li v-for="item of items" :key="item"><router-link to="">{{item.title}}</router-link>
                    <ul>
                        <li v-for="item of item.children"><router-link :to="item.path">{{item.title}}</router-link></li>
                    </ul>
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Navigation",
        data () {
            return {
                title:"게시판관리",
                items:[
                    {
                        'title':'FAQ',
                        'children':[
                            {
                                'title':'FAQ목록'
                            },
                            {
                                'title':'FAQ등록/수정'
                            },
                        ]
                    },
                    {
                        'title':'1:1문의',
                        'children':[
                            {
                                'title':'문의목록'
                            },
                        ]
                    },
                    {
                        'title':'공지사항',
                        'children':[
                            {
                                'title':'공지목록'
                            },
                            {
                                'title':'공지등록/수정'
                            },
                        ]
                    },
                ]
            }
        },
      watch: {
        $route(to, from) {
          console.log(to);
          console.log(from);
          if (to.fullPath.startsWith('/member')) {
            this.title = "회원관리";
            this.items = [
              {
                'title':'회원관리',
                'children':[
                  {
                    'title':'고객회원',
                    'path': '/member/member/customer/items'
                  },
                  {
                    'title':'전문인회원',
                    'path': '/member/member/trchnical/items'
                  },
                  {
                    'title':'입점업체 회원',
                    'path': '/member/member/store/items'
                  },
                ]
              },
              {
                'title':'탈퇴회원',
                'children':[
                  {
                    'title':'탈퇴회원리스트',
                    'path': '/member/drop-members/items'
                  },
                ]
              }
            ]
          } else if (to.fullPath.startsWith('/order')) {
            this.title = "주문관리";
            this.items = [
              {
                'title':'주문관리',
                'children':[
                  {
                    'title':'주문접수',
                    'path': '/order/order/order-reception'
                  },
                  {
                    'title':'결제완료',
                    'path': '/order/order/payment-finished'
                  },
                  {
                    'title':'배송대기',
                    'path': '/order/order/waiting-delivery'
                  },
                  {
                    'title':'상품준비중',
                    'path': '/order/order/product-ing'
                  },
                  {
                    'title':'배송중',
                    'path': '/order/order/delivering'
                  },
                  {
                    'title':'배송완료',
                    'path': '/order/order/delivery-complete'
                  },
                  {
                    'title':'구매확정',
                    'path': '/order/order/confirm-purchasing'
                  }
                ]
              },
              {
                'title':'클레임관리',
                'children':[
                  {
                    'title':'주문취소목록',
                    'path': '/order/claim/items'
                  },
                  {
                    'title':'교환목록',
                    'path': '/order/claim/exchange-items'
                  },
                  {
                    'title':'반품목록',
                    'path': '/order/claim/return-items'
                  },
                ]
              },
            ]
          } else if (to.fullPath.startsWith('/cs-center')) {
            this.title = "게시판관리";
            this.items = [
              {
                'title':'FAQ',
                'children':[
                  {
                    'title':'FAQ목록',
                    'path': '/cs-center/faq/items'
                  },
                  {
                    'title':'FAQ등록/수정',
                    'path': '/cs-center/faq/add-items'
                  }
                ]
              },
              {
                'title':'1:1문의',
                'children':[
                  {
                    'title':'문의목록',
                    'path': '/cs-center/one-on-one/items'
                  },
                ]
              },
              {
                'title':'공지사항',
                'children':[
                  {
                    'title':'공지목록',
                    'path': '/cs-center/notice/items'
                  },
                  {
                    'title':'공지등록/수정',
                    'path': '/cs-center/notice/add-items'
                  }
                ]
              },
            ]
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
     #app{
        .navigationLayout{
            position: absolute;
            height: auto;
            min-height: 970px;
            width:200px;
            background: $color-sub;
            z-index: 1;

            .title{
                height: 90px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            ul.nav{
                padding-left: 15px;
                text-align: left;
                font-size: $font-14;

                >li{
                    height: auto;
                    margin-bottom: 5px;
                    padding: 5px 0 0 10px;

                    >a{
                        padding-bottom: 5px;
                        width: 95%;
                        display: inline-block;
                        border-bottom: 1px solid $color-point;
                    }
                    ul{
                        display: inline-block;
                        height: auto;
                        padding-bottom: 5px;

                        li{
                            height: 20px;

                            &:first-child{
                                display: inline-block;
                                margin-top: 3px;
                            }
                            &:hover a{
                                color: $color-action-font !important;
                            }
                        }
                    }

                    &.action{
                        border-radius: 10px 0 0 10px;
                        background-color: $color-basic-bg;
                    }
                }
            }
        }
    }
</style>

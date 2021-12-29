<template>
    <transition name="page" slot-scope="value">
        <div class='navigationLayout'>
            <div class="title">{{title}}</div>
            <ul class='nav'>
                <li v-for="item of items" :key="item.title"><router-link to="">{{item.title}}</router-link>
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
                                'title':'FAQ목록',
                                'path': ''
                            },
                            {
                                'title':'FAQ등록/수정',
                                'path': ''
                            },
                        ]
                    },
                    {
                        'title':'1:1문의',
                        'children':[
                            {
                                'title':'문의목록',
                                'path': ''
                            },
                        ]
                    },
                    {
                        'title':'공지사항',
                        'children':[
                            {
                                'title':'공지목록',
                                'path': ''
                            },
                            {
                                'title':'공지등록/수정',
                                'path': ''
                            },
                        ]
                    },
                ]
            }
        },
      watch: {
        $route(to, from) {
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
          } else if (to.fullPath.startsWith('/super')) {
            this.title = "슈퍼관리";
            this.items = [
              {
                'title':'대시보드',
                'children':[
                  {
                    'title':'대시보드',
                    'path': '/super/main/dash-board'
                  }
                ]
              },
              {
                'title':'환경설정',
                'children':[
                  {
                    'title':'관리자리스트',
                    'path': '/super/admin-member/items'
                  },
                  {
                    'title':'관리자등록',
                    'path': '/super/admin-member/join-items'
                  },
                  {
                    'title':'관리자이력관리',
                    'path': '/super/admin-member/path-histories'
                  },
                ]
              },
              {
                'title':'통합배너관리',
                'children':[
                  {
                    'title':'배너리스트',
                    'path': '/super/banner/items'
                  },
                  {
                    'title':'배너등록/수정',
                    'path': '/super/banner/add-items'
                  }
                ]
              },
              {
                'title':'팝업관리',
                'children':[
                  {
                    'title':'팝업리스트',
                    'path': '/super/pop-up/items'
                  },
                  {
                    'title':'팝업등록/수정',
                    'path': '/super/pop-up/add-items'
                  },
                ]
              },
              {
                'title':'운영정책관리',
                'children':[
                  {
                    'title':'이용약관관리',
                    'path': '/super/service-policy/services'
                  },
                  {
                    'title':'개인정보처리방침',
                    'path': '/super/service-policy/personal-proceddings'
                  },
                  {
                    'title':'고유식별정보수집',
                    'path': '/super/service-policy/identifications'
                  },
                  {
                    'title':'마케팅및광고수신',
                    'path': '/super/service-policy/ad-receptions'
                  },
                  {
                    'title':'개인정보취급위탁',
                    'path': '/super/service-policy/personal-consignments'
                  },
                ]
              },
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
          } else if (to.fullPath.startsWith('/product')) {
            this.title = "상품관리";
            this.items = [
              {
                'title':'상품관리',
                'children':[
                  {
                    'title':'상품목록',
                    'path': '/product/items'
                  },
                  {
                    'title':'상품등록/수정',
                    'path': '/product/add-items'
                  }
                ]
              },
            ]
          } else if (to.fullPath.startsWith('/promotional')) {
            this.title = "프로모션/마케팅";
            this.items = [
              {
                'title':'쿠폰관리',
                'children':[
                  {
                    'title':'쿠폰목록',
                    'path': '/promotional/coupon/items'
                  },
                  {
                    'title':'쿠폰발행요청',
                    'path': '/promotional/coupon/issuance-request'
                  },
                  {
                    'title':'쿠폰등록/수정',
                    'path': '/promotional/coupon/add-items'
                  }
                ]
              },
              {
                'title':'포인트관리',
                'children':[
                  {
                    'title':'포인트관리',
                    'path': '/promotional/point/items'
                  },
                ]
              },
            ]
          }

          else if (to.fullPath.startsWith('/cs-center')) {
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

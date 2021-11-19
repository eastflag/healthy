import Vue from 'vue'
import VueRouter from 'vue-router'

/**Router Page URL*/
/** *************************************** */
/** 경로 `views > healthy > 카테고리`
 * 각 폴더에 해당하는 파일명이 Router와 다릅니다.
 * Router 경로를 통하여 경로 찾아주세요. **/
/** ************************************** */

// healthy login layout
import loginLayOut from "@/views/healthy/layout/loginPageLayout";
import login from "@/views/healthy/login/login";

// healthy mian layout
import mainLayOut from "@/views/healthy/layout/mainPageLayout";

//슈퍼 관리
import DashBoard from '@/views/healthy/super/main/DashBoard'
// import AdminList from '@/views/healthy/super/adminMember/AdminUpload'
import AdminUpload from '@/views/healthy/super/adminMember/JoinItems'
import AdminHistory from '@/views/healthy/super/adminMember/PathHistories'
import JoinSettings from '@/views/healthy/super/adminMember/JoinSettings'
// import BannerList from '@/views/healthy/super/banner/BannerItems'
// import BannerUpload from '@/views/healthy/super/banner/BannerAddItems'
import PopUpList from '@/views/healthy/super/popUp/Items'
import PopUpload from '@/views/healthy/super/popUp/AddItems'
import Services from '@/views/healthy/super/servicePolicy/Services'
import PersonalProcessingPolicyManagement from '@/views/healthy/super/servicePolicy/PersonalProced'
import Identifications from '@/views/healthy/super/servicePolicy/Identifications'
import AdReceptions from '@/views/healthy/super/servicePolicy/AdReceptions'
import PersonalConsign from '@/views/healthy/super/servicePolicy/PersonalConsign'

//회원관리
import CustomerMember from '@/views/healthy/member/member/CustomerMember'
import TrchnicalMember from '@/views/healthy/member/member/TrchnicalMember'
// import {} from ''
// import {} from ''
// import {} from ''

//주문관리
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''

//상담관리
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''

//상품관리
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''

//프로모션/마케팅
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''

//게시판 관리
import FAQ from '@/views/healthy/cscenter/FAQ/FAQList'
import FAQUploadRevise from '@/views/healthy/cscenter/FAQ/FAQUploadRevise'
import InquiryList from '@/views/healthy/cscenter/oneononeIquiry/InquiryList'
import NoticeList from '@/views/healthy/cscenter/notice/NoticeList'
import NoticeUploadRevise from '@/views/healthy/cscenter/notice/NoticeUploadRevise'

//정산
// import {} from ''
// import {} from ''
// import {} from ''

//시스템관리
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''
// import {} from ''

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes :[

        // 로그인(login)
        { path : '/login', component: loginLayOut,
            children: [
                { path : '', name: "Login" , component: login },
            ]
        },

        { path : '/', component : mainLayOut,
            children: [
                //슈퍼관리 대시보드
                { path : 'super/main', redirect: '/super/main/dash-board' },
                { path : 'super/main/dash-board',  name :'DashBoard',  component: DashBoard },

                //슈퍼관리 관리자 환경설정
                { path : 'super/admin-member', redirect: '/super/admin-member/items' },
                // { path : 'super/admin-member/items', name :'AdminList', component: AdminList },
                { path : 'super/admin-member/join-items', name :'AdminUpload', component: AdminUpload },
                { path : 'super/admin-member/path-histories', name :'AdminHistory', component: AdminHistory },
                { path : 'super/admin-member/join-settings', name :'JoinSettings', component: JoinSettings },

                //슈퍼관리 통합배너관리
                { path : 'super/banner', redirect: '/super/banner/items' },
                // { path : 'super/banner/items', name :'BannerList', component: BannerList },
                // { path : 'super/banner/add-items', name :'BannerUpload', component: BannerUpload },

                //슈퍼관리 팝업관리
                { path : 'super/pop-up', redirect: '/super/pop-up/items' },
                { path : 'super/pop-up/items', name :'PopUpList', component: PopUpList },
                { path : 'super/pop-up/add-items', name :'PopUpload', component: PopUpload },

                //슈퍼관리 운영정책관리
                { path : 'super/service-policy', redirect: '/super/service-policy/services' },
                { path : 'super/service-policy/services', name :'Services', component: Services }, //이용약관관리
                { path : 'super/service-policy/personal-proceddings', name :'PersonalPolicyManagement', component: PersonalProcessingPolicyManagement }, //개인정보처리방침관리
                { path : 'super/service-policy/identifications', name :'Identifications', component: Identifications }, //고유식별정보수집동의
                { path : 'super/service-policy/ad-receptions', name :'AdReceptions', component: AdReceptions }, //마케팅 및 광고 수신동의
                { path : 'super/service-policy/personal-consignments', name :'PersonalConsign', component: PersonalConsign }, //개인정보취급위탁 관리


                //회원관리 회원관리
                { path : 'member', redirect: '/member/customer/items' },
                { path : '/member/customer/items', name :'CustomerMember', component: CustomerMember }, //고객 회원
                { path : '/member/trchnical/items', name :'TrchnicalMember', component: TrchnicalMember }, //전문인 회원
                // { path : '/member/trchnical/items', name :'TrchnicalMember', component: TrchnicalMember }, //입점업체 회원
                //회원관리 탈퇴회원
                //회원관리 통계

                //게시판 관리 FAQ
                { path: 'cs-center/faq', redirect: '/cs-center/faq/items' },
                { path: 'cs-center/faq/items', component: FAQ },
                { path: 'cs-center/faq/add-items', component: FAQUploadRevise },

                //게시판 관리 1:1문의
                { path : 'cs-center/one-on-one', redirect: '/cs-center/one-on-one/items' },
                { path : 'cs-center/one-on-one/items', name :'InquiryList', component: InquiryList },

                //게시판 관리 공지사항
                { path : 'cs-center/notice', redirect: '/cs-center/notice/items' },
                { path : 'cs-center/notice/items', name : 'NoticeList', component: NoticeList },
                { path : 'cs-center/notice/add-items', name :'NoticeUploadRevise', component: NoticeUploadRevise },
            ]
        },

        /**

         //주문관리 전체주문
         { path : '', name :'', component: ''},

         //주문관리 주문관리
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},

         //주문관리 클레임관리
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},


         //상담관리 상담관리
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},

         //상담관리 블랙관리
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},


         //상품관리 상품기초정보관리
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},

         //상품관리 상품등록
         { path : '', name :'', component: ''},

         //상품관리 상품일괄관리
         { path : '', name :'', component: ''},

         //프로모션/마케팅 프로모션관리
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},

         //프로모션/마케팅 마케팅관리
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},

         //프로모션/마케팅 쿠폰관리
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},

         //프로모션/마케팅 포인트관리
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},
         */


        /**
         //정산 수수료정산
         { path : '', name :'', component: ''},

         //정산 전문인정산지급
         { path : '', name :'', component: ''},

         //정산 정산관리
         { path : '', name :'', component: ''},

         //시스템관리 시스템관리
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},

         //시스템관리 사용자 접속통계
         { path : '', name :'', component: ''},

         //시스템관리 회원등급관리
         { path : '', name :'', component: ''},
         { path : '', name :'', component: ''},
         */
    ]
})


export default router

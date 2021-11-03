import Vue from 'vue'
import VueRouter from 'vue-router'

/**Router Page URL*/
/** *************************************** */
/** 경로 `views > healthy > 카테고리`
 * 각 폴더에 해당하는 파일명이 Router와 다릅니다.
 * Router 경로를 통하여 경로 찾아주세요. **/
/** ************************************** */

//슈퍼 관리
import DashBoard from '@/views/healthy/super/main/DashBoard'
import AdminList from '@/views/healthy/super/adminMember/Items'
import AdminUpload from '@/views/healthy/super/adminMember/JoinItems'
import AdminHistory from '@/views/healthy/super/adminMember/PathHistories'
import JoinSettings from '@/views/healthy/super/adminMember/JoinSettings'
import BannerList from '@/views/healthy/super/banner/Items'
import BannerUpload from '@/views/healthy/super/banner/AddItems'
import PopUpList from '@/views/healthy/super/popUp/Items'
import PopUpload from '@/views/healthy/super/popUp/AddItems'
import Services from '@/views/healthy/super/servicePolicy/Services'
import PersonalProcessingPolicyManagement from '@/views/healthy/super/servicePolicy/PersonalProced'
import Identifications from '@/views/healthy/super/servicePolicy/Identifications'
import AdReceptions from '@/views/healthy/super/servicePolicy/AdReceptions'
import PersonalConsign from '@/views/healthy/super/servicePolicy/PersonalConsign'

//회원관리
// import {} from ''
// import {} from ''
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
import InquiryFAQ from '@/views/healthy/cscenter/oneononeIquiry/FAQ'
import InquiryList from '@/views/healthy/cscenter/oneononeIquiry/InquiryList'
import InquiryNotice from '@/views/healthy/cscenter/oneononeIquiry/Notice'
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
        { path : '/', redirect : '/main'},

        //슈퍼관리 대시보드
        { path : '/dash-board',  name :'DashBoard',  component: DashBoard },

        //슈퍼관리 관리자 환경설정
        { path : '/admin-list',  name :'AdminList',  component: AdminList },
        { path : '/admin-upload',  name :'AdminUpload',  component: AdminUpload },
        { path : '/admin-history',  name :'AdminHistory',  component: AdminHistory },
        { path : '/join-settings',  name :'JoinSettings',  component: JoinSettings },

        //슈퍼관리 통합배너관리
        { path : '/banner-list',  name :'BannerList',  component: BannerList },
        { path : '/banner-upload',  name :'BannerUpload',  component: BannerUpload },

        //슈퍼관리 팝업관리
        { path : '/pop-list',  name :'PopUpList',  component: PopUpList },
        { path : '/pop-load',  name :'PopUpload',  component: PopUpload },

        //슈퍼관리 운영정책관리
        { path : '/services',  name :'Services',  component: Services }, //이용약관관리
        { path : '/personal-management',  name :'PersonalPolicyManagement',  component: PersonalProcessingPolicyManagement }, //개인정보처리방침관리
        { path : '/identifications',  name :'Identifications',  component: Identifications }, //고유식별정보수집동의
        { path : '/ad-receptions',  name :'AdReceptions',  component: AdReceptions }, //마케팅 및 광고 수신동의
        { path : '/personal-consign',  name :'PersonalConsign',  component: PersonalConsign }, //개인정보취급위탁 관리


/**        //회원관리 회원관리
        { path : '', name :'', component: ''},
        { path : '', name :'', component: ''},
        { path : '', name :'', component: ''},

        //회원관리 탈퇴회원
        { path : '', name :'', component: ''},

        //회원관리 통계
        { path : '', name :'', component: ''},


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


        //게시판 관리 FAQ
        { path : '/faq',  name :'FAQ',  component: FAQ },
        { path : '/faq-upload-revise',  name :'FAQUploadRevise',  component: FAQUploadRevise },

        //게시판 관리 1:1문의
        { path : '/inquiry-faq',  name :'InquiryFAQ',  component: InquiryFAQ },
        { path : '/inquiry-list',  name :'InquiryList',  component: InquiryList },
        { path : '/inquiry-notice',  name :'InquiryNotice',  component: InquiryNotice },

        //게시판 관리 공지사항
        { path : '/notice-list', name : 'NoticeList', component: NoticeList},
        { path : '/notice-upload-revise',  name :'NoticeUploadRevise',  component: NoticeUploadRevise },


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

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
import AdminList from '@/views/healthy/super/adminMember/AdminUpload'
import AdminUpload from '@/views/healthy/super/adminMember/JoinItems'
import AdminHistory from '@/views/healthy/super/adminMember/PathHistories'
import JoinSettings from '@/views/healthy/super/adminMember/JoinSettings'
import BannerList from '@/views/healthy/super/banner/BannerItems'
import BannerUpload from '@/views/healthy/super/banner/BannerAddItems'
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
import StoreCompanyMember from '@/views/healthy/member/member/StoreCompanyMember'
import WithdrawalMemberList from '@/views/healthy/member/withdrawalMember/WithdrawalMemberList'

//주문관리
import OrderReception from '@/views/healthy/order/order/OrderReception'
import PaymentFinished from '@/views/healthy/order/order/PaymentFinished'
import WaitingDelivery from '@/views/healthy/order/order/WaitingDelivery'
import ProductIng from '@/views/healthy/order/order/ProductIng'
import Delivering from '@/views/healthy/order/order/Delivering'
import DeliveryComplete from '@/views/healthy/order/order/DeliveryComplete'
import ConfirmPurchasing from '@/views/healthy/order/order/ConfirmPurchasing'
import OrderCancellationList from '@/views/healthy/order/claim/OrderCancellationList'
import ExchangeList from '@/views/healthy/order/claim/ExchangeList'
import ReturnList from '@/views/healthy/order/claim/ReturnList'

//상담관리
import ConsultationReservation from '@/views/healthy/consultation/consultation/ConsultationReservation'
import ConsultationIng from '@/views/healthy/consultation/consultation/ConsultationIng'
import ConsultationCompletion from '@/views/healthy/consultation/consultation/ConsultationCompletion'
import ConsultationCancel from '@/views/healthy/consultation/consultation/ConsultationCancel'
import BlackList from '@/views/healthy/consultation/blackConsumer/BlackList'
import BlackUpLoad from '@/views/healthy/consultation/blackConsumer/BlackUpLoad'

//상품관리
import ProductList from '@/views/healthy/product/product/ProductList'
import ProductUpLoad from '@/views/healthy/product/product/ProductUpLoad'

//프로모션/마케팅
import CouponList from '@/views/healthy/promotionalMarketing/coupon/CouponList'
import CouponIssuanceRequest from '@/views/healthy/promotionalMarketing/coupon/CouponIssuanceRequest'
import CouponUpLoad from '@/views/healthy/promotionalMarketing/coupon/CouponUpLoad'
import PointManagement from '@/views/healthy/promotionalMarketing/point/PointManagement'

//게시판 관리
import FAQ from '@/views/healthy/cscenter/FAQ/FAQList'
import FAQUploadRevise from '@/views/healthy/cscenter/FAQ/FAQUploadRevise'
import InquiryList from '@/views/healthy/cscenter/oneononeIquiry/InquiryList'
import NoticeList from '@/views/healthy/cscenter/notice/NoticeList'
import NoticeUploadRevise from '@/views/healthy/cscenter/notice/NoticeUploadRevise'

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
                //슈퍼관리 대시보드 => 할당 예정 페이지
                { path : 'super/main', redirect: '/super/main/dash-board' },
                { path : 'super/main/dash-board',  name :'DashBoard',  component: DashBoard }, //대시보드

                //슈퍼관리 관리자 환경설정
                { path : 'super/admin-member', redirect: '/super/admin-member/items' },
                { path : 'super/admin-member/items', name :'AdminList', component: AdminList }, //관리자리스트
                { path : 'super/admin-member/join-items', name :'AdminUpload', component: AdminUpload }, //관리자등록 => 할당 예정 페이지
                { path : 'super/admin-member/path-histories', name :'AdminHistory', component: AdminHistory }, //관리자이력관리
                { path : 'super/admin-member/join-settings', name :'JoinSettings', component: JoinSettings }, //=> 시스템관리 이동 예정

                //슈퍼관리 통합배너관리
                { path : 'super/banner', redirect: '/super/banner/items' },
                { path : 'super/banner/items', name :'BannerList', component: BannerList }, //배너리스트
                { path : 'super/banner/add-items', name :'BannerUpload', component: BannerUpload }, //배너등록/수정 => 할당 예정 페이지

                //슈퍼관리 팝업관리
                { path : 'super/pop-up', redirect: '/super/pop-up/items' },
                { path : 'super/pop-up/items', name :'PopUpList', component: PopUpList }, //팝업리스트
                { path : 'super/pop-up/add-items', name :'PopUpload', component: PopUpload }, //팝업등록/수정 => 할당 예정 페이지

                //슈퍼관리 운영정책관리
                { path : 'super/service-policy', redirect: '/super/service-policy/services' },
                { path : 'super/service-policy/services', name :'Services', component: Services }, //이용약관관리 => 할당 예정 페이지
                { path : 'super/service-policy/personal-proceddings', name :'PersonalPolicyManagement', component: PersonalProcessingPolicyManagement }, //개인정보처리방침관리
                { path : 'super/service-policy/identifications', name :'Identifications', component: Identifications }, //고유식별정보수집동의
                { path : 'super/service-policy/ad-receptions', name :'AdReceptions', component: AdReceptions }, //마케팅 및 광고 수신동의
                { path : 'super/service-policy/personal-consignments', name :'PersonalConsign', component: PersonalConsign }, //개인정보취급위탁 관리


                //회원관리 회원관리
                { path : 'member/member', redirect: 'member/member/customer/items' },
                { path : 'member/member/customer/items', name :'CustomerMember', component: CustomerMember }, //고객 회원
                { path : 'member/member/trchnical/items', name :'TrchnicalMember', component: TrchnicalMember }, //전문인 회원
                { path : 'member/member/store/items', name :'StoreCompanyMember', component: StoreCompanyMember }, //입점업체 회원

                //회원관리 탈퇴회원
                { path : 'member/drop-members/', redirect: 'member/drop-members/items' },
                { path : 'member/drop-members/items', name :'WithdrawalMemberList', component: WithdrawalMemberList }, //탈퇴회원리스트

                //주문관리 주문관리
                { path : 'order/order', redirect: 'order/order/order-reception'},
                { path : 'order/order/order-reception', name :'OrderReception', component: OrderReception }, //주문접수
                { path : 'order/order/payment-finished', name :'PaymentFinished', component: PaymentFinished }, //결제완료
                { path : 'order/order/waiting-delivery', name :'WaitingDelivery', component: WaitingDelivery }, //배송대기
                { path : 'order/order/product-ing', name :'ProductIng', component: ProductIng }, //상품준비중
                { path : 'order/order/delivering', name :'Delivering', component: Delivering }, //배송중
                { path : 'order/order/delivery-complete', name :'DeliveryComplete', component: DeliveryComplete }, //배송완료
                { path : 'order/order/confirm-purchasing', name :'ConfirmPurchasing', component: ConfirmPurchasing }, //구매확정

                //주문관리 클레임관리
                { path : 'order/claim', redirect: 'order/claim/items'},
                { path : 'order/claim/items', name :'OrderCancellationList', component: OrderCancellationList}, //주문취소 목록
                { path : 'order/claim/exchange-items', name :'ExchangeList', component: ExchangeList }, //교환 목록
                { path : 'order/claim/return-items', name :'ReturnList', component: ReturnList }, //반품 목록


                //상담관리 상담관리 => 할당 예정 페이지
                { path : 'consultation/consultation', redirect: 'consultation/consultation/reservation' },
                { path : 'consultation/consultation/reservation', name :'ConsultationReservation', component: ConsultationReservation }, //상담예약
                { path : 'consultation/consultation/consultation-ing', name :'ConsultationIng', component: ConsultationIng }, //상담중
                { path : 'consultation/consultation/completion', name :'ConsultationCompletion', component: ConsultationCompletion }, //상담완료
                { path : 'consultation/consultation/cancel', name :'ConsultationCancel', component: ConsultationCancel }, //상담취소

                //상담관리 블랙관리 => 할당 예정 페이지
                { path : 'consultation/black-consumer', redirect: 'consultation/black-consumer/items' },
                { path : 'consultation/black-consumer/items', name :'BlackList', component: BlackList}, //블랙리스트
                { path : 'consultation/black-consumer/add-items', name :'BlackUpLoad', component: BlackUpLoad}, //블랙등록


                //상품관리 상품관리 => 할당 예정 페이지 (Modal 1개 세팅 된 페이지)
                { path : 'product', redirect: 'product/items' },
                { path : 'product/items', name :'ProductList', component: ProductList } , //상품목록
                { path : 'product/add-items', name :'ProductUpLoad', component: ProductUpLoad } , //상품등록/수정


                //프로모션/마케팅 쿠폰관리 => 할당 예정 페이지 (Modal 세팅 된 페이지)
                { path : 'promotional/coupon', redirect: 'promotional/coupon/items' },
                { path : 'promotional/coupon/items', name :'CouponList', component: CouponList }, //쿠폰목록
                { path : 'promotional/coupon/issuance-request', name :'CouponIssuanceRequest', component: CouponIssuanceRequest },  //쿠폰발행요청
                { path : 'promotional/coupon/add-items', name :'CouponUpLoad', component: CouponUpLoad },  //쿠폰등록/수정

                //프로모션/마케팅 포인트관리 => 할당 예정 페이지
                { path : 'promotional/point/', redirect: 'promotional/coupon/items' }, //포인트관리
                { path : 'promotional/point/items', name :'PointManagement', component: PointManagement }, //포인트관리


                //게시판 관리 FAQ => 할당 예정 페이지
                { path: 'cs-center/faq', redirect: '/cs-center/faq/items' },
                { path: 'cs-center/faq/items', component: FAQ }, //FAQ목록
                { path: 'cs-center/faq/add-items', component: FAQUploadRevise }, //FAQ등록/수정

                //게시판 관리 1:1문의 => 할당 예정 페이지 ( 컴포넌트 세팅 된 페이지 )
                { path : 'cs-center/one-on-one', redirect: '/cs-center/one-on-one/items' },
                { path : 'cs-center/one-on-one/items', name :'InquiryList', component: InquiryList }, //문의목록

                //게시판 관리 공지사항 => 견본 페이지 & 컴포넌트
                { path : 'cs-center/notice', redirect: '/cs-center/notice/items' },
                { path : 'cs-center/notice/items', name : 'NoticeList', component: NoticeList },
                { path : 'cs-center/notice/add-items', name :'NoticeUploadRevise', component: NoticeUploadRevise },
            ]
        },
    ]
})


export default router

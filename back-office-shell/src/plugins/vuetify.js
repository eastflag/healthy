import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import ko from 'vuetify/es5/locale/ko';

import '@/assets/scss/_index.scss';

//svg 이미지 적용플러그인
import logo from '@/assets/images/icon/logo'
import arrowDown from '@/assets/images/icon/arrow_down'
import calender from '@/assets/images/icon/calender'
import pagingArrow from '@/assets/images/icon/paging_nav_arrow'
import actionPagingArrow from '@/assets/images/icon/action_paging_nav_arrow'
import plusBtn from '@/assets/images/icon/plus_btn'

Vue.use(Vuetify)

export default new Vuetify({
    lang: {
        locales: { ko },
        current: 'ko',
    },
    icons:{
        values:{
            logo:{ component: logo },
            arrowDown:{ component: arrowDown },
            calender:{ component: calender },
            pagingArrow:{ component: pagingArrow },
            actionPagingArrow:{ component: actionPagingArrow },
            plusBtn:{ component: plusBtn },
        }
    },
    theme: {
        options: {
            customProperties: true,
        },
        themes:{
            light:{
                accent: '$color-basic',
                anchor: '$color-basic',
                primary: '#1976D2',
                secondary: '#424242',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107'
            }
        }
    }
})

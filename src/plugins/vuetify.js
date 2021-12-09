import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import ko from 'vuetify/es5/locale/ko';

import '@/assets/scss/_index.scss';

//svg 이미지 적용플러그인
import logo from '@/assets/images/vuetfiyIcon/logo'
import arrowDown from '@/assets/images/vuetfiyIcon/arrow_down'
import calender from '@/assets/images/vuetfiyIcon/calender'
import pagingArrow from '@/assets/images/vuetfiyIcon/paging_nav_arrow'
import actionPagingArrow from '@/assets/images/vuetfiyIcon/action_paging_nav_arrow'
import plusBtn from '@/assets/images/vuetfiyIcon/plus_btn'
import closeBtn from '@/assets/images/vuetfiyIcon/modalClose'
import titleListIcon from '@/assets/images/vuetfiyIcon/titleListIcon'
import titleIcon from '@/assets/images/vuetfiyIcon/title_icon'
import person from '@/assets/images/vuetfiyIcon/person'

Vue.use(Vuetify)

export default new Vuetify({
    lang: {
        locales: { ko },
        current: 'ko',
    },
    icons:{
        iconfont: 'mdi',
        values:{
            logo:{ component: logo },
            arrowDown:{ component: arrowDown },
            calender:{ component: calender },
            pagingArrow:{ component: pagingArrow },
            actionPagingArrow:{ component: actionPagingArrow },
            plusBtn:{ component: plusBtn },
            closeBtn:{ component: closeBtn },
            titleListIcon:{ component: titleListIcon },
            titleIcon:{ component: titleIcon },
            person:{ component: person },
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

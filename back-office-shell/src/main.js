import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
import vuetify from '@/plugins/vuetify'
import Vue2Editor from "vue2-editor";

import Vuex from 'vuex';
import store from '@/store/index'
import "@/plugins/global-components";
// import axios from 'axios'

Vue.use(Vue2Editor);
Vue.config.productionTip = false
Vue.use(Vuex);
// Vue.prototype.axios = axios;

new Vue({
  router,
  vuetify,
  Vuex,
  // store: new Vuex.Store(store),
  store,
  render: h => h(App)
}).$mount('#app')

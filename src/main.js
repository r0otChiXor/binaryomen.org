import Vue from 'vue';
import VueRouter from 'vue-router';
import RouterPrefetch from 'vue-router-prefetch';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
import VueTypedJs from 'vue-typed-js';


// router setup
import router from './routes/router';
import i18n from './i18n';
import './registerServiceWorker'
// plugin setup
Vue.use(DashboardPlugin);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(VueTypedJs);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  i18n
});

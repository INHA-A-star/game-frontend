import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import channel from './channel';

Vue.config.productionTip = false;
Vue.use(channel);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');

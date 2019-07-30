import Vue from 'vue';
import { plugin } from 'vue-function-api';
import hooks from '@u3u/vue-hooks';
import App from './App.vue';

import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(plugin);
Vue.use(hooks);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

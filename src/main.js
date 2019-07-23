import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueElectron from 'vue-electron';
Vue.use(VueElectron);

Vue.config.productionTip = false;

// vuetify
import './plugins/vuetify/index';

// vue-codemirror
import './plugins/codemirror/index';

// fontawesome
import './plugins/fontawesome/index';

// Miikun Menu

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

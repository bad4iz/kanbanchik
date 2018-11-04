import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';

import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors';

import 'vuetify/dist/vuetify.min.css' 

Vue.use(Vuetify, {
  theme: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

import('../node_modules/vuetify/dist/vuetify.min.css');


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';
import state from './state';
import parentActions from './plugins'

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [parentActions()],
  strict: process.env.NODE_ENV !== 'production'
});

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations',
    // раскометить хот релоад
    // './state'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations'),
      // раскометить хот релоад
      // state: require('./state')
    })
  })
}

export default store;

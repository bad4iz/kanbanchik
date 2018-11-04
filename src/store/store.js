import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [
      {
        id: 0,
        check: true,
        value: '',
        subcards: [1],

      }
    ],
  },
  getters: {
    lists(state) {
      console.log('list')
      return state.lists;
    },
    card: state => (id) => state.lists.find(card => card.id ===id )
  },
  mutations: {
    updateById(state,  {type, item} ) {
      state[type] = state.lists.map((el) => {
        if(el.id ==item.id) {
          el.value = item.value;
        }
        return el;
      });
      state.element = {value: item.value}
    },
    // update(state, { type, item }) {
    //   state[type] = { ...state[type], item };
    // },
    delete(state, id) {
      state.lists = state.lists.filter(card => card.id !== id)
    }
  },
  actions: {
    delete({ commit }, id) {
      console.log(id);
      commit('delete', id);
    },
  },
});

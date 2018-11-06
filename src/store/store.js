import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: {
      0: {
        id: 0,
        check: true,
        score: 0,
        value: '',
        subcards: [1],
        parent: 0,

      },
      1: {
        id: 1,
        check: true,
        score: 2,
        value: 'one',
        subcards: [2, 3],
        parent: 0,
      },
      2: {
        id: 2,
        check: false,
        score: 0,
        value: 'two',
        subcards: [],
        parent: 1,
      },
      3: {
        id: 3,
        check: false,
        score: 0,
        value: 'three',
        subcards: [],
        parent: 1,
      },
    },
  },
  getters: {
    getList(state) {
      console.log('list');
      return state.list;
    },
    getCard: state => id => state.list[id],
    getScore: state => id => state.list[id].score,
  },
  mutations: {
    // updateById(state,  {type, item} ) {
    //   state[type] = state.lists.map((el) => {
    //     if(el.id ==item.id) {
    //       el.value = item.value;
    //     }
    //     return el;
    //   });
    //   state.element = {value: item.value}
    // },
    // update(state, { type, item }) {
    //   state[type] = { ...state[type], item };
    // },
    deleteCard(state, id) {
      state.list = state.list[id];
    },
    addCard(state, parent) {
      let { list } = state;
      const newCard = {
        id: new Date().getTime(),
        subcards: [],
        parent,
      };
      list = { ...list, [newCard.id]: newCard };

      const parentCard = list[parent];
      parentCard.subcards.push(newCard.id);

      state.list = { ...list, [parent]: parentCard };

      console.log(state.list);
    },
    increment(state, id) {
      state.list = {...state.list, [id]:{...state.list[id], score:state.list[id].score+1}};
    },
    decrement(state, id) {
      state.list = {...state.list, [id]:{...state.list[id], score:state.list[id].score-1}};
    },
  },
  actions: {
    deleteCard({ commit }, id) {
      commit('deleteCard', id);
    },
    addCard({ commit }, parent) {
      commit('addCard', parent);
    },
    increment({ commit }, id) {
      commit('increment', id);
    },
  },
});

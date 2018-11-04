import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: {
      0: {
        id: 0,
        check: true,
        value: '',
        subcards: [1],
        parent: 0

      },
      1: {
        id: 1,
        check: true,
        value: 'dddddd',
        subcards: [2, 3],
        parent: 0
      },
      2: {
        id: 2,
        check: false,
        value: '',
        subcards: [],
        parent: 1
      },
      3:{
        id: 3,
        check: false,
        value: '',
        subcards: [],
        parent: 1
      },
  },
},
  getters: {
    getList(state) {
      console.log('list')
      return state.list;
    },
    getCard: state => (id) => {
      return state.list[id]
    }
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
    delete(state, id) {
      state.list = state.list.filter(card => card.id !== id)
    },
    addCard(state, parent) {
      let { list } = state;
      const newCard = {
        id: new Date().getTime(),
        subcards: [],
        parent: parent,
      }
      list = {...list, [newCard.id]:newCard}

      const parentCard = list[parent];
      console.log(parentCard.subcards)
      parentCard.subcards.push(newCard.id);

      state.list = {...list, [parent]:parentCard}

      console.log(state.list);
    }
  },
  actions: {
    delete({ commit }, id) {
      console.log(id);
      commit('delete', id);
    },
    addCard({ commit }, parent) {
      console.log(parent);
      commit('addCard', parent)
    }
  },
});

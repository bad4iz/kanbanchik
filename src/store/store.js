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
      // todo: сделать удаление рекурсивно детей
      let { list } = state;
      if(list[id].subcards && list[id].subcards.length) {
        list[id].subcards.forEach(cardId => {
          this.commit('deleteCard', cardId);
        });
      }      
      
      // delete parent
      if(list[id].parent) {
        const parent = list[list[id].parent]
        while (parent.subcards.indexOf(id) !== -1) {
          parent.subcards.splice(parent.subcards.indexOf(id), 1);
        }
        list = {...list, [list[id].parent]:parent}
      }
      delete list[id];
      state.list = list;
    },
    addCard(state, parent) {
      // развернул для понятности
      let { list } = state;
      const newCard = {
        id: new Date().getTime()+Math.round(Math.random()*100),
        subcards: [],
        score: 0,
        parent,
      };
      list = { ...list, [newCard.id]: newCard };

      const parentCard = list[parent];
      parentCard.subcards.push(newCard.id);

      state.list = { ...list, [parent]: parentCard };
    },
    increment(state, id) {
      // тут свернул 
      state.list = {...state.list, [id]:{...state.list[id], score:state.list[id].score+1}};
      // console.log(this)
      if(state.list[id].parent){
        this.commit('increment', state.list[id].parent)
      }
      console.log(state.list)
    },
    decrement(state, id) {
      // тут свернул тоже
      state.list = {...state.list, [id]:{...state.list[id], score:state.list[id].score-1}};
      if(state.list[id].parent){
        this.commit('decrement', state.list[id].parent)
      }
    },
  },
  actions: {
    deleteCard({ commit }, id) {
      commit('deleteCard', id);
    },
    addCard({ commit }, parent) {
      commit('addCard', parent);

    },
    increment({ dispatch, commit }, id) {
      commit('increment', id);
    },
    decrement({ dispatch, commit }, id) {
      commit('decrement', id);
    },
  },
});

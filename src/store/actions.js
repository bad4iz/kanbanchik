export const deleteCard = ({ commit }, id) => {
  commit('deleteCard', id);
}
export const addCard = ({ commit }, parent) => {
  commit('addCard', parent);
  commit('addCard', parent);
  commit('addCard', parent);
  commit('addCard', parent);
  commit('addCard', parent);

}
export const increment = ({ dispatch, commit }, id) => {
  commit('increment', id);
}
export const decrement = ({ dispatch, commit }, id) => {
  commit('decrement', id);
}

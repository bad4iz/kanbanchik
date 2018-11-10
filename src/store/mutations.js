export const deleteCard = (state, id) => {
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
}

export const addCard = (state, parent) => {
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
}

// todo state.count++
export const increment = (state, id) => {
  // тут свернул и сделал имутабле
  // state.list = {...state.list, [id]:{...state.list[id], score:state.list[id].score+1}};
  // вот как все просто без имутабле  
  state.list[id].score++;
}
export const decrement = (state, id) => {
  // тут свернул тоже и сделал имутабле
  // state.list = {...state.list, [id]:{...state.list[id], score:state.list[id].score-1}};
  // вот как все просто без имутабле
  state.list[id].score++;
  
  
  if(state.list[id].parent){
    this.commit('decrement', state.list[id].parent)
  }
}
// 
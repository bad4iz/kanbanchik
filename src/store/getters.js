export const getList = (state) => state.list;
    
export const getCard = state => id => state.list[id];

export const getScore = state => id => state.list[id].score;
 
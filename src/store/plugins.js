export default function parentActions() {
  return store => {    
    store.subscribe((mutation, state) => {
      if (mutation.type === 'increment' || mutation.type === 'decrement') {
        const parentId = state.list[mutation.payload].parent;
        if (parentId){
          store.commit(mutation.type, parentId);
        }
      }
    });
  };
}
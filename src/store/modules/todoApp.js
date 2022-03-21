const storage = {
    fetch(){
    const arr = []
    if(localStorage.length>0){
        for(var i=0; i<localStorage.length; i++){
          if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
            try{
            arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));  
            }catch(e){}
          }
        }
    }
    return arr;
  }
}

const state = {
    todoItems: storage.fetch()
}

const getters = {
    storedTodoItems(state){
        return state.todoItems;
  }
}

const mutations = {
    addOneItem(state, todoItem){
        var obj={completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj); 
      },
      removeOneItem(state, payload){
        state.todoItems.splice(payload.index, 1);
        localStorage.removeItem(payload.todoItem.item);
      },
      toggleOneItem(state, payload){
        payload.todoItem.completed = !payload.todoItem.completed;
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(state.todoItems[payload.index]));
      },
      clearAllItems(state){
        state.todoItems = [];
        localStorage.clear();
      }
}

export default{
    state,
    getters,
    mutations
}
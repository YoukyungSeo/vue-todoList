
    addOneItem = (state, todoItem) => {
      var obj={completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj); 
    },
    removeOneItem = (state, payload) => {
      state.todoItems.splice(payload.index, 1);
      localStorage.removeItem(payload.todoItem.item);
    },
    toggleOneItem = (state, payload) => {
      payload.todoItem.completed = !payload.todoItem.completed;
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(state.todoItems[payload.index]));
    },
    clearAllItems = (state) => {
      state.todoItems = [];
      localStorage.clear();
    }
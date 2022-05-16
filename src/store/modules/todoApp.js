import { registerTodo, listTodo, clearAllTodo, deleteTodo, toggleTodo } from "../../api";

const storage = {
  async fetch(){
    const arr = []
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

const actions = {
  async listItems(){
    let arr = [];
    let items = await listTodo();
    console.log(items);
    for(var i=0; i<items.length; i++){
      arr.push(items[i]);
    }

    setTimeout(() => {
      console.log(arr, state.todoItems);
    }, 1000);
    state.todoItems = arr;
  }
}

const mutations = {
      async addOneItem(state, todoItem){
        var obj={completed: false, item: todoItem};
        await registerTodo(obj);
        state.todoItems = await listTodo();
        console.log('!!! : ', state.todoItems)
      },
      async removeOneItem(state, payload){
        var obj={completed: false, item: payload.todoItem.item};
        await deleteTodo(obj);
        state.todoItems = await listTodo();
      },
      async toggleOneItem(state, payload){
        payload.todoItem.completed = !payload.todoItem.completed;
        var obj={completed: payload.todoItem.completed, item: payload.todoItem.item}
        await toggleTodo(obj);
        state.todoItems = await listTodo();
      },
      async clearAllItems(state){
        state.todoItems = [];
        await clearAllTodo();
      }
}

export default{
    state,
    getters,
    mutations,
    actions
}
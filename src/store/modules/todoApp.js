import { registerTodo, deleteTodo, toggleTodo, clearAllTodo, listTodo, updateTodo } from "../../api";

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
    // const loginData = JSON.parse(localStorage.getItem('loginData'))
    // let arr = [];
    // let items = await listTodo(loginData);
    setTodoItems()
  }
}
const setTodoItems = async () => {
  const loginData = JSON.parse(localStorage.getItem('loginData'))
  let arr = []
  let items = await listTodo(loginData);
  if(items.resultInfo.result == true){
    // for(var i=0; i<items.todoInfo.length; i++){
    //   arr.push(items.todoInfo[i]);
    // }
    setTimeout(() => {
      console.log(arr, state.todoItems);
    }, 1000);
    // state.todoItems = arr;
    state.todoItems = items.todoInfo;
  }
}
const mutations = {
      async addOneItem(state, todoItem){
        console.log(todoItem)
        var obj={completed: false, title: todoItem.title, content: todoItem.content, id:todoItem.id};
        let res = await registerTodo(obj);
        console.log(res);
        if(res.data.resultInfo.result == false){
          alert(res.data.resultInfo.errorMsg);
        }
        setTodoItems()
        console.log('!!! : ', state.todoItems.todoInfo)
      },
      async removeOneItem(state, payload){
        var obj={completed: false, num: payload.todoItem.num, id: payload.todoItem.id};
        await deleteTodo(obj);
        setTodoItems()
      },
      async toggleOneItem(state, payload){
        payload.todoItem.completed = !payload.todoItem.completed;
        var obj={completed: payload.todoItem.completed, num: payload.todoItem.num}
        await toggleTodo(obj);
        setTodoItems()
      },
      async clearAllItems(state, todoItem){
        const userData = JSON.parse(todoItem);
        console.log('+++++++++++++++++',userData)
        await clearAllTodo(userData);
        state.todoItems = [];
      },
      async updateOneItem(state, todoItem){
        var obj={id:todoItem.id, title: todoItem.title, num: todoItem.num, content: todoItem.content}
        console.log(obj);
        let res = await updateTodo(obj);
        if(res.data.resultInfo.result == false){
          alert(res.data.resultInfo.errorMsg);
        }
        setTodoItems()
      }
}

export default{
    state,
    getters,
    mutations,
    actions
}
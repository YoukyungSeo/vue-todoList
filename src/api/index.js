import axios from 'axios';

const serverPath = 'http://10.112.58.190/todo'

async function registerTodo(todoItems) {
  const url = serverPath;
  let res = await axios.post(url, todoItems);
  console.log(res);
}

async function deleteTodo(todoItems) {
    const url = serverPath+'?item='+todoItems.item;
    let res = await axios.delete(url);
    console.log(res);
}

async function toggleTodo(todoItems) {
    const url = serverPath;
    let res = await axios.put(url, todoItems);
    console.log(res);
}

async function clearAllTodo() {
    const url = serverPath;
    let res = await axios.get(url);
    console.log(res);
}

async function listTodo() {
    const url = serverPath+'/list';
    let res = await axios.get(url);
    return res.data;
}

export { registerTodo, deleteTodo, toggleTodo, clearAllTodo, listTodo };
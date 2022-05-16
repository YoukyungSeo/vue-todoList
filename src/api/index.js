import axios from 'axios';

async function registerTodo(todoItems) {
  const url = 'http://10.112.58.190:8080/todo';
  let res = await axios.post(url, todoItems);
  console.log(res);
}

async function deleteTodo(todoItems) {
    const url = 'http://10.112.58.190:8080/todo?item='+todoItems.item;
    let res = await axios.delete(url);
    console.log(res);
}

async function toggleTodo(todoItems) {
    const url = 'http://10.112.58.190:8080/todo';
    let res = await axios.put(url, todoItems);
    console.log(res);
}

async function clearAllTodo() {
    const url = 'http://10.112.58.190:8080/todo';
    let res = await axios.get(url);
    console.log(res);
}

async function listTodo() {
    const url = 'http://10.112.58.190:8080/todo/list';
    let res = await axios.get(url);
    return res.data;
}

export { registerTodo, deleteTodo, toggleTodo, clearAllTodo, listTodo };
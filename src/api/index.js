import axios from 'axios';

const todoPath = 'http://10.112.58.190/todo'

// const todoPath = 'http://localhost:8080/todo'

async function registerTodo(todoItems) {
  const url = todoPath;
  let res = await axios.post(url, todoItems);
  console.log(res);
}

async function deleteTodo(todoItems) {
    const url = todoPath+'?num='+todoItems.num+'&id='+todoItems.id;
    let res = await axios.delete(url);
    console.log(res);
}

async function toggleTodo(todoItems) {
    const url = todoPath;
    let res = await axios.put(url, todoItems);
    console.log(res);
}

async function clearAllTodo() {
    const url = todoPath;
    let res = await axios.get(url);
    console.log(res);
}

async function listTodo(todoItems) {
    const url = todoPath+'/list';
    let res = await axios.post(url, todoItems);
    return res.data;
}

async function updateTodo(todoItems) {
    const url = todoPath+'/detail';
    let res = await axios.put(url, todoItems);
    console.log(res);
}

export { registerTodo, deleteTodo, toggleTodo, clearAllTodo, listTodo, updateTodo };
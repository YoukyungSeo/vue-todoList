<template>
 <div id="app">
  <todo-header></todo-header>
  <todo-input></todo-input>
  <todo-list></todo-list>
  <todo-footer></todo-footer>
 </div>
</template>

<script>
import TodoFooter from './component/TodoFooter.vue'
import TodoHeader from './component/TodoHeader.vue'
import TodoInput from './component/TodoInput.vue'
import TodoList from './component/TodoList.vue'

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #F6F6F6;
  font-family: Kanit;
}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
}
</style>

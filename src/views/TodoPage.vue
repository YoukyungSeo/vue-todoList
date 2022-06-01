<template>
 <div>
  <todo-header></todo-header>
  <todo-input></todo-input>
  <todo-list></todo-list>
  <todo-footer></todo-footer>
 </div>
</template>

<script>
import TodoFooter from '../component/TodoFooter.vue'
import TodoHeader from '../component/TodoHeader.vue'
import TodoInput from '../component/TodoInput.vue'
import TodoList from '../component/TodoList.vue'

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
</style>

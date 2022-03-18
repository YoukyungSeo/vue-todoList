<template>
 <div id="app">
  <todo-header></todo-header>
  <todo-input></todo-input>
  <todo-list v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></todo-list>
  <todo-footer v-on:clearAll="clearAllItems"></todo-footer>
 </div>
</template>

<script>
import TodoFooter from './component/TodoFooter.vue'
import TodoHeader from './component/TodoHeader.vue'
import TodoInput from './component/TodoInput.vue'
import TodoList from './component/TodoList.vue'

export default {
   methods: {
    // addOneItem(todoItem){
    //   var obj={completed: false, item: todoItem};
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj); 
    // },
    removeOneItem(todoItem, index){
      this.todoItems.splice(index, 1);
      localStorage.removeItem(todoItem.item);
    },
    toggleOneItem(todoItem){
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(){
      this.todoItems = [];
      localStorage.clear();
    }
  },
  data(){
    return{
    todoItems: []
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  created(){
    if(localStorage.length>0){
      for(var i=0; i<localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          try{
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));  
          }catch(e){}
        }
      }
    }
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

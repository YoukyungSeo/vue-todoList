<template>
  <div>
    <TransitionGroup name="list" tag="ul">
          <li class="shadow" v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="index">
            <span>{{todoItem.createDate.substr(5, 11)}}</span>
            <i style="margin-left:10px" class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}"
              v-on:click="toggleComplete({todoItem, index})"></i>
            <span style="overflow:hidden;" v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.title}}</span>
            <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
              <i class="fas fa-trash"></i>
            </span>
            <span class="updateBtn" style="margin-left:10px" v-on:click="updateTodo">
              <i class="fas fa-eraser"></i>
            </span>
            <span class="showBtn" v-show="!showContent" v-on:click="showContent = !showContent" style="margin-left:10px">
              <i class="fas fa-caret-down"></i>
            </span>
            <span class="showBtn" v-show="showContent" v-on:click="showContent = !showContent" style="margin-left:10px">
              <i class="fas fa-caret-up"></i>
            </span> 
          </li>
          <div class="inputBox2 shadow">
            <textarea style="font-family:'Kanit';"></textarea>
          </div>
    </TransitionGroup>
  </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'
import { store } from '../store/store'

export default {
    data(){
      return{
        showContent:false,
      }
    },
    mounted: ( ) => {
      store.dispatch('listItems');
    },
    methods: {
        ...mapMutations({
          removeTodo: 'removeOneItem',
          toggleComplete: 'toggleOneItem',
          updateTodo: 'updateOneItem'
        })
    },
    computed: {
        ...mapGetters(['storedTodoItems'])
        // 객체 리터럴로 받는 경우
        // ...mapGetters({
        //   todoItem: 'storedTodoItems' })
    }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 30px;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.inputBox2 textarea{
    width: 95%;
    border-style: none;
    font-size: 0.9rem;
    resize: none;
}
.checkBtn {
  line-height: 45px;
  /* color: black; */
  color: #1a73e8;
  margin-top: 3px;
  margin-right: 10px;
}
.checkBtnCompleted {
  /* color: #62acde; */
  color: darkgray;
}
.textCompleted {
  text-decoration: line-through;
  color: darkgray;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
/* 트랜지션 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style> 
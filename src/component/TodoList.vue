<template>
  <div>
    <TransitionGroup name="list" tag="ul">
          <li class="shadow" v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item">
            <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}"
              v-on:click="toggleComplete(todoItem, index)"></i>
            <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
            <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
              <i class="fas fa-eraser"></i>
            </span>
          </li>
  </TransitionGroup>
</div>
</template>

<script>
export default {
    methods: {
        removeTodo(todoItem, index) {
          this.$store.commit('removeOneItem', {todoItem, index});
          // 객체인 상태로 todoItem 전송
        },
        toggleComplete(todoItem, index){
          this.$store.commit('toggleOneItem', {todoItem, index});
        }
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
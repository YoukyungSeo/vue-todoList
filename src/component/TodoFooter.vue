<template>
  <div class="clearAllContainer shadow">
      <span class="clearAllBtn" v-on:click="clearTodo(userData)">Clear All</span>
      <p>By. Aurora</p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data(){
      return{
        userData: localStorage.getItem('loginData')
      }
    },
    methods: {
      ...mapMutations({
        clearTodo: 'clearAllItems'
      })
    }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
  font-weight: 900;
}
.clearAllBtn {
  color: #1a73e8;
  display: block;
  margin-top: 10px;
}
p{
    color:rgb(119, 118, 118);
}
</style>
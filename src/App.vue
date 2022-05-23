<template>
 <div id="app">
  <app-header></app-header>
  <router-view></router-view>
 </div>
</template>

<script>
import AppHeader from './component/AppHeader.vue';
export default {
  components: {
    AppHeader,
  },
};
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

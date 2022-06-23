<template>
  <header>
      <router-link to="/web/todo">Home |</router-link>
      <router-link to="/web/mypage" v-show="isLogin">My Page |</router-link>
      <router-link to="/web/login" v-show="!isLogin && !isLoginPage">Login |</router-link>
      <a href="" v-show="isLogin" @click="logout"> Logout</a>
      <router-link to="/web/signup" v-show="!isLogin"> Sign Up</router-link>
  </header>
</template>

<script>
import { EventBus } from '../utils/EventBus'

export default {
  data(){
    return{
      isLogin: false,
      isLoginPage: false,
    }
  },
  created: function(){
    if(localStorage.getItem('loginData')){
      this.isLogin = true;
    }else{
      this.isLogin = false;
    }
    this.isLoginPage = (window.location.pathname == '/web/login')
  },
  mounted: function() {
    EventBus.$on('login', () => {
      this.isLogin = true;
    })
    EventBus.$on('PageChange', () => {
      this.isLoginPage = (window.location.pathname == '/web/login')
    })
  },
  methods: {
    logout(){
      localStorage.removeItem('loginData')
      localStorage.removeItem('autoChecked')
      this.isLogin = false;
      this.$router.push('/web/login')
    }
  }
}
</script>

<style>
header{
    text-align: right;
    margin-left: auto;
}
</style>
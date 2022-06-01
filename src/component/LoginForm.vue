<template>      
  <div>
    <h1>Login</h1>
    <form class="wrapper" @submit.prevent="login">
      <label>아이디</label>
      <input type="text"  class="form-control" placeholder="아이디" v-model="id" required=""/><br/>
      <label>비밀번호</label>
      <input type="password" class="form-control" placeholder="비밀번호" v-model="pw" required=""/><br/>
      <div class="checkBox">
      <input type="checkbox" v-model="checkedValues" value="autoChecked" checked>자동 로그인
      <input type="checkbox" v-model="checkedValues" value="idChecked" >ID 저장
      </div>
      <button class="loginBtn" type="submit"><i class="fa fa-arrow-right"></i></button>   
      <p>By. Aurora</p>
    </form>
  </div>
</template>

<script>
import { memberLogin } from '../api/memberIndex'
import { EventBus } from '../utils/EventBus'

export default{
  data(){
    return{
      id: '',
      pw: '',
      checkedValues: [],
    }
  },
  methods: {
    async login(){
      const userData = {
        id: this.id,
        pw: this.pw,
      }
      let res = await memberLogin(userData)
      if(res.data.resultInfo.result == true){
        alert(res.data.resultInfo.errorMsg);
        localStorage.setItem('loginData', JSON.stringify(userData))
        EventBus.$emit('login')
        this.$router.push('/web/todo')
      }else{
        if(res.data.resultInfo.errorCode == 'E-001')
        {
          alert(res.data.resultInfo.errorMsg);
        }else{
          alert(res.data.resultInfo.errorMsg);
        }
      }
    },
    autoChecked(){
      if(localStorage.getItem('loginData')){
        
      }
    }
  }
  }
</script>

<style>
</style>

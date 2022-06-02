<template>      
  <div>
    <h1>Login</h1>
    <form class="wrapper" @submit.prevent="login">
      <label>아이디</label>
      <input type="text"  class="form-control" placeholder="아이디" v-model="id" required=""/>
      <label>비밀번호</label>
      <input type="password" class="form-control" placeholder="비밀번호" v-model="pw" required=""/><br/>
      <div class="checkBox">
        <i class="fas fa-check CheckBtn" v-bind:class="{CheckedBtn: autoChecked}" v-on:click="autoCheckedCompleted"></i>
        <span style="overflow:hidden">자동 로그인</span>&nbsp;&nbsp;&nbsp;
        <i class="fas fa-check CheckBtn" v-bind:class="{CheckedBtn: idChecked}" v-on:click="isIdCheckedCompleted"></i>
        <span style="overflow:hidden">ID 저장</span>
        <!-- <input type="checkbox" v-model="checkedValues" value="autoChecked" v-on:change="autoChecked">자동 로그인
        <input type="checkbox" v-model="checkedValues" value="idChecked">ID 저장 -->
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
      autoChecked: false,
      idChecked: false,
    }
  },
  mounted: function(){
    let idCheckedData = localStorage.getItem('idChecked');
    if(idCheckedData){
      idCheckedData = JSON.parse(idCheckedData)
      if(idCheckedData.idChecked == true){
        this.id = idCheckedData.id
        this.idChecked = idCheckedData.idChecked
      }
    }
    let autoCheckedData = localStorage.getItem('autoChecked')
    let loginData = localStorage.getItem('loginData')
    if(autoCheckedData && loginData){
        this.id = loginData.id
        this.pw = loginData.pw
        login()
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
        if(this.autoChecked == true){
          localStorage.setItem('autoChecked', this.autoChecked)
        }
        if(this.idChecked == true){
          localStorage.setItem('idChecked', JSON.stringify({idChecked: this.idChecked, id: this.id}))
        }
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
    autoCheckedCompleted(){
      this.autoChecked = !this.autoChecked
      localStorage.setItem('autoChecked', this.autoChecked)
    },
    isIdCheckedCompleted(){
      this.idChecked = !this.idChecked
      localStorage.setItem('idChecked', JSON.stringify({idChecked: this.idChecked, id: this.id}))
    },
  }
}
</script>

<style>
.CheckedBtn {
  color: #1a73e8;
}
</style>

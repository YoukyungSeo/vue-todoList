<template>      
  <div>
    <h1>Sign Up</h1>
    <form class="wrapper" @submit.prevent="submitForm">
      <label>아이디</label>
      <input type="text" class="form-control" style="margin-left: 45px" placeholder="아이디" v-model="id" required="" v-on:change="resetIdChecked"/>
      <span class="idCheckBtn" v-on:click="idCheck"><i class="fa fa-check"></i></span><br/>
      <label>비밀번호</label>
      <input type="password" class="form-control" placeholder="비밀번호" v-model="pw" required=""/><br/>
      <label>비밀번호 확인</label>
      <input type="password" class="form-control" placeholder="비밀번호 확인" v-model="pw2" required=""/><br/>
      <label>이름</label>
      <input type="text" class="form-control" placeholder="이름" v-model="name" required=""/><br/>
      <label>전화번호</label>
      <input type="text" class="form-control" placeholder="전화번호" v-model="phone" required=""/><br/> 
      <button class="signupBtn" type="submit"><i class="fa fa-arrow-right"></i></button>   
      <p>By. Aurora</p>
    </form>
  </div>
</template>

<script>
import { memberJoin, memberIdCheck } from '../api/memberIndex';

export default {
  data() {
    return {
      id: '',
      pw: '',
      pw2: '',
      name: '',
      phone: '',
      isIdChecked: false,
    };
  },
  methods: {
    userData(){
      const userData = {
        id: this.id.trim(),
        pw: this.pw.trim(),
        name: this.name.trim(),
        phone: this.phone.trim(),
      }
      return userData
    },
    resetIdChecked(){
      this.isIdChecked = false;
    },
    async idCheck(){
      const userData = this.userData();
      let res = await memberIdCheck(userData)
      if(res.data.resultInfo.result == true){
        alert(res.data.resultInfo.errorMsg)
        this.isIdChecked = true
      }else{
        alert(res.data.resultInfo.errorMsg)
      }
    },
    async submitForm() {
      console.log(this.isIdChecked);
      const userData = this.userData();
      if(this.isIdChecked == false){
        alert('ID 중복 확인을 해주세요.')
      }else{
        if(this.pw == this.pw2)
        {
          let res = await memberJoin(userData)
          if(res.data.resultInfo.result == true){
           alert(res.data.resultInfo.errorMsg);
           window.location.href='/web/login'
          }else{
           alert(res.data.resultInfo.errorMsg);
          }
        }else{
          alert('비밀번호가 일치하지 않습니다. 다시 입력해 주세요.');
        }
      }
    },
  },
};
</script>

<style>
</style>

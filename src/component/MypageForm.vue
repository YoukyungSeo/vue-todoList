<template>      
  <div>
    <h1>My Page</h1>
    <form class="wrapper" @submit.prevent="updateForm">
      <label>아이디</label>
      <input type="text" class="form-control" placeholder="아이디" v-model="id" readonly/><br/>
      <label>비밀번호</label>
      <input type="password" class="form-control" placeholder="비밀번호" v-model="pw" required="" style=""/><br/>
      <label>비밀번호 확인</label>
      <input type="password" class="form-control" placeholder="비밀번호 확인" v-model="pw2" required=""/><br/>
      <label>이름</label>
      <input type="text" class="form-control" placeholder="이름" v-model="name" required=""/><br/>
      <label>전화번호</label>
      <input type="text" class="form-control" placeholder="전화번호 (숫자만 입력 가능)" v-model="phone" required="" v-on:keyup="inputPhone" maxlength="13"/><br/>
      <button class="signupBtn" type="submit">수정</button>
      <span class="signupBtn" v-on:click="deleteMember">탈퇴</span>
      <p>By. Aurora</p>
    </form>
  </div>
</template>

<script>
import { memberInfo, memberUpdate, memberDelete } from '../api/memberIndex';

export default {
  data(){
    return{
      id: '',
      pw: '',
      pw2: '',
      name: '',
      phone: '',
    }
  },
  mounted: async function() {
      if(localStorage.getItem('loginData')){
        let loginData = JSON.parse(localStorage.getItem('loginData'))
        let res = await memberInfo(loginData.id)
        let userInfo= res.data.userInfo
        localStorage.setItem('loginData', JSON.stringify(userInfo))
        this.id = userInfo.id
        this.pw = userInfo.pw
        this.pw2 = userInfo.pw
        this.name = userInfo.name
        this.phone = userInfo.phone
      }else{
        alert(res.data.resultInfo.errorMsg)
      }
  },
  methods:  {
    userData(){
      const crypto = require('crypto');
      const userData = {
        id: this.id.trim(),
        pw: crypto.createHash('sha256').update(this.pw.trim()).digest('hex'),
        name: this.name.trim(),
        phone: this.phone.trim(),
      }
      return userData
    },
    async updateForm(){
      if(localStorage.getItem('loginData')){
        if(this.pw2 == this.pw){
          const userData = this.userData();
          let res = await memberUpdate(userData);
          localStorage.setItem('loginData', JSON.stringify(userData));
          alert(res.data.resultInfo.errorMsg)
        }else{
          alert('비밀번호가 일치하지 않습니다.')
        }
      }else{
        alert("로그인이 필요합니다.")
        this.$router.replace('/web/login')
      }
    },
    async deleteMember(){
      if(localStorage.getItem('loginData')){
        const userData = this.userData();
        let res = await memberDelete(userData.id);
        localStorage.removeItem('loginData')
        localStorage.removeItem('idChecked')
        localStorage.removeItem('autoChecked')
        alert(res.data.resultInfo.errorMsg)
        this.$router.replace('/web/login')
      }else{
        alert("로그인이 필요합니다.")
        this.$router.replace('/web/login')
      }
    },
    async inputPhone(){
    var number = this.phone.replace(/[^0-9]/g, "");
    var phone = "";
    if(number.length < 4) {
        return number;
    } else if(number.length < 7) {
        phone += number.substr(0, 3);
        phone += "-";
        phone += number.substr(3);
    } else if(number.length < 11) {
        phone += number.substr(0, 3);
        phone += "-";
        phone += number.substr(3, 3);
        phone += "-";
        phone += number.substr(6);
    } else {
        phone += number.substr(0, 3);
        phone += "-";
        phone += number.substr(3, 4);
        phone += "-";
        phone += number.substr(7);
    }
      this.phone = phone;
    },
  },
};
</script>

<style scoped>
</style>
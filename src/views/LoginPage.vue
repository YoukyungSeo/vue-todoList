<template>
  <div>
      <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from '../component/LoginForm.vue'

export default {
  components: {
    LoginForm,
    },
}
</script>

<style>
.wrapper{
  position: absolute;
	top: 100;
	left: 100;
	width: 100%;
	height: 100%;
}
.form-control {
    position: relative;
    font-size: 13px;
    height: auto;
    padding: 15px;
    border-radius: 6px;
    width: 50%;
    border-color: #fff;
}
.loginBtn {
    color: #fff;
    background-color: #1A73E8;
    padding: 13px;
    font-size: 15px;
    border-radius: 6px;
    margin-top: 40px;
    border-style: hidden;
}
.idCheckBtn {
    color: #fff;
    background-color: #1A73E8;
    padding: 13px;
    font-size: 15px;
    border-radius: 6px;
    display: inline-block;
}
p{
    margin: 30px;
    color:rgb(119, 118, 118);
    font-weight: 900;
}
h1{
    font-weight: 900;
    color: #1a73e8;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
    display: inline-block;
}
label{
    margin-top: 15px;
    margin-left: 23%;
    margin-bottom: 5px;
    display: block;
    text-align: left;
}
.checkBox{
    margin-top: 20px;
}
</style>
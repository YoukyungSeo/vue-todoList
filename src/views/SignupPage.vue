<template>
  <div>
      <signup-form></signup-form>
  </div>
</template>

<script>
import SignupForm from '../component/SignupForm.vue'
export default {
  components: {
      SignupForm,
    },
}
</script>

<style>

.signupBtn {
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
</style>
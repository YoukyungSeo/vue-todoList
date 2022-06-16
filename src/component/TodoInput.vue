<template>
<div>
  <div class="inputBox shadow">
    <input type="text" maxlength='25' v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addBtn addContainer" v-on:click="addTodo">
        <i class="fas fa-plus"></i>
    </span>
    <span class="showBtn addContainer" style="background:white;" v-show="!showContent" v-on:click="showContent = !showContent">
        <i class="fas fa-caret-down"></i>
    </span>
    <span class="showBtn addContainer" style="background:white;" v-show="showContent" v-on:click="showContent = !showContent">
        <i class="fas fa-caret-up"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">
            Warning
            <i class="closeModalBtn fa fa-times"
             aria-hidden="true"
             @click="showModal = false">
            </i>
        </h3>
        <p slot="body">할 일을 입력하세요.</p>
    </Modal>
  </div>
  <div class="inputBox2 shadow" v-show="showContent">
    <textarea rows="3" style="font-family:'Kanit';" v-model="newTodoContent"></textarea>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex';
import Modal from './common/Modal.vue'

export default {
    data(){
        return {
            newTodoItem: "",
            newTodoContent: "",
            id: "",
            showModal: false,
            showContent: false,
        }
    },
    methods: {
        addTodo(){
            if(this.newTodoItem.trim() !== ''){
            const loginData = JSON.parse(localStorage.getItem('loginData'));
            this.id = loginData.id;
                if(this.id.trim() !== ''){
                    const todoObj = {title: this.newTodoItem, content: this.newTodoContent, id: this.id}
                    this.$store.commit('addOneItem', todoObj);
                    this.clearInput();
                }else{
                    alert('로그인이 필요합니다.')
                    this.clearInput();
                    this.showContent = false;
                }
            }else{
                this.showModal = !this.showModal;
                window.DKITec.showToast('내용을 입력해 바보야');
            }
        },
        clearInput(){
            this.newTodoItem = "";
            this.newTodoContent = "";
        }
    },
    components: {
      Modal
    }
}
</script>

<style>
input:focus, textarea:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox2 {
    background: white;
    height: 105px;
    line-height: 50px;
    border-radius: 5px;
    margin-top: 10px;
}
.inputBox input{
    width: 60%;
    border-style: none;
    font-size: 0.9rem;
    position: relative;
}
.inputBox2 textarea{
    width: 90%;
    border-style: none;
    font-size: 0.9rem;
    resize: none;
    margin-top: 10px;
}
.addContainer{
    float: right;
    background: #1a73e8;
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color: white;
    vertical-align: middle;
}
.showBtn{
    color: black;
    vertical-align: middle;
}
.closeModalBtn{
    color: #42b983;
    margin: 1px 0 0 1px;
}
</style>
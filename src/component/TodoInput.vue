<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addBtn addContainer" v-on:click="addTodo">
        <i class="fas fa-plus"></i>
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
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data(){
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo(){
            if(this.newTodoItem.trim() !== ''){
            this.$store.commit('addOneItem', this.newTodoItem);
            this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }
        },
        clearInput(){
            this.newTodoItem = "";
        }
    },
    components: {
      Modal
    }
}
</script>

<style>
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input{
    border-style: none;
    font-size: 0.9rem;
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
.closeModalBtn{
    color: #42b983;
    margin: 1px 0 0 1px;
}
</style>
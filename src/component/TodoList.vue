<template>
  <div>
    <TransitionGroup name="list" tag="ul">
          <li class="shadow" v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="index">
            <span style="white-space:nowrap; display: inline-block;">{{todoItem.createDate.substr(5, 11)}}</span>
            <i style="margin-left:10px" class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}"
              v-on:click="toggleComplete({todoItem, index})"></i>
            <span style="overflow:hidden;  text-overflow : ellipsis" v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.title}}</span>
            <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
              <i class="fas fa-trash"></i>
            </span>
            <span class="updateBtn">
              <i class="fas fa-eraser" v-on:click="showTodoUpdateForm(index, todoItem)" style="margin-left: 10px;"></i>
            </span>
            <span class="showBtn" v-show="!showContent[index]" style="margin-left:10px" v-on:click="showTodoContent(index, $event, todoItem)">
              <i class="fas fa-caret-down"></i>
            </span>
            <span class="showBtn" v-show="showContent[index]" style="margin-left:10px" v-on:click="showTodoContent(index, $event, todoItem)" v-bind:class="{showBtnClose: showContent[index]}">
              <i class="fas fa-caret-up"></i>
            </span>
            <div>
            <Modal v-if="showUpdateForm[index]" @close="showUpdateForm[index] = false" style="text-align: center;">
              <h3 slot="header">
                  Modify
              </h3>
              <div slot="body" class="modalContainer">
                <input type="text" v-model="title" style="width: 300px;" placeholder="제목을 입력해주세요 (최대 50자)">
                <textarea v-model="content" cols="40" style="font-family:'Kanit'" placeholder="내용을 입력해주세요 (최대 200자)"></textarea><br>
                <span><i class="closeModalBtn fa fa-check"
                    aria-hidden="true"
                    @click="updateTodoSetting(selectTodoItem)"></i></span>&nbsp;&nbsp;&nbsp;
                <span><i class="closeModalBtn fa fa-times"
                    aria-hidden="true"
                    @click="closeTodoUpdateForm(index)">
                </i></span>
              </div>
            </Modal>
          </div>
        </li>
    </TransitionGroup>
    <div id="target" class="inputBox shadow" ref="inputTextArea" style="display: none; position: absolute;">
      <input type="text" readonly v-model="content" style="overflow: auto;" placeholder="내용이 존재하지 않습니다">
    </div>
    
  </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'
import { store } from '../store/store'
import Modal from '../component/common/Modal.vue'

export default {
    data(){
      return{
        title: '',
        content: '',
        selectTodoItem: '',
        showContent: [],
        showUpdateForm: [],
      }
    },
    mounted: ( ) => {
      store.dispatch('listItems');
    },
    watch: {
      storedTodoItems(){
        console.log(this.storedTodoItems)
        for(let i=0; i<this.storedTodoItems.length; i++){
          this.showContent[i] = false;
          this.showUpdateForm[i] = false;
        }
      },
    },
    methods: {
        updateTodoSetting(selectTodoItem){
          selectTodoItem.title = this.title;
          selectTodoItem.content = this.content;
          this.updateTodo(selectTodoItem);
        },
        showTodoUpdateForm(index, todoItem){
          this.$set(this.showUpdateForm, index, !this.showUpdateForm[index])
          console.log(this.showUpdateForm);
          this.title = todoItem.title;
          this.content = todoItem.content;
          this.selectTodoItem = todoItem; 
        },
        closeTodoUpdateForm(index){   
          this.$set(this.showUpdateForm, index, false)
          console.log(this.showUpdateForm);
        },
        showTodoContent(index, event, todoItem){
          this.$set(this.showContent, index, !this.showContent[index])
          this.$refs.inputTextArea.style.top = event.y+ window.scrollY + 18 + 'px';
          if (this.showContent[index] == true) {
            this.$refs.inputTextArea.style.display = 'block';
            this.content = todoItem.content;
            let ulEl = document.querySelector('ul');
            this.$refs.inputTextArea.style.width = ulEl.offsetWidth + 'px';
          } else {
            this.$refs.inputTextArea.style.display = 'none';
          }
          // if (e.target.className.indexOf('fa-caret-down') > -1) {
          //   e.target.classList.remove('fa-caret-down');
          //   e.target.classList.add('fa-caret-up');
          // } else{
          //   e.target.classList.remove('fa-caret-up');
          //   e.target.classList.add('fa-caret-down');
          // } 
        },
        ...mapMutations({
          removeTodo: 'removeOneItem',
          toggleComplete: 'toggleOneItem',
          updateTodo: 'updateOneItem'
        })
    },
    computed: {
        ...mapGetters(['storedTodoItems'])
        // 객체 리터럴로 받는 경우
        // ...mapGetters({
        //   todoItem: 'storedTodoItems' })
    },
    components: {
      Modal,
    }
}
</script>

<style scoped>
.showBtnClose{
  color: #1a73e8;
}
.modalContainer input{
  width: 500px;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
}
.modalContainer textarea{
  width: 300px;
  height: 100px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
  resize: none;
}
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 30px;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  /* color: black; */
  color: #1a73e8;
  margin-top: 3px;
  margin-right: 10px;
}
.checkBtnCompleted {
  /* color: #62acde; */
  color: darkgray;
}
.textCompleted {
  text-decoration: line-through;
  color: darkgray;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
/* 트랜지션 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style> 
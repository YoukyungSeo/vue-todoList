import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch(){
    const arr = []
    if(localStorage.length>0){
        for(var i=0; i<localStorage.length; i++){
          if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
            try{
            arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));  
            }catch(e){}
          }
        }
    }
    return arr;
  }
}

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    mutations: {
        addOneItem(state) {
            console.log('받음')
            // var obj={completed: false, item: todoItem};
            // localStorage.setItem(todoItem, JSON.stringify(obj));
            // state.push(obj); 
        }
    }
})
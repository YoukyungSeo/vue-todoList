// 현재 todoApp actions로 사용되는 중..!!

listItems = async() => {
    let arr = [];
    let items = await listTodo();
    console.log(items);
    for(var i=0; i<items.length; i++){
      arr.push(items[i]);
    }

    setTimeout(() => {
      console.log(arr, state.todoItems);
    }, 1000);
    return arr;
 }
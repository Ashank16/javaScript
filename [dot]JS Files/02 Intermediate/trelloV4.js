const myTodos = ['Wake up', 'Have breakfast', 'Go to gym'];

//console.log(myTodos.indexOf('Go to gym'));    //indexOf returns the index of the element                                                    present in that array ,if not then it                                                      returns -1.
const newTodos = [{
    title: 'Wake up',
    isDone: false,
    
}, {title: 'Have breakfast',
    isDone: false,
    
}, {
    title: 'Go to gym',
    isDone: true,
    
}]

//const index = newTodos.findIndex(function(todo,index){
//    console.log(todo);
//    
//    return todo.title === 'Go to gym';
//    
//});
//
//console.log(index);

//Method 1 : using .findIndex()
//const findTodo = function(anyTodos,title){
//    const index = anyTodos.findIndex(function(todo, index){
//            return todo.title.toLowerCase() === title.toLowerCase();
//    });
//    
//    return anyTodos[index];
//};
//
//let printMe = findTodo(newTodos, 'go TO Gym');
//
//console.log(printMe);

//Method 2 : using .find()
const findTodo = function(anyTodos,title){
    const titleReturned = anyTodos.find(function(todo, index){
           return todo.title.toLowerCase() === title.toLowerCase();
    });
    
    return titleReturned;
};

let printMe = findTodo(newTodos, 'go TO Gym');

console.log(printMe);


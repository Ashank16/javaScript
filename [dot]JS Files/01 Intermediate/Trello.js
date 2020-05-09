const myTodos = []
myTodos.push('Go to gym');
myTodos.push('Go to college');
myTodos.push('Buy bread');

myTodos.forEach(function(todos,i){
    console.log(`Your task no. ${i+1} is : ${todos}`);
})


//using unshift operator to print the array in reverse order and using for loop for the     same
const myTodos = []
myTodos.unshift('Go to gym');
myTodos.unshift('Go to college');
myTodos.unshift('Buy bread');

for(i=0;i<myTodos.length;i++){
    console.log('Your task no. '+ (i+1) +' is : ' + myTodos[i]);
}


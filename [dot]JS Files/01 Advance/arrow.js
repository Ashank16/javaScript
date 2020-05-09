//const sayHello = function(name){
//    return 'Hello ' + name + ' here !';
//};
//
//console.log(sayHello('Jerry'));

//using arrow function : it reduces the no. of lines to write the same code and makes it                          easier to read

//Step 1
//const sayHello = (name) => {      //remove funcion keyword and put => after the parameter
//   
//    return `Hello ${name} !`;     //write preferably inside backticks(`) instead of using                                 quotes
//    
//};
//
//console.log(sayHello('Jerry'));

//Step 2
//const sayHello = (name) => `Hello ${name} !`;    //remove return keyword and curly braces                                                    when there is only 1 line and not                                                        block of codes   
//
//console.log(sayHello('Jerry'));

//const myTodos = [{
//    title: 'Wake up',
//    isDone: true,
//    
//}, {
//    title: 'Have breakfast',
//    isDone: true,
//    
//}, {
//    title: 'Watch your online course',
//    isDone: false,
//}];
//
//const thingsDone = myTodos.filter((todo) => todo.isDone === true);
//
//console.log(thingsDone);    

//Assignment

const newTodos = [{
    title: 'Wake up',
    isDone: true,
    
}, {
    title: 'Have breakfast',
    isDone: true,
    
}, {
    title: 'Watch your online course',
    isDone: false,
}, {
    title: 'Have lunch',
    isDone: false,
    
}, {
    title: 'Go to play',
    isDone: false,
    
}, {
    title: 'Go to sleep',
    isDone: true,
    
}];

const thingsNotDone = newTodos.filter((todo) => todo.isDone === false);

thingsNotDone.forEach((name) => console.log(name.title));


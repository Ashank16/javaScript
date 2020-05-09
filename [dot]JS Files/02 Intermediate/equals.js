//   == operator checks `EQUALITY` : checks loosely eg. - (2 == '2' -- true)
//   === operator checks `IDENTITY` : checks strictly both datatype and value
//                                                  eg. - (2 === '2' -- false)

/*
let myVar = ''
let myVarTwo = ''
console.log(myVar == myVarTwo);  //true
console.log(myVar === myVarTwo); //true
*/

//both gives the same value as it is a string, but it changes when objects come into play

/*let myVar = {}
let myVarTwo = {}
console.log(myVar == myVarTwo);  //false
console.log(myVar === myVarTwo); //false
*/

/*
let myVar = {}
let myVarTwo = myVar
console.log(myVar == myVarTwo);  //true
console.log(myVar === myVarTwo);   //true
*/


let a = 2
let b = '2'
console.log(a==b);  //true
console.log(a===b);  //false

console.log(false == 0); //true
console.log(false === 0); //false

console.log({} == {});  //false
console.log({} === {}); //false


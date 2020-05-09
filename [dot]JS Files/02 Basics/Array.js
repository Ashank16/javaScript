const numbers = ['One','Two','Three','Four','Five','Six'];
//First way to replace an item present in the array

numbers[2] = Infinity;
console.log(numbers);


//start 

//Number shift method : For removing starting element in the array

/*numbers.shift(); //shifts the index to one place right
console.log(numbers.shift()); //shifts the index to one place right and prints it 
console.log(numbers);*/

//Unshift method : For adding one element in the start of the array
/*
numbers.unshift('Zero');
console.log(numbers.unshift('Zero'));
console.log(numbers);
*/

//end 

//Pop function is used to remove the last element of the array

/*
numbers.pop(); //pops the last element
//pop function does not passes any argument
console.log("The number that is removed is :" + numbers.pop()); //pops the last element                                                                     as well as print it

console.log(numbers);
*/

/*
numbers.push('Seven'); //pushes the element from the back
//push function takes the argument that needs to be passed 
console.log(numbers);
*/

//middle

numbers.splice(4,3,'Hi','There','Whats up');
//splice function takes three arguments : 
//1)start position 
//2)number of elements to be replaced
//3)arguments that should be passed instead of the replaced one

console.log(numbers);


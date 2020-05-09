//1st way of defining a function
/*let sayHello = function(){
    console.log("Welcome here");
    console.log("Hey buddy");
}*/
//if we run the program, above lines would not be printed as we have not called the function

//sayHello(); //now the message will be printed as we have called the function


let sayHello = function(name){
    console.log("Welcome here");
    console.log(`Welcome here ${name}`);
    console.log("Hey buddy");
    console.log(`Hey ${name}`); //tilaes are used when $ sign is used
}

sayHello("John");  //name is to be passed in quotes just as it is passed in console.log()
                   //now it will show no error


/*let fullName = function(firstName,lastName){
    console.log("Welcome here");
    console.log(`Hello, ${firstName} ${lastName}`);
}

fullName('John','Doe');*/

//adding two numbers using functions

let addNumber = function(num1,num2){
    let added = num1 + num2;
    return added;
}

/*
addNumber(3,15); //nothing will be printed as we have not used console.log()

console.log(addNumber(3,15)); //one way of printing the result
*/

let result = addNumber(3,4);
console.log(result); //other way of printing the result

//above method uses one additional function which is not good 

/*
let multiplyNumber = function(num1,num2){
    let multiplication = num1 * num2;
    return multiplication;
}
*/

let multiplyNumber = function(num1,num2){
    return num1 * num2;
} 
 
//this above code reduces the no. of lines required which in turn reduces the memory usage

console.log(multiplyNumber(12,7)); 

let guestUser = function(name = 'noName',rollNo = '0'){  //noName and 0 are default                                                                  values and shows up when no                                                              values are input by the user
    return 'Hello ' + name + ' , your roll number is  : ' + rollNo;
}

console.log(guestUser('Adam',24));


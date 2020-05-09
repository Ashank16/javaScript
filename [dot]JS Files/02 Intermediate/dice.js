let numOne = 22;
let numTwo = 7;

let result = numOne/numTwo;

//console.log(result);
//
//console.log(result.toFixed(2));         //.toFixed is used to tell how many digits                                                  after decimal we want to display.
// 
//let floorRes = result.toFixed(2);
//
//console.log(Math.floor(floorRes));       //rounds the no. to the greatest integer                                                    smaller than or equal to that no.
//
//console.log(Math.ceil(floorRes));        //rounds the no. to the smallest integer                                                    greater than or equal to that no.

//console.log(Math.random());                //random function generates a random number                                                between 0 and 1 inclusive of 0 but not 1

//dice app

let upper = 6;
let lower = 1;

let myRandom = Math.floor(Math.random() * (upper - lower + 1)) + lower;

console.log(myRandom);


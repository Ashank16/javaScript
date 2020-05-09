let userEmail = 'ABCdef123';
let password = '1234asddd';


console.log(password.length);
console.log(userEmail.toLowerCase()); //as toLowerCase is a method
//expected output : abcdef123

console.log(userEmail.toUpperCase()); //as toUpperCase is a method
//expected output : ABCDEF123

console.log(userEmail.trim());//trims white spaces from both ends


let userChecker = function(myString){
    if((myString.includes(123)) && (myString.length>6)){
        return true;
    }
    //.includes is used to search the particular string
    //123 is used as a regular expression telling that it takes nos. from 0-9
    
    else{
        return false;
    }
    //the else case is completely optional 
}

console.log(userChecker(userEmail));

let passChecker = function(pass){
    if((pass.includes(1234)) && (pass.length>8)){
        return true;
    }
    //.includes is used to search the particular string
    //123 is used as a regular expression telling that it takes nos. from 0-9
    
    else{
        return false;
    }
    //the else case is completely optional 
}

console.log(passChecker(password));


// let and var keywords are used to declare variables 
// but we should use let instead of var as var declare 
// variable globally even if the variable is declared
// inside the scope.

let iAmGlobal = 'Value 1';

if(true){
    var iAmLocal = 'NewValue';
    let iAmGlobal = 'AVI'
    console.log(iAmGlobal);
    console.log(iAmLocal);
}

    console.log(iAmGlobal);
    console.log(iAmLocal);


//console.log('5' - 5);                     //treats both as integers 
//
//console.log('5' + 5);                     //treats both as string
//
//const giveType = typeof true;
//
//console.log(giveType);
//
//const adder = true + 5;                    //true is considered as 1 
//
//console.log(adder);
//
//const adder1 = false + 5;                  //false is considered as 0
//
//console.log(adder1);

const loginDetails = [];
//logic for getting details from DataBase

const loginID = loginDetails[0];

if(loginID !== undefined){                 //write loginID only instead of the expression                                              written inside if block.JavaScript will                                                  assume on its own.
    console.log('Allow user to login');
}
else{
    console.log('Authentication failed');
}

//Values that are interpreted as false :    //Values that are interpreted as true :

//1)false                                     1)true
//2)0                                         2)1
//3)'' : empty string                         3)' ',{},[] : non-empty string,object,array
//4)null                                      4)all other
//5)undefined


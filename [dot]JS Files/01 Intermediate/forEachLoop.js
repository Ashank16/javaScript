const days = ['Mon','Tue','Wed','Thurs','Fri','Sat'];
console.log(days[2]); //as array index starts from 0

let name = function(){
    console.log('Hi there!!')
}

//days.forEach(name); //a function can be passed in forEach
//Operations that are happening above : 
//1)days gives the length of Array
//2)name function gives the output which is present in its code block & it is printed the no. of times equal to the length of the array days 

/*days.forEach(function(){                 //directly defining the function inside
                                           //But it's not a good practice
    console.log('Hi there!!')
    
}) */                          

/*days.forEach(function(oops){              //for printing the items present inside the                                                 array pass anything inside the function but                                               type the same keyword inside the                                                         console.log() to print it
    console.log(oops)
})*/

//days.forEach(function(day,index){              
//    console.log(`the day starts with ${index+1} - ${day}`);
//})

//the first parameter that would be passed                                                 inside the function would be the element                                                 itself and the second parameter would be the                                             index of the array element


//Assignment 1 : print the months using forEach

const months = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];

months.forEach(function(monthName,index){
    console.log(`month starts with ${index+1} - ${monthName}`);
})


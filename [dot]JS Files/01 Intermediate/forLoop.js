const days = ['Mon','Tue','Wed','Thurs','Fri','Sat'];

console.log(days.length-1);

/*for(i=0;i<days.length;i++){
    const element = days[i];
    console.log(element);
    //instead of above two lines write this single line
    
    console.log(days[i]);
    
}*/

for(i=days.length - 1;i>=0;i--){           //for writing in reverse order
    console.log(days[i]);
}


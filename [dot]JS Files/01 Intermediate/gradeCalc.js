let getmyGrade = function(currentMarks,totalMarks){
    let myPercent = (currentMarks/totalMarks)*100;
    let myGrade = ''      //defining the variable here which will take value according to                         the below if statements
    
    
    if(myPercent>=100){
        console.log('You are out of your mind');
        myGrade = 'undefined';
        myPercent = 'undefined';
    }
    else if(myPercent>=90){
        myGrade = 'A';
    }
    else if(myPercent>=80){
        myGrade = 'B';
    }
    else if(myPercent>=70){
        myGrade = 'C';
    }
    else if(myPercent>=60){
        myGrade = 'D';
    }
    else if(myPercent>=50){
        myGrade = 'E';
    }
    else{
        myGrade = 'F';
    }
    
    return `Your grade is ${myGrade} and you percentage is ${myPercent}`;   
    
}

let yourResult = getmyGrade(130,120);
console.log(yourResult);


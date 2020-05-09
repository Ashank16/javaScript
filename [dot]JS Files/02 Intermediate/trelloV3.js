let myTodos = {
    days: 'Monday',
    meetings: 0,
    meetDone: 0,
    
    /*addMeeting: function(){
        console.log('Hi there,you are accessing me from a function defined inside an object');
        console.log(this); //'this' keyword refers to all the keys(properties) present                         inside the object.It only refers to the keys(properties) of                       the object where 'this' is written.    
    }*/
    
    addMeeting: function(num){
        this.meetings = this.meetings + num; //we used 'this' to call the key of the                                            object.If we don't use 'this' then the key                                        would not be called as the key doesn't                                            have large scope.We used 'this' as it has                                        full scope inside the object.
    },
    
    addMeetDone: function(num){
        this.meetDone = this.meetDone + num;
    },
    
    summary1: function(){
        return `You have ${this.meetings} meetings today`; 

    },
    summary2: function(){
        return `You have ${this.meetDone} meetings done today`; 

    },
    totalSummary: function(){
        return `You have ${this.meetings - this.meetDone} meetings left for today`;
    },
    reset: function(){
        this.days = 'Monday';
        this.meetings = 0;
        this.meetDone = 0;
    },

}

//a function when defined inside an object or a class is called 'method'.

//myTodos.addMeeting(); //calling the function

myTodos.addMeeting(6); 
myTodos.addMeetDone(2); 
myTodos.days;

// *** when accessing a key(property) that is inside an object then we perform objectName.keyName and when accessing a function that is present inside an object then we perform objectName.functionName() [with a pair of paranthesis].

console.log(myTodos.summary1());
console.log(myTodos.summary2());
console.log(myTodos.totalSummary());


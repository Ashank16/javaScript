let myTodos = {
    days: 'Monday',
    meetings: 0,
    meetDone: 0,
}

let addMeeting = function(todo,meet = 0){
    todo.meetings = todo.meetings + meet;
}

/*
addMeeting(myTodos, 2);  

//whenever an object is passed through a function,
//the object is passed itself and not the copy of it.
*/

let addMeetDone = function(todo,meet = 0){
    todo.meetDone = todo.meetDone + meet;
}

let reset = function(todo){
    todo.meetings = 0;
    todo.meetDone = 0;
}

let getSummaryOfDay = function(todo){
    let meetLeft = todo.meetings - todo.meetDone;
    return `You have ${meetLeft} meetings left for today`;
}

addMeeting(myTodos,4);

addMeeting(myTodos,12);

addMeetDone(myTodos,7);

getSummaryOfDay(myTodos);

console.log(myTodos);
 
console.log(getSummaryOfDay(myTodos));


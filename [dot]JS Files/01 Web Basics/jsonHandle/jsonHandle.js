const student = {
    name:'Adam',
    age: 25,
    isActive: true,
}

//convert the above object into a string to be stored in local storage

const studentObjToString = JSON.stringify(student);

console.log(typeof studentObjToString);                       //string

localStorage.setItem('student', studentObjToString);         //stored in local storage

const toJSONstudent = JSON.parse(studentObjToString);       //parse JSON string so that it                                                               can be used as an object

console.log(typeof toJSONstudent);                          //object

console.log(toJSONstudent.name);               //Adam

console.log(toJSONstudent.age);                //25

console.log(toJSONstudent.isActive);           //true


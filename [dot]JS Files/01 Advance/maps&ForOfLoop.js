var john = {
    name: 'I am John',
    age: 24,
    isActive: true,
};

var adam = {
    name: 'I am Adam',
    age: 20,
    isActive: true,
};

var barry = {
    name: 'I am Barry',
    age: 29,
    isActive: false,
};

let users = new Map();

//console.log(typeof users);                                //Output : object

users.set('john', john);                   //first one ('john') is key which can be named                                              anything as our wish and second one (john)                                                is the object which is defined above
users.set('adam', adam);     

users.set('barry', barry);  

//console.log(users);
//
//console.log(users.size);                 //gives the size of map
//
//console.log(users.get('adam'));          //access the particular information using keys
//
//console.log(users.keys());               //gives the keys
//
//console.log(users.values());    

//for (const key of users.keys()){
//    console.log(key);    
//};
//
//for (const value of users.values()){
//    console.log(value.age);
//    console.log(value.name);    
//
//};

//for (const [key, value] of users.entries()){
//    console.log(key + ' = ' + value.age);    
//
//};

//users.forEach((value,key) => console.log(key + ' = ' + value.age));

var arrofArr = [['one','1'], ['two','2'], ['three','3']]

var newMap = new Map(arrofArr);

console.log(newMap);

for (const value of newMap.values()){
    console.log(value);
}


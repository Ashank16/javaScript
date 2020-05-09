class User{
    constructor(firstname, middlename, lastname, credit){
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.credit = credit;
    }
    
    getfullName(){
//        let fullName = `${this.firstname} ${this.lastname} is my full name`;
//        return fullName;
        
        //above code in 1 line
        
        return `${this.firstname} ${this.lastname} is my full name`;
    }
    
    editName(newname){
      const myname = newname.split(' ');      //splits the string and stores the elements                                           in an array;here 'myname' is an array.  
      this.firstname = myname[0];
      this.lastname = myname[1];

    }
    
    //take a middle name too
    getmiddleName(){
        return `${this.firstname} ${this.middlename} ${this.lastname} is my full name`;
    }
}

//const john = new User('John', 'Anderson', 25);
//console.log(john);
//console.log(typeof john);                         //object

//const sammy = new User('Sammy');
//console.log(sammy);                             //gives value as undefined

//console.log(john.getfullName());
//
//john.editName('Black Mamba');
//
//console.log(john.getfullName());

//for middle name

//const middle = new User('Park', 'Seo', 'Joon', 30);
//console.log(middle);
//
//console.log(middle.getmiddleName());

class Teacher extends User{
    constructor(firstname, middlename, lastname, credit,subject){
        super(firstname, middlename, lastname, credit);  //super key is always used first                                                    when constructor is called in                                                    derived class or child class.
        this.subject = subject;
          
    }
    
    getfullName(){        
        return `${this.firstname} ${this.middlename} ${this.lastname} is my full name and I teach ${this.subject}`;
    }
    
    favDrink(name){
        return `My favourite drink is ${name}`;
    }
}                  
//class Teacher now has all the properties and methods of User class; this is known as     inheritance.

//When 'new' keyword is written, assume that constructor is called.

//Example of method overriding : It takes getfullName() from derived class as it is there   and forgets about parent class.

const teach = new Teacher('Ji', 'Chang', 'Wook', 35, 'Maths');
console.log(teach.getfullName());

console.log(teach.favDrink('MountainDew'));


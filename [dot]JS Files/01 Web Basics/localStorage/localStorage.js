localStorage.setItem('hero', 'IronMan');

let myHero = localStorage.getItem('hero');
console.log(myHero);

localStorage.setItem('todo', 'Go to gym');

console.log(localStorage.getItem('todo'));

localStorage.setItem('todo', 'Go to park');         //updating item

console.log(localStorage.getItem('todo'));

localStorage.removeItem('hero');                    //removing item

myHero = localStorage.getItem('hero');
console.log(myHero);

localStorage.clear();                               //removing all items from database
                          

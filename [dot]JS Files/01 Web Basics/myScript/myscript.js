//console.log(document.head);

//console.log(document.documentURI);

//console.log(document.title);

//console.log(document.firstElementChild);

//console.log(document.title);

//to change the title :

//document.title = 'I got changed';

//console.log(document.getElementById('idone'));

//document.getElementById('idone') = 'heyyyyy'; //wrong

//console.log(document.getElementsByClassName('classone'));

//const myElement = document.querySelector('p');        //selects the first paragraph tag
//console.log(myElement);

//const myElement = document.querySelectorAll('p');   //querySelectorAll returns an array                                                       of same tags which is mentioned     
//console.log(myElement[2]);

//const myElement = document.querySelectorAll('#idone');  //selects element with given id    
//console.log(myElement[0]);

//const myElement = document.querySelectorAll('.classone');        //selects element with                                                                      given class   
//console.log(myElement[0]);

//const myPElements = document.querySelector('p')
//console.log(myPElements);
//myPElements.textContent = 'I am being changed using JS';//.textContent gets the content                                                              written inside the tag

//const myPElements = document.querySelectorAll('p')
//
//myPElements.forEach(function(p){
//    p.textContent = 'I am changed using loop in JS';
//})

//const myPElements = document.querySelectorAll('p')
//
//myPElements.forEach(function(p){
//    p.remove()                                         //to remove the content 
//})

const myPElements = document.querySelectorAll('p')               //using arrow function

myPElements.forEach(p => p.textContent = 'I am changed using loop in JS');

const myNewPara = document.createElement('p')

myNewPara.textContent = 'I was added via JS'

document.querySelector('body').appendChild(myNewPara)

//document.querySelector('button').addEventListener('click', () => {
//    console.log('Button was pressed');
//})

document.querySelector('button').addEventListener('click', (event) => {
//  console.log(event);
   event.target.textContent = 'I was clicked'

})

//track input form

//document.querySelector('#myform').addEventListener('change', (event) => {
//    console.log(event.target.value)
//})

document.querySelector('#myform').addEventListener('input', (event) => {
    console.log(event.target.value)
})


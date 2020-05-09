//function myValidation(){
//    let myValue = document.getElementById('myform').value
//}

//function myValidation(){
//    document.querySelector('#myform').addEventListener('input', (event) => {
//    console.log(event.target.value)
//})
//}

function myValidation(){
    let myValue = document.getElementById('myform').value;
    
    if(isNaN(myValue) || myValue < 1 || myValue > 20){
        console.log('Not a valid input');
    }
    else{
        console.log('This input is OK');
    }
}

function myChange(){
    let myValues = document.getElementById('myform').value;
    
    if (isNaN(myValues) || myValues < 1 || myValues > 20) {
        document.getElementById("idone").innerHTML = "Not a valid input "

    } else {
        document.getElementById("idone").innerHTML = "This input is ok"
    }
}

//form validation

document.querySelector('.myform').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.username.value = '';
    event.target.realname.value = '';

})


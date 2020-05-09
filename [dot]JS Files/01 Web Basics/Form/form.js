function check(){
    if(document.querySelector('#password').value == document.querySelector('#confirm_password').value){
        document.querySelector('#message').style.color = 'green';
        document.querySelector('#message').textContent = 'Matched';
    }
    else{
        document.querySelector('#message').style.color = 'red';
        document.querySelector('#message').textContent = 'notMatched';
    }
}

document.querySelector('.myform').addEventListener('submit', (event) => {
    event.preventDefault();
    event.target.username.value = '';
    event.target.emailId.value = '';
    event.target.password.value = '';
    event.target.confirm_password.value = '';
    document.querySelector('#message').textContent = '';    
})

function checkValidation(){
    if(document.querySelector('#password').value != document.querySelector('#confirm_password').value){
        alert('You have entered a wrong password')
    }
}


// && - AND operator : Both statements needs to be true
// ||- OR operator : Either statement needs to be true
// ! - NOT or REVERSE operator : Reverses the statement

let isVerified = false
let isLoggedin = true
let hasPaymentToken = true
let isGuest = false

if(!isVerified && isLoggedin && hasPaymentToken){
    console.log('Grant access to user')
}
else if (isVerified || isGuest){
    console.log('Allow free previews')
}
else{
    console.log('Please contact admin')
}


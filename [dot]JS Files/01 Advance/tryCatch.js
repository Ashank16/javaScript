const convertToRs = (dollar) => {
    if(typeof dollar === 'number'){
        return dollar * 74;
    }
    else{
        throw Error('Amount needs to be in number');
    }
};

//const convertedValue = convertToRs('5');
//
//console.log(convertedValue);

//try and catch error : allow program to run even if an error occurs midway

try{
    const convertedValue = convertToRs('5');
    console.log(convertedValue);
} catch(error) {
    console.log(error);               //error.message can be used inside the bracket and a                                     message can be written, then that message will be                                     printed instead of computer generated error.
}

console.log('I will not be printed if program crashes.');


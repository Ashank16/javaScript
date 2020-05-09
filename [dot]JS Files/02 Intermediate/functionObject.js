let myProjectOne = {
    title: 'Project',
    numberOfPages: 20,
    projectDescription: 'write briefly and in an understandable way',
}

let myProjectTwo = {
    title: 'Project',
    numberOfPages: 10,
    projectDescription: 'write briefly and in an understandable way',
}

/*let newNumberOfPages = function(object){
    console.log(`Number of pages in this project is ${object.numberOfPages}`);
}

newNumberOfPages(myProjectOne);*/

/*let newNumberOfPages = function(object){
    return `Number of pages in this project is ${object.numberOfPages + 23}`;
}

console.log(newNumberOfPages(myProjectOne));*/

let newNumberOfPages = function(object){
    return{
        formatOne: `Number of pages in this project is ${object.numberOfPages + 23}`,
        formatTwo: `Number of pages in this project is ${object.numberOfPages + 10}`
    }
}

let adx = newNumberOfPages(myProjectTwo);

console.log(adx.formatOne);


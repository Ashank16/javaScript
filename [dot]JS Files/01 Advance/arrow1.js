const camera = {
    price: 400,
    weight: 2000,
    desc: function(){                  //don't use arrow function in this type of scenario
    return `This camera is of ${this.price}$`;
}
};
//don't use arrow function in methods or constructors

console.log(camera.desc());


//below is for Redux

const func = () => ({key: 'value'});            //when using arrow function in redux where                                                   key - value pair is returned, use pair                                                     of paranthesis '()'.


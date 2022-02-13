console.log("--- deconstruct array");

const twoValues= ['one', 'two'];

[firstValue, secondValue] = twoValues;

console.log(firstValue);
console.log(secondValue);

console.log("--- deconstruct object");

const {name} = { 
  name: 'pie',
  flavor: 'orange'
};


console.log(name);


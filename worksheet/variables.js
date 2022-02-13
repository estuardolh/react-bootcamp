
var aVariable = 'Hello';

console.log(aVariable);

let aVariableLet = 'Hello let';

console.log(aVariableLet);

const aConstant = 1.1416;

console.log(aConstant);

// should raise an error
// aConstant = 3;
// console.log(aConstant);

var aMap = {
  attribute1: 'one',
  attribute2: 'two'
};

console.log(aMap);


console.log("--- spread operation: ");

const arraySource = ['one', 'two'];
const arrayTarget = [...arraySource, 'three'];

console.log('array source + target: ' + arrayTarget);


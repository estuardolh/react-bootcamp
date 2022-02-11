function classicFunction(){
  console.log('classic function');
}

classicFunction();

var arrowWideFunction = () => {
  return 2;
}

console.log(arrowWideFunction());

var arrowShortFunction = () => 3;

console.log(arrowShortFunction());

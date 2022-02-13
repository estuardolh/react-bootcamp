const rest = (...arguments) => {
  return arguments.filter( item => item == 2 );
}

console.log("show only '2' value: "+rest(1,2,3,5));

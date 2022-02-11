
class Animal {
  constructor(){
    this.eyes = 2;
  }

  printEyesQuantity(){
    console.log(this.eyes);
  }
}

class Dog extends Animal {
  name = 'Rubble'
  constructor(){
    super();
    this.name = 'Perris';
  }

  printDogName(){
    console.log(this.name);
  }
}

const dog = new Dog();
dog.printDogName();
dog.printEyesQuantity();

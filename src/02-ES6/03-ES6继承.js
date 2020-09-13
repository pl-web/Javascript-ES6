// ES6 class
class Person{

  constructor(name, age) {
    this.name = name
    this.age = age
  }

  // methods
  sayHello() {
    console.log("Hello World!")
  }
}

let p = new Person("SeedOrbit", 24)

console.log("Person: ", p)


// extends 
class Friend extends Person {
  constructor(name, age, other) {
    super(name, age)
    this.other = other
  }
  showOther() {
    console.log("hobby: " + this.other)
  }
}

let f = new Friend("brid", 18, "Reading Red Attic of the Qing Dynasty")

console.log(f)

console.log(f.sayHello)

console.log(f.showOther())
// ES6 class
class Person{
  constructor(name, age) {
    this.name = name
    this.age = age
    // _sex_
    this._gender_ = -1
  }

  // 只读属性gender
  get gender() {
    return this._gender_
  }

  // 设置属性gender
  set gender(gender) {
    this._gender_ = gender
  }

  // methods
  sayHello() {
    console.log("Hello World!")
  }

  // 静态方法
  static sayHi() {
    return "Hi"
  }
}

let p = new Person("SeedOrbit", 24)

console.log("33: ", Person.sayHi())

console.log("Person: ", p)

// 测试set&get
console.log("gender: " + p.gender)
p.gender = "female"
console.log("gender: " + p.gender)

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
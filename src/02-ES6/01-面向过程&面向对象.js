// object-based
// 类class 对象object
// 类是对象的模板，定义了同一组对象共有的属性和方法
function Person(name, age) {
  // 实例属性
  this.name = name,
  this.age =  age
}

// 静态属性
Person.number = 13

// 静态方法
Person.addNumber = function() {
  Person.number++
}
let p1 = new Person("SeedOrbit", 24)
console.log(p1)

// p1.sayHello() is not a function

// 实例方法
Person.prototype.sayHello = function () {
  console.log("hello, everyone")
}
p1.sayHello() // hello, everyone
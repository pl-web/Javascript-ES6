// ES5
Object.defineProperty(window, "PI", {
  value: 3.1415926,
  writable: false
})
console.log("PI: ", PI) // 3.1415926
PI = 1
console.log("PI: ", PI) // 3.1415926


// ES6
const pi = 3.1415926
console.log("pi: ", pi) // 3.1415926
// pi = 1
// console.log("pi: ", pi) // Assignment to constant variable.


// const Object
const my = {
  name: 'iter',
  age: 24
}
my.address = "Beijing"
console.log(my)


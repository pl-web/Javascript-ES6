let obj = {
  name: 'my',
  age: 1
}
console.log(obj)
// ES6
let name = 'my-hi'
let age = 2
let school = 'yanshan'
let obj_ = {
  name: name,
  study: () => {
    console.log(this)
  }
}
// console.log(obj_.study)
obj_.study()

let _obj = {
  name: name,
  study() {
    console.log(this)
  }
}
_obj.study()


// Object.is()
// Object.assign()
let x = {
  a: 1,
  b: 2
}
let y = {...x}
console.log(y)

// in
let arr = [1, 2, 3]
console.log(3 in arr) // false
let obj_a = {
  a: 1
}
console.log("a" in obj_a) // true
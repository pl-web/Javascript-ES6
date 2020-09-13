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
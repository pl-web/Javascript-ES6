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
  a: 1,
  b: 2,
  c: "112"
}
console.log("a" in obj_a) // true


// 对象的循环 -01
for(let key in obj_a) {
  console.log("对象的循环-01：", obj_a[key])
}

// 对象的循环 -02
Object.keys(obj_a).forEach(key => {
  console.log("对象的循环-02：", obj_a[key])
})

// 对象的循环 -03
Object.getOwnPropertyNames(obj_a).forEach(key => {
  console.log("对象的循环-03：", obj_a[key])
})

// 对象的循环 -04
Reflect.ownKeys(obj_a).forEach(key => {
  console.log("对象的循环-04：", obj_a[key])
})

// x
// obj_a.forEach(item => {
//   console.log(obj_a.item)
// })
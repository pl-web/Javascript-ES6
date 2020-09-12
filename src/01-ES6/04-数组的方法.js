let arr = [1, 2, 3, 4, 5]


// forEach
// forEach not support break and continue
// arr.forEach(function(item, index, _arr) {
//   console.log(item, index, _arr)
// })


// map
let result = arr.map(function(value) {
  return ++value
})
console.log(result)
console.log(arr)


// filter
let res = arr.filter(function(value) {
  return value >= 2
})
console.log(res)


// some
let res_some = arr.some(function(value) {
  return value == 2
})
console.log("some: ", res_some)  // true


// every
let res_every = arr.every(function(value) {
  return value == 2
})
console.log("every: ", res_every)  // false
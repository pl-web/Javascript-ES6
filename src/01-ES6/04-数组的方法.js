let arr = [1, 1, 2, 2, 3, 4, 5, 6, 6]


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


// reduce: 累加器
// first params: function()
// second params: initial value ：做加法之前的初始值
let res_reduce = arr.reduce(function(prev, curr, index, arr_) {
  console.log(prev, curr, index, arr_)
  return prev + curr
}, 0)
console.log("reduce: ", res_reduce)


// reduce ： 求出数组中的最大值
let res_reduce_max = arr.reduce(function(prev, curr) {
  return Math.max(prev, curr)
}, 0)
console.log(res_reduce_max) // 5


// reduce : 数组的去重
// second params : 设置为 one empty array
let res_reduce_set = arr.reduce(function(prev, curr) {
  prev.indexOf(curr) == -1 && prev.push(curr)
  return prev
}, [])
console.log(res_reduce_set)
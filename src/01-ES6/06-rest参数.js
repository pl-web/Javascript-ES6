// ... 扩展运算符
let arr = [1, 2, 3]
console.log(...arr) // 1 2 3
// push ...
let arr_1 = [1, 2, 3]
let arr_2 = [4, 5, 6]
Array.prototype.push.apply(arr_1, arr_2)
console.log(arr_1) // [1,2,3,4,5,6]
// ...
arr_2.push(...arr_1)
console.log(arr_2) // [4,5,6,1,2,3,4,5,6]

// rest参数
// 求和
function foo_rest(x, y, z) {
  // arguments 类数组
  console.log("arguments: ", arguments)
  let sum = 0
  Array.prototype.forEach.call(arguments, function(item, idx) {
    sum += item
  })
  console.log("sum: ", sum)
}
foo_rest(1,2)
foo_rest(1,2,3)
// ...
function foo_rest_ (...args) {
  let sum = 0
  args.forEach(item => {
    sum += item
  })
  console.log(sum)
}
foo_rest_(1, 2)
foo_rest_(1, 2, 3)
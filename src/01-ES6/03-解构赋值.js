// ES5
// let arr = [1, 2, 3]
// let a = arr[0]
// let b = arr[1]
// let c = arr[2]
// console.log(a, b, c)

// ES6
// let [a, b, c] = [1, 2, 3]
// console.log(a, b, c)

// let [a, b, [c, d]] = [1, 2, [3, 4]]
// console.log(a, b, c, d) // 1, 2, 3, 4

// let [a, b, c] = [1, 2, [3, 4]]
// console.log(a, b, c)

// 字符串也可以进行数组一样地解构
let [xx, yy, xy, yx, xxy, yxx] = "abcdef"
console.log(xx, yy, xy, yx, xxy, yxx)

function foo () {
  console.log(111)
}
let [a = foo()] = [1]
let [b = foo()] = []

// json
let json_data = '{"x": "hello", "y": "world"}'
let json_arr = JSON.parse(json_data)
console.log(json_arr)
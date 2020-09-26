// set only one
let s = new Set([1, 2, 3, 1])
console.log(s)
// set function
// add
s.add("pl")
console.log(s)
// delete
// clear
// has
console.log(s.has(1))
// size
console.log(s.size)
// forEach
s.forEach(item => {
  console.log(item)
})
// for ... of
for(let item of s) {
  console.log(item)
}
for(let item of s.keys()) {
  console.log(item)
}
for(let item of s.values()) {
  console.log(item)
}


// 数组的去重
let arr = [1, 2, 3, 4, 5]
let arr_ = [1, 2, 3, 4, 5, 6, 7]
let s_ = new Set([...arr, ...arr_])
console.log(s_)
// 将s_转换为数组
console.log([...s_])
console.log(Array.from(s_))


// 求交集
let _arr = new Set([1,1,22,22])
let _arr_ = new Set([11,22,33])
let result = new Set([1,1,22,22].filter(item => _arr_.has(item)))
console.log(Array.from(result))
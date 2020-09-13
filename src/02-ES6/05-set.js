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
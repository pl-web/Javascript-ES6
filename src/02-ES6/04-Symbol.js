// Symbol
let s1 = Symbol()
let s2 = Symbol()
console.log(s1 == s2) // false

let s1_ = Symbol("foo")
let s2_ = Symbol("bar")
console.log(s1_ == s2_) // false

// description
console.log(s1_.description) // foo

// Symbol.for() ==> 在全局中去定义
let _s1 = Symbol.for("fuu")
let _s2 = Symbol.for("fuu")
console.log(_s1 == _s2) // true

// Symbol.keyFor()
const s2_keyFor = Symbol.for('foo')
console.log(Symbol.keyFor(s2_keyFor))

// Symbol
const stus = {
  张三: { grade: 1, number: 001 },
  李四: { grade: 2, number: 002 },
  张三: { grade: 3, number: 003 }
}
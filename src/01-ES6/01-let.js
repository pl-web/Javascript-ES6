// var a = 6
// console.log(a) // 6
// delete 只能删除对象的属性
// delete a
// console.log(a) // 6

// b = 7
// console.log(b) // 7
// delete b
// console.log(b) // undefined

// let c = 1
// console.log(c) // 1
// console.log(window.c) // undefined

// let d = 2 
// let d = 3 
// console.log(d) // Identifier 'd' has already been declared

// console.log("e:", e) // undefined
// var e = 5 

// console.log("f", f) // Cannot access 'f' before initialization
// let f = 11

// let { ... }
// if(true) {
//   let a
//   a = 5
//   console.log("a: ", a)
// }

// if (true) let a = 5  // Lexical declaration cannot appear in a single-statement context 
// if(true) {let a = 5} √

// for (var i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i) // 3 3 3
//   })
// }

// 使用闭包的形式
// for (var i = 0; i < 3; i++) {
//   (function(j) {
//     setTimeout(function() {
//       console.log(j) // 0 1 2
//     })
//   })(i)
// }

// 使用let的形式
for(let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i) // 0 1 2
  })
}
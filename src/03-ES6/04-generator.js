// const foo = function* () {
//   alert('step 1')
//   yield
//   alert('step 2')
// }

// let geneObj = foo()

// 调用next()函数
// 每调用一次，就向下执行一步
// geneObj.next()
// geneObj.next()

// generator的使用

// yield
// 可以传参，也可以返回数据
// const fuu = function* () {
//   alert('step 1')

//   let params = yield

//   alert('step 2')

//   alert("params: ", params)

// }

// let gen = fuu()

// gen.next(1)
// gen.next(2)


const fuu = function* () {
  alert('step 1');
  yield 12;
  alert('step 2');
  return 123;
}
let gen = fuu();
let res_1 = gen.next()
console.log(res_1);
let res_2 = gen.next();
console.log(res_2);
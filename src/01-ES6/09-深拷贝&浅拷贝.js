// 01
// let target = {
//   a: 5
// }
// let source = {
//   a: 1,
//   b: 2
// }
// Object.assign(target, source)
// console.log(target)


// 02
// let target_02 = {
//   person: {
//     name: "001",
//     age: "001"
//   }
// }
// let source_02 = {
//   person: {
//     name: "002",
//   }
// }
// Object.assign(target_02, source_02)
// console.log(target_02)


// 03
// 检测数据类型的函数
let checkType = (data) => {
  return Object.prototype.toString.call(data).slice(8, -1)
}
let deepClone = (target) => {
  // 首先要对目标数据进行类型判断
  let targetType = checkType(target)
  // 定义深克隆后返回的结果
  let result
  if(targetType === 'Object') {
    result = {}
  } else if(targetType === 'Array') {
    result = []
  } else {
    result = target
  }
  // 开始循环遍历我们的目标数据
  // 将遍历的每一项放入result中
  for(let i in target) {
    let val = target[i]
    // console.log(val)
    let valType = checkType(val)
    if(valType === 'Object' || valType === 'Array') {
      deepClone(val)
      // console.log(val)
    } else {
      result[i] = val
    }
  }
  // 返回result
  return result
}

// 测试 test
let arr_test = [1, 2, 3, 4, 5, {name: "SeedOrbit", age: 24}]
let arr_res = deepClone(arr_test)
console.log(arr_res)
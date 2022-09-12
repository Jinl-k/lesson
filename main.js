// 作用域 和 作用域链

const { KeyObject } = require("crypto")
const { connected } = require("process")
const { createUnzip } = require("zlib")

// 函数定义被执行后 它的上层作用域链就被确定了

// function test(){}
// test()
// 当函数定义执行后 内存中会同时产生一个原型对象 然后 该函数的prototype属性会指向这个对象

// function gogogo(){}

/* let a = 100

{
  let b = 2000
  const obj = {
    abc(){
      console.log(b)
    }
 
  }
  console.log(obj)
} */

// let obj = {
//   eats: true,
//   age() {
//     console.log(111)
//   },
// }
// let clone = Object.create(
//   Object.getPrototypeOf(obj),
//   Object.getOwnPropertyDescriptors(obj)
// )
// console.log("c-1", JSON.stringify(clone))
// clone.eats = 100

// console.log("c-2", JSON.stringify(clone))

// console.log(JSON.stringify(obj))

let user = {}

user = new Proxy(user, {
  ownKeys(target) { 
    // 一旦要获取属性列表就会被调用
    return ["a", "b", "c"]
  }, 

     
  getOwnPropertyDescriptor(target, prop) {
    // 被每个属性调用 
    return {
      enumerable: true,
      configurable: true,
      /* ...其他标志，可能是 "value:..." */
    }
  },
})
console.log("user", user)

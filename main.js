// 作用域 和 作用域链

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

let obj= {
  eats: true,
  age(){
    console.log(111);
    
  }
};

let clone = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);

console.log(clone);

obj.eats=100
console.log(clone);




//ES5
// function people(name,age){
//     return {
//         name:name,
//         age:age
//     };
// }
//ES6中，键值对重名，可以简写如下
// function people(name,age) {
//     return {
//         name,
//         age
//     };
// }

//ES5为对象添加方法
// const people = {
//   name:'lux',
//   getName:function () {
//       console.log(this.name);
//   }
// };
//ES6为对象添加方法
// const people = {
//     name:'lux',
//     getName(){
//         console.log(this.name);
//     }
// };


//ES6对象提供了Object.assign()这个方法来实现浅复制
const objA = {name:'cc',age:18};
const objB = {address:'beijing'};
const objC = {};// 这个为目标对象
const obj = Object.assign(objC,objA,objB);

console.log(objA);//{name: "cc", age: 18}
console.log(objB);//{address: "beijing"}
console.log(objC);//{name: "cc", age: 18, address: "beijing"}
console.log(obj);//{name: "cc", age: 18, address: "beijing"}

//目标对象objC的值被改变了
//如果objC也是一个源对象的话，在objC前面填一个目标对象{}
Object.assign({},objC,objA,objB);
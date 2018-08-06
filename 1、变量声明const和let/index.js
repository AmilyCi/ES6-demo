// function aa() {
//     //无论flag是true或者false,无论如何test都会被创建声明
//     var flag = null;
//     if(flag){
//         var test = "hello man";//变量会提升，提升到函数的最顶部
//     }else{
//      console.log(test);//undefined
//     }
// }
// aa();

//let表示变量、const表示常量

// function aa(){
//     var flag = null;
//     if(flag){
//         //此时let的作用域为这个代码块，不会被提升到函数的最顶部
//         let test = "hello man";
//     }else{
//         console.log(test);//test is not defined at aa
//     }
// }
// aa();

// const name = "lux";
//       name = "joe";//再次赋值此时会报错
// console.log(name);

// const student = {name:"lux"};
// student.name = "joe";//没有问题，对象所包含的值可以被修改
// console.log(student);
// student = {name:"joe"};//会报错，对象所指的地址不能被修改

// var funcs = [];
// for(var i = 0;i<10;i++){
//     funcs.push(function () {
//         console.log(i);
//     })
// }
// funcs.forEach(function(func){
//     func();
// });//结果输出10个10

// const funcs = [];
// for(let i = 0;i<10;i++){
//     funcs.push(function () {
//         console.log(i);
//     })
// }
// funcs.forEach(func=>func());//结果输出0~9

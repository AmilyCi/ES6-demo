// function action(num) {
//     num = num || 200;
//     return num;
// }//当num传入的是0的时候，num拿到的值是200，而我们实际想要的是0

//ES6解决
// function action(num = 200){
//     console.log(num);
// }
// action(0);// 0
// action();// 200
// action(300);// 300


//箭头函数
// [1,2,3].map(x=>x+1);
//
// //相当于
// [1,2,3].map(function(x){
//     return x+1;
// }).bind(this);


// //当函数有且仅有一个参数的时候，可以省略掉括号，当函数返回有且仅有一个表达式的时候可以省略{}和return
// var people = name=>'hello'+name;
// //而下面的就不可以省略
// var people = (name,age)=>{
//     const fullName = 'hello' +name;
//     return fullName;
// };


//ES5
// var calculate = function (x,y,z) {
//     if(typeof x!='number'){x=0}
//     if(typeof y!='number'){y=6}
//     var dwt = x%y;
//     var result;
//     if(dwt == z){result =true}
//     if(dwt != z){result =false}
//     return result;
// };

//ES6改写
// let calculate = (x,y,z)=>{
//    x = typeof x === 'number'?x:0;
//    y = typeof y === 'number'?y:6;
//     return x%y === z;
// };


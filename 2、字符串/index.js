//->ES5
// var name = 'lux';
// console.log('hello '+name);

//->ES6
// const name = 'lux';
// console.log(`hello ${name}`);//hello lux

//-ES5
// var msg = "Hi\nman!";
// console.log(msg);//Hi man!

// //-ES6
// const template = `<div>
//   <span>hello world</span>
//   </div>`;
// console.log(template);

//1、includes:判断是否包含然后直接返回布尔值
// const str = 'hahay';
// console.log(str.includes('y'));//true

//2、repeat:获取字符串重复n次
// const str = 'ha';
// console.log(str.repeat(3));//'hahaha'
// 如果带入小数，Math.floor(num)来处理
// str.repeat(3.1) 或者 str.repeat(3.9)都当成str.repeat(3)来处理

//3、starsWith 和 endsWith 判断是否以 给定文本 开始或者结束
// const str = 'hellow world!';
// console.log(str.startsWith('hello'));//true
// console.log(str.endsWith('!'));//true

//4、padStart 和 padEnd 填充字符串，应用场景：时分秒
//第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串
//如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串
// setInterval(()=>{
//     const now = new Date();
//     const hours = now.getHours().toString();
//     const minutes = now.getMinutes().toString();
//     const seconds = now.getSeconds().toString();
//     console.log(`${hours.padStart(2,0)}:${minutes.padStart(2,0)}:${seconds.padStart(2,0)}`);
// },1000);

// let address = '北京海淀区';
// let name = 'lala';
// let str = `${name}在${address}上班...`;
// function myTemplate(str){
//     return str;
// }
// console.log(myTemplate(str));//lala在北京海淀区上班...


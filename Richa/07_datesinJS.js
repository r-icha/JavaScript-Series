//**** Dates ****/
let myDate = new Date()
console.log(myDate);// OUTPUT-- 2024-05-20T07:22:27.241Z
console.log(myDate.toString());//OUTPUT -- Mon May 20 2024 07:22:27 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//OUTPUT-- Mon May 20 2024
console.log(typeof myDate);// this is an interview question and OUTPUT is Object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());// months jo h javascript le andar ero se start hote hain
let myCreatedDate1 = new Date(2024, 0, 23, 5, 3)
console.log(myCreatedDate1.toLocaleString());// 
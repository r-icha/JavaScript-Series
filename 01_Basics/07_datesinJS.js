//**** Dates ****/
let myDate = new Date()
console.log(myDate);// OUTPUT-- 2024-05-20T07:22:27.241Z
console.log(myDate.toString());//OUTPUT -- Mon May 20 2024 07:22:27 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//OUTPUT-- Mon May 20 2024
console.log(typeof myDate);// this is an interview question and OUTPUT is Object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());// months jo h javascript ke andar zero se start hote hain
let myCreatedDate1 = new Date(2024, 0, 23, 5, 3)
console.log(myCreatedDate1.toLocaleString());// 

let myCreateDate2 = new Date("02-14-2024")
console.log(myCreateDate2.toLocaleString());//

let myTimeStamp = Date.now()
console.log(myTimeStamp);// output 1716489328414 --- yeh miliseconds m aaaya h
console.log(myCreateDate2.getTime());//1707868800000
console.log(Date.now());// yeh abhi ki date dega  joki milisecond m milega----1716489668761
console.log(Date.now()/1000);// milisecond ko second m change krna h iske liye yeh krenge but answer decimal m aayega---1716489668.761
console.log(Math.floor(Date.now()/1000));// decimal m value ka aaaye uske liye yeh Math.floor method lgaenge----1716489668
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());//current month dega but javascript m month zero se start hoga and hme enduser ko dikhana h toh uske liye hm console.log(newDate.getMonth() + 1); aise +1 krdenge taki exact month dikhae 
console.log(newDate.getDay());//day bhi zero se start hoga isko bhi end user ko shi day dikhane ke liye +1 krna hoga

newDate.toLocaleString('default', {
    weekday: "long",
})
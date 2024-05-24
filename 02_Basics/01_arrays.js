// JavaScript arrays are resizable and can contain a mix od different datatypes
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr);
console.log(myArr[0]);

//Array methods
 myArr.push(6)//this method simply add values inside the array here we want to add 6 
 myArr.push(7)
 console.log(myArr);// [0, 1, 2, 3, 4, 5, 6, 7]

 myArr.pop()// pop m- jo bhi last value hogi array ke andar usko remove krdenge
 console.log(myArr);// [0, 1, 2, 3, 4, 5, 6]

 myArr.unshift(9);// yeh unshift kya krta h ki jo value hm () m diye h usko array ke starting m insert krdeta h
 console.log(myArr);// [9, 0, 1, 2, 3, 4, 5, 6]
myArr.shift()// yeh aage jo starting m element h usko remove krdega
console.log(myArr);// [0, 1, 2, 3, 4, 5, 6]

console.log(myArr.includes(9));// isme hm check krenge ki yeh element array m present h bhi ya nhi

console.log(myArr.indexOf(9)); // yeh output m -1 dega because element 9 exist hi ni krta h array m toh isliye iska index pta hi ni h isliye wo -1 dega kyunki usko aisa koi element pta hi nhi h
console.log(myArr.indexOf(2)); // element 2 index 2 pr h isliye yeh output m 2 dega
const newArr = myArr.join() // join() helps us to Adds all the elements of an array into a string, separated by the specified separator string. array elements are separated with a comma
console.log(myArr);// [0, 1, 2, 3, 4, 5, 6]
console.log(newArr);// 0,1,2,3,4,5,6
console.log(typeof newArr); // join ka type String h

// slice, splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
// slice m hmara original array same hi rhega but splice m jo range denge wo sari values hmare original array se hat jaengi here hmara original arrayt manipulate ho jaega

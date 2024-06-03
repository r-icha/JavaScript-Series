/* for-of loop

--------syntax---
for (const iterator of object) {
    
}
here iterator :- works as a i that we used in loops
 yeh loop array specific loop hain 

 ["", "", ""]-- arary ke andar string
[{}, {}, {}]-- array ke andar object

*/

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}


const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);

}


// map:- is an object
//yeh bhi ek data type hota h

const map = new Map()
map.set('IN', 'India')
map.set("uk", "unitesd states of America")
console.log(map);


const map1 = new Map()
map1.set('IN', 'India')
map1.set("uk", "unitesd states of America")
map1.set('IN', 'India')
console.log(map1);
//Maps unique value ke liye jane jate h aur jsi order m value di h usi order m aayega output m bhi value

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

//--- we use for of loop in object or not -------------
const myObj = {
'game1': 'NFS',
'game2': 'spiderman'
}
for (const [kay, value] of myObj) {
    console.log(key, ':-', value);
}
// here myobj is not iterable is method se hm object ko ni iterate kr skte h aise object ko iterate krne ke aur tarike hote hain but for-of loop wala syntax or structure kaam ni krra h object ke liye
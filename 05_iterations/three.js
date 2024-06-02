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

const map = new Map()
map.set('IN', 'India')
map.set("uk", "unitesd states of America")
console.log(map);

/*const map1 = new map1()
map.set('IN', 'India')
map.set("uk", "unitesd states of America")
map.set('IN', 'India')
console.log(map1);*/
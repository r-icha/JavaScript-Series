// Singleton  -- jb hm litrals ki trh declare krte hai to singleton object nahi bnta h agar constructor se bnega toh singleton object bnega.

//object literals
Object.create // aise bhi object create krskte h is tarike ko hm bolte h constructor method ke through and isi method ke andar singleton bnta h

//----const JsUser ={}-----
//aise hm object bnate hain {}yeh curly braces hi object h aur yahan object ke andar keys aur value ka chhakar hota h

const mySym = Symbol("key1")

const JsUser ={
 name:"Richa",//by default system name ko string ki trh hi process krta h "name" aise but hm likhte  name aise hain kyunki system itna understand krleta h
 mySym: "myKey1",
 age:18,
 location: "Hathras",
 email: "richa@gmail.com",
 "full name": "Richa Chaudhary",
 isLoggedIn: false,
 lastLoginDays: ["Monday", "Saturday"]
}
//how to excess objects
console.log(JsUser.email)// dot ki trh dete h toh isko string ki trh excess lene ki jarurat nahi h
console.log(JsUser["email"])// isko hm
//console.log(JsUser.full name); isko hm kbhi bhi dot lga ke excess ni krskte h iske liye square notation hi use krenge
console.log(JsUser["full name"]);// full name ke liye aise hoga 
console.log(JsUser.mySym);
console.log(typeof JsUser.mySym);// its data type is string but we initialize mySym as symbol so this is the problem
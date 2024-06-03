const myObject = {
    js: "JavaSCript",
    cpp: "C++",
    rb: "ruby"
}
// for-in loop
for (const key in myObject) {
        
   // console.log(key);
}

const programming = ["js", "rb", "py"]
for (const key in programming) {
//console.log(key);
//console.log(programming[key]);
}

//------map pr agar for-in loop work krta h ya ni------
const map = new Map()
    map.set('In', "India")
    map.set('Fr', "French")
    map.set('In', "India")
    
    for (const key in map) {
       console.log(key); // it gives nothing out
    }
    // map jo h wo iteratable nhi h aur koi cheez iteratable ni h toh uski is trh loop m ni likha jaa skta h jaise upar hme likha h uske different aur tarike hain
const accountId = 123432
let accountEmail = "richamaarula7@gmail.com"
var accountpassword  = "12342234"
accountCity="Hathras"// variable hm aise bhi declare krskte  but it not a good habit
let accountState; // ; yeh use bhi krskte h aur nhi bhi and hm ek variable define krre  aur usme koi value assign ni krri hu toh yeh mujhe output m (UNDIFINED) dega
//accountId = 2 // const value ek hi rhti h whole program  m isme hm upar hi accountId ko constant bna chuke h toh ab accountId ki  value change ni hoge and error degi

console.log(accountId)
accountEmail = "richacsjm.com"
accountPassword = "234132"
accountCity = "Jogia"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/*
Prefer not to be use var because of issue in block scope and funcional scope
*/
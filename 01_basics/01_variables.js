const accountId = 99500
let accountEmail = "gorav@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 //not allowed

console.log(accountId);

/*
Prefer not to use var
because of its issue in block scope and functional scope
*/

accountEmail = "gc@gc.com"
accountPassword = "121212"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity])
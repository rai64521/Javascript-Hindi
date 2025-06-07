const accountId = 342326
let accountEmail = "raisumant@sapio.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 2       // This is not allowed in javascript
accountEmail = "rai@lenovo.com"
accountPassword = "232223"
accountCity = "Delhi"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


/*
prefer not to use var
because of issue in block scope and functional scope
*/
const accountId = 144553
let accountEmail = "madhuri@google.com"
var accountPassword = "12345"
accountCity = "Rishikesh"

// accountId = 2 //not allowed

accountEmail ="hc@hc.com"
accountPassword="112233"
accountCity ="jaipur"
//without var or let you can use it but its not a right way
let accountState;
console.log(accountId);
console.log(accountEmail);



/*
prefer not to usse var 
because of issue in block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


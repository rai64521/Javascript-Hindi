// singleton

//object Literals

// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name:"Sumant",
    age: 20,
    [mySym]: "myKey1",
    location: "Mumbai",
    email: "sumantrai@google.com",
    isLoggedIn: false,
    lastLoginDays:["Mondey","Friday"],
    "full name":"Sumant Rai"
}
// console.log(JsUser.name);
// console.log(JsUser["name"]);

// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser.mySym);

JsUser.email = "rai@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "rai@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
    
}

JsUser.greetingTwo= function(){
    console.log(`Hello Js User, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





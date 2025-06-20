const user = {
    username: "sumantrai",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
        
        
        
    }
}

// console.log(user.username);
//console.log(user.getUserDetails());
// console.log(this);

function User(username,loginCount,IsLoggedIN){
    this.username = username
    this.loginCount = loginCount
    this.IsLoggedIN = IsLoggedIN

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this

}
const userOne = new User("Shubhangi",8,true)
const userTwo = new User("Rai",5,false)
console.log(userOne.constructor);
// console.log(userTwo);



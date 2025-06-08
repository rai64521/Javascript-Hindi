// singleton 

// const tinderUser = new Object()     =>Singleton Object
const tinderUser = {}                 //=>Non Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sunny"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "rai@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Sumant",
            lastname: "Rai"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
const obj1 ={
    1:"S",
    2:"K"
}
const obj2 = {
    3:"A",
    4:"M"
}
const obj4 ={
    5:"S",
    6:"M"
}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


const users =[
    {
        id:"1",
        email:"rai@gmail.in"

    },
    {
        id:"2",
        email:"rai@gmail.hot"

    },
    {
        id:"3",
        email:"rai@gmail.edu"

    }
]
users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));





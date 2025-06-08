const user = {
    username: "shubhangi",
    age: 20,
    welecomeMessage: function () {
        console.log(`${this.username} ,welcome to website`);
        // console.log(this);
        

    }
}
// user.welecomeMessage()
// user.username = "Sumant"
// user.welecomeMessage()

// console.log(this);

// function chai(){
//     let username="rai124"
//     console.log(this.username);
    
// }
// chai()

//this only use in object they not work in the function

// const chai = function(){
//     let username = "rai124"
//     console.log(this.username);
    
// }
// chai()


const chai = () => {
    let username = "rai124"
    console.log(this);
    
}
// chai()


//Arrow Function

// const addTwo =(num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,9));

// const addTwo =(num1, num2) =>  num1 + num2

// const addTwo =(num1, num2) =>  (num1 + num2)

const addTwo =(num1, num2) =>  ({username :"rai"})

console.log(addTwo(3,9));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()



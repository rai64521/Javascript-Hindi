

function sayMyName() {
    console.log("S");
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("T");
}


// sayMyName()

// function addTwoNumber(number1, number2){
    
//     console.log(number1 + number2);
    
// }
function addTwoNumber(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}
const result = addTwoNumber(3,5)
// console.log("Result: ",result);




function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sumant"));
// console.log(loginUserMessage("Shubhangi"));


function calculateCartPrice(value1, value2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,100,300));

const user={
    username: "sumantrai",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({
    username:"Sam",
    price:399
})

const myNewArray =[200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));



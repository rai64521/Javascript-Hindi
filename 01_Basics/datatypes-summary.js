// Primitive

// 7 types: String, Number, Boolean, null, undefined , Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3264287436734213432134323n



// Refrence (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj","doga"]      //Array

let myObj = {
    name: "Sumant Rai",               //Object
    age: 20
}

const myfunction=function(){

    console.log("Hello Shubhangi");
    
}

console.log(typeof outsideTemp);

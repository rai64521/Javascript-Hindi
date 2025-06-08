// var c = 300

let a = 300

if (true) {
    let a = 10
    const b = 20
    //  var c = 30
    // console.log("Inner: ",a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "Sumant"
    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username = "rai"
    if(username === "rai"){
        const website = "youtube"
        // console.log(username + website);
        
    }
    // console.log(website);    //Error
    
}   
// console.log(username);     //Error
  


//++++++++++++++++++++++++++++++++++++++Intersting++++++++++++++++++++++++++++++++++++++++++++++++++++

// Type 1

console.log(addone(4));

function addone(num){
    return num + 1

}
// console.log(addone(4));

// Type 2

// console.log(addTwo(6));      // Error
const addTwo = function(num){
    return num + 2
}
// console.log(addTwo(6));










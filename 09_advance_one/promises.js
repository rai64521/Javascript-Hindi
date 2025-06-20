// fetch('https://somthjing.com').then().catch().finally()

const promiseOne = new Promise(function(resolve,reject){
    //Do an asyn task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        

    },1000)
}).then(function(){
    console.log("async 2 resolved ");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "rai64521", email: "raisumant99@gmail.com"})

    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Shubhangi", password: "shubh@65"})
        }else{
            reject('Error: something went wrong')
        }

    },1000)

})

promiseFour.then(function(user){
    console.log(user);
    return user.username
    
}).then(function(username){
    console.log(username);
    

}).catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log("The promise is either resolved or rejected");
    
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "JavaScript", password: "12345"})
        }else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
   try {
    const respose = await promiseFive
    console.log(respose);
   } catch (error) {
    console.log(error);
    
    
   }
    
}
consumePromiseFive()


// async function getAllUser(){
//    try {
//     const respose =  await fetch('https://randomuser.me/api/')
//     const data = await respose.json()
//     console.log(data);
    
//    } catch (error) {
//     console.log("E:",error);
//   }   

// }
// getAllUser()

fetch('https://api.github.com/users/rai64521').then((respose)=>{
     return respose.json()
}).then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})
    

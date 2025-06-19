// fetch('https://somthjing.com').then().catch().finally()

const promisOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(()=>{
        console.log('Async task is complete');
        resolve()
        
    },1000)
})

promisOne.then(function(){
    console.log("Promise consumed");
    
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promisThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "rai64521",email: "raisumant99@gmail.com"})

    },1000)
})
promisThree.then(function(user){
    console.log(user);
    
})

const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "shubhangi", password: "shubh@63"})
        }else{
            reject('Error: something went wrong')
        }

    },1000)
})

   PromiseFour.then((user)=>{
    console.log(user);
    return user.username
    

}).then((username)=>{
    console.log(username);
    

}).catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("The promises is either resolved or rejected");
    
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript", password:"12345"})
        }else{
            reject('Error: JS went wrong')
        }
    },1000)
})
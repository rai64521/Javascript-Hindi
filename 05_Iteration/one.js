// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best Number");
        
    }

    // console.log(element);
      
}
// console.log(element);


for(let i = 1; i <= 10; i++){
    // console.log(`Outer lopp values: ${i}`);
    
    for (let j = 1; j <=10; j++) {
        // console.log(`Inner loop Value ${j} and inner loop ${i}`); 
        // console.log(i + '*' + j + '=' + i*j);
        
    }
}

let myArray =["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    // const element = myArray[index];
    // console.log(element);
    
    
}




//break and continue

//Break

for (let index = 1; index <= 20; index++) {

    if(index ==5){
        //console.log("Detected 5");       // Detected hone pe sab khatm 
        break  
    }
   
    //console.log(`Value of i is ${index}`);  
}


//Continue

for (let index = 1; index <= 20; index++) {

    if(index ==5){
        console.log("Detected 5"); 
        continue                        // Ek baar skip hoga 
    }
   
    console.log(`Value of i is ${index}`);
    
    
}
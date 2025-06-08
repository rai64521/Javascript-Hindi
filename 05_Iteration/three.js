// for of

// ["", "", ""]
// [{}, {} ,{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {

    // console.log(num);
}

const greetings = "Hello Shubhangi!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

//Maps
const map = new Map()
map.set('IN',"India")
map.set('USA',"United Sate of America")
map.set('fr',"france")

// console.log(map);

for (const [key,values] of map) {

    console.log(key,':-', values);    
}

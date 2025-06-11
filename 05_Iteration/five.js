const coding = ["js", "ruby","java","python","cpp"]

// coding.forEach( function (item) {
//     console.log(item);
    
// }) 

// coding.forEach( (item)=>{
//     console.log(item,);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item,index,arr);
    
// })

const myCoding =[
    {
        lanaguagename: "javaScript",
        lanaguagefilename:"js"
    },
    {
        lanaguagename: "python",
        lanaguagefilename:"py"
    },
    {
        lanaguagename: "java",
        lanaguagefilename:"java"
    }
]
myCoding.forEach(function(item){
    console.log(item.lanaguagename);
    
})
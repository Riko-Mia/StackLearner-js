// first class function in js

// 1. A function can be stored in a variable

function add(a,b){
    return a+b
}
var sum = add
console.log(sum(4,5))


// 2. A function can be stored in an Array
var arr = []
arr.push(add)
console.log(arr[0](5,3))
// 3. A function can be stored in an Object
var obj = {
    sum: add
}
console.log(obj)
console.log(obj.sum(3,6))
// 4. we can create function as Need 

setTimeout(function(){
    console.log('I have created...')
},100)


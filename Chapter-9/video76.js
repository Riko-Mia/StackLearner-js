// reduce function in javascript 
var arr = [1,2,3,4,5]

var sum = arr.reduce(function(prev, curr){
    return prev + curr
},100)
var max = arr.reduce(function(prev, curr){
    return Math.max(prev, curr)
},0)

console.log(max)
console.log(sum)


function myReduce(arr, cb, acc){
    for (let i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i])
        
    }
    return acc
}

console.log(myReduce(arr,function(prev, curr){
    return prev + curr
}, 0))

console.log(myReduce(arr, function(prev, curr){
    return Math.max(prev, curr)
}, 0))
console.log(myReduce(arr, function(prev, curr){
    return Math.min(prev, curr)
},arr[0]))


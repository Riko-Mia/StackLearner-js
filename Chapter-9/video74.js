// Map function in javascript 


var arr = [1,2,3,5]
// var sqrArr = arr.map(function(value){
//     // return Math.random()*100
//     return value * value
// })

// console.log(arr)
// console.log(sqrArr)


function myMap(arr, cb){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        // var temp = arr[i] * arr[i]
        var temp = cb(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr
}

var qb = myMap(arr, function(value){
    return value * value * value
})
var mten = myMap(arr, function(value){
    return value * 10
})

// var result
// console.log(myMap(arr))
console.log(arr)
console.log(qb)
console.log(mten)


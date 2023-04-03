// filter function in javascript 

var arr = [4,5,7,9,2,8,3,1,6]

// var filterArr = arr.filter(function(value){
//     // return value % 2 === 0
//     return value >5 
// })
// console.log(filterArr)

function myFilter(arr,cb){
    var arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if(cb(arr[i],i, arr)){
            arr2.push(arr[i])
        }
        
    }
    return arr2
}



console.log(myFilter(arr, function(value){
    return value % 2 === 0;
}))

console.log(myFilter(arr, function(value){
    return value % 2 === 1;
}))

console.log(myFilter(arr, function(value){
    return value < 6;
}))

console.log(myFilter(arr, function(value){
    return value > 6;
}))

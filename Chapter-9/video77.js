// Find and findIndex function in javascript 
var arr = [4,7,8,3,7,5,8,10,6,9]

// console.log(arr.find(function(value,index){
//     return value === 9
// }))
// console.log(arr.findIndex(function(value){
//     return value === 7
// }))

function myFind(arr, cb){
    for (let i = 0; i < arr.length; i++) {
        if(cb(arr[i])){
            return arr[i]
        }
        
    }
}
console.log(myFind(arr, function(value){
    return value === 9
}))



function myFindIndex(arr, cb){
    for (let i = 0; i < arr.length; i++) {
        if(cb(arr[i])){
            return i
        }
        
    }
}
console.log(myFindIndex(arr, function(value){
    return value === 3
}))




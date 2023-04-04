// Function argument and parameters in javascript

function add(a,b){
    var result = a+b
    console.log(result)
}
add(20,30)

var arr1 = [3,5,7]
var arr2 = [6,3,7,5]

function sumOfArr(arr){
    var sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        
    }
    console.log(sum)
}
sumOfArr(arr1)
sumOfArr(arr2)
sumOfArr([50,80])

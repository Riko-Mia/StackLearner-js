// js array traversing 

var arr = [3,5,6,7,9,8,80,-5,1]

var arrTotal = 0
var max = [0]
var min = [0]
for (let i = 0; i < arr.length; i++) {
    // arr[i] = arr[i] + 2
    arrTotal += arr[i]
    // console.log(arr[i])
    if(arr[i] % 2 === 0){
        console.log(`This is even number : ${arr[i]}`)
    } else{
        console.log(`This is oddddd number : ${arr[i]}`)
    }

    if(max < arr[i]){ //max value defined
        max = arr[i]
    }
    if(min > arr[i]){
        min = arr[i]
    }


}
console.log(max)
console.log(min)
console.log(arrTotal)












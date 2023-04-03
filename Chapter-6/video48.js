// js reverse an array 
var arr = [1,2,3,4,5,6,7,8,9]
for (let i = 0; i < (arr.length / 2); i++) {
    const temp = arr[i];
    arr[i]= arr[arr.length -1 -i]
    arr[arr.length -1 -i] = temp
    console.log(temp)
}
console.log(arr)
console.log(arr.reverse())







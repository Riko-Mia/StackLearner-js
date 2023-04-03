// js search value in array 
var arr = [1,2,3,4,5,6,7,8,55]
var find = 55
var isFound = false
for (let i = 0; i < arr.length; i++) {
    if(arr[i] === find){
        console.log(`data forund at Index ${i}`)
        isFound = true
        break;
    }
    
}
if(!isFound){
    console.log(`Data not found`)
}








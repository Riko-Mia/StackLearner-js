// object methods in javascript 

var point = {
    x: 10,
    y: 20,
    z: 30
}
// console.log(Object.keys(point))
// console.log(Object.values(point))
// console.log(Object.entries(point))

var arr = Object.entries(point)
// console.log(arr[0])

// var obj2 = point
// obj2.x = 50
// obj2.y = 100
// console.log(point)


var obj2 = Object.assign({},point)
obj2.x = 100

console.log(obj2)
console.log(point)







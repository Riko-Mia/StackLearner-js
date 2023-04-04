// iterate object properties in javascript
var point = {
    x: 10,
    y: 20,
    z: 30
}
console.log('x' in point)
console.log('p' in point)
var sum = 0
for(var i in point){
    // console.log(i)
    console.log( i + ': ' + point[i])
    sum += point[i]
}

console.log(sum)
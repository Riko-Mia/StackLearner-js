// sort some and every function in javascript
var person =[
    {name: 'A', age: 24},
    {name: "B", age: 19},
    {name: "C", age: 26},
    {name: "D", age: 21}
]

var arr = [4,8,-2,3,7,6,9,8,7,4,8,6,5,9]
// arr.sort()
// console.log(arr)

// person.sort()
// console.log(person)


arr.sort(function (a,b){
    if(a>b){
        return 1
    } else if(a<b){
        return  -1
    } else {
        return 0
    }
})
// console.log(arr)



person.sort(function(a,b){
    if(a.age > b.age){
        return 1
    } else if (a.age < b.age){
        return -1
    } else{
        return 0
    }
})

console.log(person)


console.log(arr.every(function(value){
    return value % 2 === 0
}))

console.log(arr.every(function(value){
    return value > 0
}))

console.log(arr.some(function(value){
    return value % 2 === 1
}))

console.log(arr.some(function(value){
    return value < 0
}))

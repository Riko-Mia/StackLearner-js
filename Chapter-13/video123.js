// property descriptor in javascript

var person = {
    name: 'Riko mia'
}
// console.log(person)

// for (var i in person){
//     console.log(i)
// }
// console.log(Object.keys(person)) //property descriptor

// var descriptor = Object.getOwnPropertyDescriptor(person, "name")
// console.log(descriptor)

// let baseObj = Object.getPrototypeOf(person)
// let descriptor = Object.getOwnPropertyDescriptor(baseObj, "toString")
// console.log(descriptor)



Object.defineProperty(person,"name",{
    enumerable: false,
    writable: false,
    configurable: false,
    value: 'riko'
})





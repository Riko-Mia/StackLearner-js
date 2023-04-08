// constructor prototype in javascript

function Person(name){
    this.name = name
}

Person.prototype.PI = 3.456

var p1 = new Person('Riko Mia')
var p2 = new Person('Riko')

console.log(Object.getPrototypeOf(p1))
console.log(Person.prototype)
console.log(p1)
console.log(p2)

console.log(Object.getPrototypeOf(p1))

// let p3 = new Person('Masud')
// console.log(p3)

// console.log(Person.prototype)




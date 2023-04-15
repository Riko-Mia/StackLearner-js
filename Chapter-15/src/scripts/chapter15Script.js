// Chapter 15 




// video 140
// let vs const vs var in javascript 





// video 141
// Arrow function syntax in javascript 
/** 
let add = (a,b) => a*b 
console.log(add(10,2))

let sqr = x => x * x
console.log(sqr(9))
*/





// video 142
// Arrow function & this in javascript 
/**
let add = (a,b) => a*b 
console.log(add(10,2))

let sqr = x => x * x
console.log(sqr(9))


function testMe(){
    // "use strict";
    console.log(this)
}

testMe.call({})

let obj ={
    // "use strict";
    name: 'Riko ahmed',
    print2:()=>{
        console.log(this)
    },
    print:function(){
        console.log(this)
    }
}

// obj.print()
obj.print2() */






// video 143
// Default parameters in javascript 
/**
// function sqr(n=1){
//     return n*n
// }
// console.log(sqr(10))

function greet(name= 'Riko', msg  ='Hello'){
    // console.log(name.length)
    console.log(`${msg} ! ${name}`)
}
greet(null, 'Hello')
 */






// video 144
// custom iterable Object in javascript 
/**
let obj = {
    start: 1,
    end: 5,
    [Symbol.iterator]: function(){
        let currentValue = this.start
        const self = this
        return{
            next(){
                return{
                    done:currentValue > self.end,
                    value: currentValue > self.end ? undefined : currentValue++
                }
            }
        }
    }
}
// for (let v of obj){
//     // console.log(v)
// }

let iterate = obj[Symbol.iterator]()
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next()) */







// video 145
// Rest & spread operator in javascript 
/**

// ******     ...       ******


//  OLD model 
function sum(){
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
        
    }
    return sum
}
console.log(sum(10,20,30))
 

// New model (es6)
function sum(... rest){
    // console.log(rest)
    return rest.reduce((a,b) => a+b)


}
// console.log(sum(10,30,40))

let a= [1,2,3,4]
// console.log(...a)
let obj ={
    a:10,
    b:20,
    c:30
}
let obj2 = {
    ...obj
}
console.log(obj2) 
*/








// video 146
// Enhance object in javascript 
/** 

let a = 10
let b = 20

let obj = {
    a,
    b,
    print(){
        console.log(this)
    }
}
// console.log(obj)
obj.print() */








// video 147
// Destructuring in javascript 
/** 
var person = {
    name:'Riko mia',
    email: 'rikomia722@gmail.com',
    address:{
        city:'Dhaka',
        country: 'Bangladesh'
    }
}
// let name = person.name
// let email = person.email
let {name, email,address, address:{city, country}} = person 
// console.log(name,email, city,country) 
let arr=[1,2,3,4,5,6]
let[first,second, , , ,last]=arr
console.log(first,last) */








// video 148
// object form entries in javascript 
 /** 
let obj = {
    a:10,
    b:20
}
// console.log(Object.entries(obj))
var objArr= [
    ['a', 30],
    ['b', 31],
    ['c', 32]
]
console.log(Object.fromEntries(objArr))
// console.log(objArr) 
*/








// video 149
// Symbols in javascript 
// /** 
let s1= Symbol()
let s2= Symbol('test symbol')

console.log(s1)
console.log(s2)
console.log(s1 === s2)

let toss= {
    head: Symbol("HEAD"),
    tail: Symbol('Tail')
}
// A name 
// Name callition
//  */








// video 150
// Webpack 4 + babel7 
/**  */


// **********    NEXT Video plugin    *********
// npm i -D @babel/core @babel/cli @babel/node @babel/polyfill @babel/preset-env @babel/register babel-loader babel-register html-webpack-plugin























































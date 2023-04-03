// video 176
// What is Asynchronous programming in javascript
/** */







// video 177
// Asynchronous programming is action in javascript
/**
import './lesson-2.js' */







// video 178
// How to store result from async function in javascript
/**
function sayName(name){
    let result 
    setTimeout (() => {
        result = name
        console.log(name)
        console.log('I have done ...') 
    }, 3000)
    return result
}
let output = sayName('Riko mia')
console.log(output) */







// video 179
// Why does javascript act like Asynchronous
/** */






// video 180
// How js handle Asynchronous
/** */






// video 184
// Ajax with callback in javascript
/**
// const xhr = new XMLHttpRequest()
// xhr.open('get', 'https://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange = function(e){
//     if(xhr.readyState === 4){
//         if(xhr.status === 200){
//             let users = JSON.parse(xhr.response)
//             console.log(users)
//         } else {
//             console.log(xhr.status)
//         }
//     }
// }

// xhr.send()


function getRequest(url, callback){
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)

    xhr.onreadystatechange = function(e){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                let response = JSON.parse(xhr.response)
                callback(null, response)
            } else {
                callback(xhr.status, null)
            }
        }
    }
    xhr.send()
}

getRequest('https://jsonplaceholder.typicode.com/users', (err, res) =>{
    if(err) {
        console.log(err)
    } else{
        console.log(res)
    }
})


getRequest('https://jsonplaceholder.typicode.com/posts', (err, res) =>{
    if(err) {
        console.log(err)
    } else{
        res.forEach (r => console.log(r.title))
    }
}) */







// video 185
// Callback not always Asynchronous in javascript
/**
let arr = [1,2,3,4]
let sqrArr = arr.map(v => v * v)

console.log(sqrArr)

function asyncMap(arr, cb){
    return arr.map(v =>{
        // setTimeout(cb.bind(null, v),0)
        setTimeout(() =>cb(v),0)
    })
}
let qbArr = asyncMap(arr, v => {
    console.log(v)
})
console.log(qbArr)*/






// video 186
// why not callback in javascript
/**

function getRequest(url, callback){
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)

    xhr.onreadystatechange = function(e){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                let response = JSON.parse(xhr.response)
                callback(null, response)
            } else {
                callback(xhr.status, null)
            }
        }
    }
    xhr.send()
}


const baseUrl ='https://jsonplaceholder.typicode.com/'
getRequest(`${baseUrl}/1`,(err, res) =>{
    if(err){
        throw new Error('Error occurred 1')
    }
    
    let { userId} = res

    getRequest(`${baseUrl}/users/${userId}`, (err, res) =>{
        if(err){
            throw new Error('Error occurred 2')
        }
        getRequest(`${baseUrl}/posts/1/comments/${res.id}`, (err, res) =>{
            if(err){
                throw new Error('Error Occurred 3')
            }
        })
    })
})
 */






// video 187
// Introduction to promise in javascript
/**

let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'One')
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Two')
})

// console.log(p1)
// console.log(p2)
p1.then((v) => {
    console.log(v)
}).catch((e) =>{
    console.log(e)
})

p2.then((v) => {
    console.log(v)
})
function getIphone(isPassed){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isPassed){
                resolve('I have Got an I Phone')
            } else{
                reject(new Error("You have Failed"))
            }
        })
    })
}

getIphone(false)
    .then((res) => {
        console.log(res)
    })
    .catch((e) => {
        console.log(e)
    })

// console.log(getIphone(false)) */


 




// video 188
// Implement Fetch API in javascript
/**
const baseUrl ='https://jsonplaceholder.typicode.com'

fetch(`${baseUrl}/users/1`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return Promise.resolve('Something')
    })
    .then(str => {
        console.log(str)
        return Promise.resolve('Another Promise')
    })
    .then(another => {
        console.log(another)
    })
    .catch(e => {
        console.log(e)
    })
 */


 




// video 189
// Promise API in javascript
/**

// const delay = s => new Promise(resolve => setTimeout(resolve, s * 1000))

// delay(2).then(() => console.log('2 seconds delay'))
// delay(1).then(() => console.log('1 seconds delay'))
// delay(3).then(() => console.log('3 seconds delay'))
// delay(4).then(() => console.log('4 seconds delay'))
// delay(5).then(() => console.log('5 seconds delay'))

// let p1 = Promise.resolve('Test')
// p1.then(v => console.log(v))

// let p2 = Promise.reject('Reject')
// p2.catch(e => console.log(e))

// let p1 = Promise.resolve("One")
// let p2 = Promise.resolve("Two")
// let p3 = Promise.resolve("Three")

// let promiseArr = [p1,p2,p3]
// Promise.all(promiseArr)
//     .then(arr => {
//         console.log(arr)
//     })

let p1 = new Promise(resolve => {
    setTimeout(resolve, 5000, "One")
})
let p2 = new Promise(resolve => {
    setTimeout(resolve, 3000, "Two")
})
let p3 = new Promise(resolve => {
    setTimeout(resolve, 4000, "Three")
})

let promiseArr = [p1, p2, p3]
Promise.all(promiseArr)
    .then(arr => console.log(arr))


Promise.race(promiseArr)
    .then(v => console.log(v))
 */


 




// video 190
// Async Await in javascript
/**
// function myPromise(){
//     return Promise.resolve('Test value')
// }

// console.log(myPromise())

// async function test(){

// }
// test().then(v => alert(v))

// let p1 = Promise.resolve('I am a Promise')

// let p1 = new Promise(resolve => {
//     setTimeout(resolve, 2000, 'test value')
// })

// async function myAsyncFunc(){
//     // p1.then(v => console.log(v))
//     let v = await p1 
//     console.log(v)
// }
// myAsyncFunc()

// async function fetchData(){
//     let res = await fetch('https://jsonplaceholder.typicode.com/users')

//     let data = await res.json()
//     let names = data.map(u => u.name)
//     let address = data.map(a => a.id)
//     console.log(names + '-'+ address)
    
// }

// fetchData()
let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]

async function promiseAll(){
    let result = await Promise.all(promises)
    console.log(result)
}
promiseAll() */


 




// video 191
// Async Iterator in javascript
/**
let asyncIterable = {
    [Symbol.asyncIterator](){
        let i = 0;
        return {
            next(){
                if(i< 5){
                    return Promise.resolve({
                        value: i++,
                        done: false
                    })
                } else{
                    return Promise.resolve({
                        done: true 
                    })
                }
            }
        }
    }
}

// let iterate = asyncIterable[Symbol.asyncIterator]();
let iterate = asyncIterable[Symbol.asyncIterator]();

(async function() {
    // let v = await iterate.next()
    // console.log(v)
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
})()
// console.log(iterate)
 */


 




// video 192
// For Await of Loop in javascript
/**

let n = 13;
let asyncIterable ={
    [Symbol.asyncIterator] () {
        let i = 0;
        return {
            next(){
                if(i < n){
                    return Promise.resolve({
                        value: i++,
                        done: false
                    })
                } else {
                return Promise.resolve({
                    done: true
                })
                }
            }
        }
    }
}

let iterators = asyncIterable[Symbol.asyncIterator]();

// (async function (){
//     console.log(await iterators.next())
//     console.log(await iterators.next())
//     console.log(await iterators.next())
//     console.log(await iterators.next())
//     console.log(await iterators.next())
//     console.log(await iterators.next())
//     console.log(await iterators.next())
// })()

(async function (){
    for await (let v of asyncIterable){
        console.log(v)
    }
})() */







// video 193
// async generators in javascript
/**
async function * myAsyncGenerator (){
    let i = 0
    while (true){
        if( i > 5 ) return
        yield await Promise.resolve(i++)
    }
}
;(async function (){
    for await (let v of myAsyncGenerator()){
        console.log(v)
    }
})() */







// video 194
// next chapter
/** */















































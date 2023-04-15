

// video 169
// Error in javascript
/**

let n = 10
if(n > 5){
    throw new Error(`${n} is Greater than 5`)
} 
*/






// video 170
// Error Handling with if else in javascript
/**
let n = Number.parseInt('4')
// console.log(n)
function changeToInt(v){
    // if (typeof v === 'object'){
    //     return 'Please provide a value which is able to convert is Integer &  this is Object'
    // }
    let result = Number.parseInt(v)
    if(!result){
        return 'Please provide a value which is able to convert is Integer'
    } 
    return result
}
let result = changeToInt(1)
console.log(result) 
*/






// video 171
// Error Handling with Try Catch in javascript
/**

function makeWords(text){
    try{
        let str = text.trim()
        let words = str.split(' ')
        return words 
    }catch(e){
        // console.log(e.message)
        console.log('Please provide a valid text')
    }

    // let str = text.trim()
    // let words = str.split(' ')
    // return words
}
let words = makeWords(86)
console.log(words) 
*/






// video 172
// Error Handling with if else in javascript
/**
try{
    console.log('I am line 1')
    throw new Error('I am error')
    console.log('I am line 2')
    console.log('I am line 3')
} catch(e){
    console.log(e.message)
} */






// video 173
// Finally block in javascript
/**
try{
    console.log('I am line 1')
    // throw new Error('I am error')
    console.log('I am line 2')
    console.log('I am line 3')
} catch(e){
    console.log(e.message)
} finally{
    console.log('I am Finally Block')
} */






// video 174
// Optional catch binding in javascript
/**
try{
    console.log('I am line 1')
    throw new Error('I am error')
    console.log('I am line 2')
    console.log('I am line 3')
} catch{
    console.log('This is a custom error massage')
} finally{
    console.log('I am Finally Block')
}  */






// video 175
// Optional catch binding in javascript
// /**
class CustomError extends Error{
    constructor(msg){
        super(msg)

        if(Error.captureStackTrace){
            Error.captureStackTrace(this, CustomError)
        }
    }
}

try{
    console.log('I am line 1')
    throw new CustomError('I am error')
    console.log('I am line 2')
    console.log('I am line 3')
} catch(e){
    console.log(e.message)
    console.log('This is a custom error massage')
} finally{
    console.log('I am Finally Block')
} 
//  */

























// video 170
// Error Handling with if else in javascript
/** */
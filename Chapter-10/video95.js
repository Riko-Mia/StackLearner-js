// Closure in javascript
// Closure is when a function is able to remember and access it's lexical scope even when that function Executing outside it's lexical scope. 

// able to remember and access it's lexical scope
// when that function Executing outside it's lexical scope.


// function test(){
//     var msg = "I am learning Lexical scope and closure."

//     function sayHi(){
//         console.log(msg)
//     }
//     sayHi()
// }
// test()


function test(){
    var msg = "I am learning Lexical scope and closure."

    return function(){
        console.log(msg)
    }

}

var sayMsg = test()
sayMsg()











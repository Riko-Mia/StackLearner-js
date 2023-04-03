// Higher order function in javascript 

// 5. We can pas  function as an arguments 
// 6. We can return functions form another function
function add(a,b){
    return a+b
}
function manipulate(a,b,func){
    var c = a+b
    var d = a -b
    
    return function(){
        var m = func(a,b)
        return c*d*m
    }
    return multiply
}
var multiply = manipulate(3,4,add)
console.log(multiply())






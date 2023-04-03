// function Expression in javascript 

var addition = function(a,b){
    return a+b
}
console.log(addition(10,30))


setTimeout(function (){
    console.log(addition(10,20))
}, 5000)


var another = addition

console.log(another(10,100))



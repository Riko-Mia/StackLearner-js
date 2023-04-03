
// return something from a function in javascript 

function addAll(){
    var sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
        
    }
    return sum
}
var result = addAll(2,5,8,90,43)

console.log(result, addAll(120,45))


function person(name, email){
    return {
        name: name,
        email: email
    }
}
var p1 =person('Riko', 'rikomia722@gmail.com')
console.log(p1)






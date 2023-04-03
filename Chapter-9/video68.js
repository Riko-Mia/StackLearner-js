// Pure function in javascript 


// it return the same result if given  the same arguments
// it does not cause any observable side effects.


function sqr(n){
    return n*n
}
console.log(sqr(2))
console.log(sqr(3))
console.log(sqr(2))

var n = 10
function change(){
    n =100
}
change()
console.log(n)

var point ={
    x: 45,
    y: 30
}

function prionPoint(point){
    point.x= 100
    point.y = 200
    console.log(point)
}

prionPoint(point)
console.log(point)



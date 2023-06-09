// currying in javascript 

function add (a, b, c){
    return a+b+c
}

// console.log(add(41,52,63))

function currying(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

console.log(currying(5)(10)(15))


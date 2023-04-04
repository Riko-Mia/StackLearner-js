// function composition in javascript

function print(inp){
    console.log(inp)
}

function multiply(n){
    return n * 5
}

function add(a,b){
    return a + b
}
print(multiply(add(3,5)))

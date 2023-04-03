// pass by value vs pass by reference 


// Pass by value vs pass by reference or call by value vs call by reference 

var n = 10

function change(n){
    n = n +100
    console.log(n)
}

change(n)
console.log(n)

var obj = {
    a: 10,
    b: 20
}
function changeMe(obj){
    obj.a = obj.a + 100
    obj.b = obj.b + 100
    console.log(obj)
}
changeMe(obj)
console.log(obj)






// Scope chain in javascript 

var a = 11
function A(){
    var b = 12
    function B(){
        var c = 23
        console.log(c)
    }

    function C(){
        var d = 56
        console.log(d)
    }

    console.log(b)
    D(b)
    B() //23
    C()// 56
}
function D(n){
    return n +a
}
A()








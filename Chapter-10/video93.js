// lexical Scope in javascript
var x = 45
function test(){
    // var x = 45
    console.log(x)

    function nested(){
        var y = 65
        console.log(x)
    }
    // console.log(y)
    nested()
}
test()











// Argument Object in javascript


function test(a,b,c){
    // console.log(JSON.stringify(arguments))
    console.log(arguments)
    // console.log(typeof a)
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        
    }
}
// test()
test(10,20,30)


function addAll(){
    var sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
        
    }
    console.log(sum)
}
addAll(2,5,8,90,43)







    
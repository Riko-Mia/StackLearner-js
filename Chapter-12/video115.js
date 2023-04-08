// Bind, Call, Apply in javascript 
function test() {
    console.log('Something')
}


var Rect = new Function('width', 'height', `this.width = width
    this.height = height

    this.draw = function(){
        console.log('I am a rectangle')
        this.printPro()
        console.log(this)
    }

    this.printPro = function(){
        console.log('My width is '+ this.width)
        console.log('My height is '+ this.height)
    }`)

// var rect5 = new Rect(5,8)
// console.log(rect5)
// rect5.draw()
// console.log(test.name, test.length)

function myFunc(c, d){
    console.log(this)
    console.log(this.a + this.b+ c + d)
}

//call, apply 
//bind

// myFunc.call({a: 40, b:25},10, 5)
// myFunc.apply({a: 400, b:250}, [10, 5])
// myFunc.apply({})
// myFunc()

var testBind = myFunc.bind({a:7, b:3})
testBind(5,5)




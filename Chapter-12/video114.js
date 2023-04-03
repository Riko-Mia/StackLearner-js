// function are object in javascript

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

var rect5 = new Rect(5,8)
console.log(rect5)
rect5.draw()
console.log(test.name, test.length)



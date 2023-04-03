// new keyword in javascript 

var Rectangle = function(width, height){
    this.width = width
    this.height = height

    this.draw = function(){
        console.log('I am a rectangle')
        this.printPro()
        console.log(this)
    }

    this.printPro = function(){
        console.log('My width is '+ this.width)
        console.log('My height is '+ this.height)
    }
}

// var rect1 = new Rectangle(100,60)
// rect1.draw()



function myNew(constructor){
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1)) 
    return obj
}
var rect1 = myNew(Rectangle, 45,50)
rect1.draw()







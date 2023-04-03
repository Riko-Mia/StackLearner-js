// Abstraction in javascript 

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

var rect7 = new Rectangle(45, 30)
rect7.printPro()







// constructor property in javascript 
Rectangle = function(width, height){
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

var rect1 = new Rectangle(100,60)
rect1.draw()

// var obj = {}
// var obj = new Object()
// var str = new String('str')
// console.log('my string is ' + str)








// How to use getter setter in javascript
var Rectangle = function(width, height){

    var position = {
        x: 56,
        y: -100
    }

    this.width = width
    this.height = height

    
    var printPro = function(){
        console.log('My width is '+ this.width)
        console.log('My height is '+ this.height)
    }.bind(this)

    // this.getPosition = function(){
    //     return position
    // }

    this.draw = function(){
        console.log('I am a rectangle')
        printPro()
        console.log(this)
        console.log('Position: X = ' + position.x +' Y = ' + position.y)
    }

    Object.defineProperty(this,'position',{
        get: function(){
            return position
        },
        set: function(value){
            position = value
        }
    })
}
var rect7 = new Rectangle(45, 30)
rect7.draw()
rect7.position = {
    x: 456,
    Y: -123
}
// console.log(rect7.getPosition)








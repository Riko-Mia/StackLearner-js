// Private properties in javascript
var Rectangle = function(width, height){
    // var name = 'Riko Ahmed'
    this.width = width
    this.height = height
    var position = {
        x: 56,
        y: -100
    }

    
    var printPro = function(){
        console.log('My width is '+ this.width)
        console.log('My height is '+ this.height)
    }.bind(this)

    this.draw = function(){
        console.log('I am a rectangle')
        printPro()
        console.log(this)
        console.log('Position: X = ' + position.x +' Y = ' + position.y)
    }
}
var rect7 = new Rectangle(45, 30)
// console.log(rect7.name)
rect7.draw()









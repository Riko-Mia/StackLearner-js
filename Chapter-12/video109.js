// factory pattern in javascript 

// var rect = {
//     width: 100,
//     height: 50,

//     draw: function(){
//         console.log('I am a rectangle')
//         this.printPro()
//         console.log(this)
//     },

//     printPro: function(){
//         console.log('My width is '+ this.width)
//         console.log('My height is '+ this.height)
//     }
// }
// rect.draw()

var createRect = function(width, height){
    return {
        width: width,
        height: height,
    
        draw: function(){
            console.log('I am a rectangle')
            this.printPro()
            console.log(this)
        },
    
        printPro: function(){
            console.log('My width is '+ this.width)
            console.log('My height is '+ this.height)
        }
    }
}
var rect1 = createRect(100,30)
rect1.draw()

var rect2 = createRect(250,30)
rect2.draw()







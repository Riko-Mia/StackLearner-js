// Iterate Object and HasOwnProperty in javascript

function Square(width){
    this.width = width 
    this.getWidth = function(){
        console.log('Width is = ' + this.width)
        // this.draw()
    }
}

Square.prototype = {
    draw: function(){
        this.getWidth()
        console.log("Draw")
    },
    toString:function(){
        return 'My width is = ' + this.width
    }
}


var sqr1 = new Square(10)
var sqr2 = new Square(5)
// sqr1.draw()
// sqr2.draw()

// console.log(Object.keys(sqr1))

for(var i in sqr1){
    console.log(i)
}







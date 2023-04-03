// This in javascript 

var rect = {
    width: 100,
    height: 50,

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
rect.draw()

function myFunction(){
    console.log(this)
    rect.printPro()
}
new myFunction()



var another = {
    width:47,
    height: 56,
    print: rect.printPro
}

// console.log(another.print)
another.print()
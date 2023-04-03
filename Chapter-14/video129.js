// First prototypical inheritance in javascript
/**
 function Shape(){
     
}
Shape.prototype = {
    common: function(){
        console.log("I am common Method")
    }
}


function Square(width){
    this.width= width
}

Square.prototype = Object.create(Shape.prototype)

Square.prototype.draw = function(){
        console.log('Drawing')
}

var shape = new Shape()
var sqr = new Square(45)


// shape -> shape -> object
// sqr - > shape -> object

// sqr -> square -> shape -> object
function Circle(){

}
Circle.prototype = Object.create(Shape.prototype)
var circle = new Circle()

*/






// video 130
// Reset Constructor after inheritance in javascript
/**
function Shape(){
     
}
Shape.prototype.common = function(){
    console.log("I am common Method")
}


function Square(width){
    this.width= width
}

Square.prototype = Object.create(Shape.prototype)

Square.prototype.constructor=Square 

Square.prototype.draw = function(){
        console.log('Drawing')
}

// Square.prototype = {
//     test: function(){

//     }
// }

var shape = new Shape()
var sqr = new Square(45) 

*/








// video 131
// Calling super with call method in javascript
/**
 function Shape(color){
     this.color = color
}
Shape.prototype.common = function(){
    console.log("I am common Method")
}


function Square(width, color){
    Shape.call(this, color)
    this.width= width
}

Square.prototype = Object.create(Shape.prototype)

Square.prototype.constructor=Square 

Square.prototype.draw = function(){
        console.log('Drawing')
}


var sqr = new Square(45, 'green')

*/






// video 132
// Creating extends function in javascript
/**
function extend(Parent, Child){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}


function Shape(color){
    this.color = color
}
Shape.prototype.common = function(){
   console.log("I am common Method")
}


function Square(width, color){
   Shape.call(this, color)
   this.width= width
}

// Square.prototype = Object.create(Shape.prototype)
// Square.prototype.constructor = Square 
extend(Shape, Square)

Square.prototype.draw = function(){
       console.log('Drawing')
}


var sqr = new Square(45, 'green')


function Circle(radius, color){
    Shape.call(this, color)
    this.radius = radius
}
// Circle.prototype = Object.create(Shape.prototype)
// Circle.prototype.constructor = Circle
extend(Shape, Circle)
 */







// video 133
// Method Over riding in javascript
/**
function extend(Parent, Child){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Shape(color){
    this.color = color
}
Shape.prototype.common = function(){
   console.log("I am common Method")
}

function Square(width, color){
   Shape.call(this, color)
   this.width= width
}

extend(Shape, Square)

Square.prototype.draw = function(){
       console.log('Drawing')
}

var sqr = new Square(45, 'green')

function Circle(radius, color){
    Shape.call(this, color)
    this.radius = radius
}

extend(Shape, Circle)

Circle.prototype.common = function (){
    Shape.prototype.common.call(this)
    console.log("I am Calling form circle and I have Overridden")
}
var c = new Circle(4, 'Black')

 */








// video 134
// Polymorphism in javascript
/**
function extend(Parent, Child){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Shape(color){
    this.color = color
}
Shape.prototype.common = function(){
   console.log("I am common Method")
}

function Square(width, color){
   Shape.call(this, color)
   this.width= width
}

extend(Shape, Square)

Square.prototype.draw = function(){
       console.log('Drawing')
}
Square.prototype.common = function (){
    console.log("I am Calling form square and I have Overridden")
}

var sqr = new Square(45, 'green')

function Circle(radius, color){
    Shape.call(this, color)
    this.radius = radius
}

extend(Shape, Circle)

Circle.prototype.common = function (){
    Shape.prototype.common.call(this)
    console.log("I am Calling form circle and I have Overridden")
}
var c = new Circle(4, 'Black')
var s = new Shape('Pirple')

var shapes = [s,c,sqr]
for(var i of shapes){
    i.common()
}
 */








// video 135
// When to use inheritance in javascript
/** */
function extend(Parent, Child){
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Shape(color){
    this.color = color
}
Shape.prototype.common = function(){
   console.log("I am common Method")
}

function Square(width, color){
   Shape.call(this, color)
   this.width= width
}

extend(Shape, Square)

Square.prototype.draw = function(){
       console.log('Drawing')
}
Square.prototype.common = function (){
    console.log("I am Calling form square and I have Overridden")
}

var sqr = new Square(45, 'green')

function Circle(radius, color){
    Shape.call(this, color)
    this.radius = radius
}

extend(Shape, Circle)

Circle.prototype.common = function (){
    Shape.prototype.common.call(this)
    console.log("I am Calling form circle and I have Overridden")
}
var c = new Circle(4, 'Black')
var s = new Shape('Pirple')

var shapes = [s,c,sqr]
for(var i of shapes){
    // i.common()
}










 








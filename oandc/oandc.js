1 // Create a class called Circle with the below things
// Create a constructor which will accept the radius of the circle.
// Create a method getCircumference() which will calculate the circumference of the circle


// class circle
class Circle {
    constructor(radius) {
        this.radius = radius

    }
    //method getcircumference
    getCircumference() {
        let pie = Math.PI
        let circumfernce = 2 * pie * this.radius

        return `The Circumference of circle is ${circumfernce.toFixed(4)}`
    }
}
let circle = new Circle(4) //initialize class
console.log(circle.getCircumference())

2.// Create a class Calculator, the class should have the below functions
// Create a constructor which accepts 2 member variables a and b of type int.
// Create the below methods
// add()
// subtract()
// divide()
// multiply()


// class calculator

console.log("*******************************************")

class Calculator {
    //two mwthods
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    //methods
    add() {
        return this.a + this.b
    }
    subtract() {
        return this.a - this.b
    }
    divide() {
        return this.a / this.b
    }
    multiply() {
        return this.a * this.b
    }
}



var cal = new Calculator(9, 6)
console.log("The sum of a and b is:", cal.add())
console.log("The subtraction of b from a is:", cal.subtract());
console.log("The division of a divide by b is:", cal.divide());
console.log("The multiplication of a and b is:", cal.multiply());
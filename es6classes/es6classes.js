// Implement a multi-level inheritance using ES6 class.
// take a real life inheritance example and simulate it using ES6 classes.

class Square{
    constructor(s){
        this.side=s
    }

    area_square(){
        return this.side*this.side
    }

}

// Square inherit by Rectangle

class Rectangle extends Square{
    constructor(l,w){
        super(l)
        this.width = w
    }

    area_rectangle(){
        return this.side*this.width
    }
}
// Rectangle inherit by Triangle (consist property of both Rectangle and Square)
class Triangle extends Rectangle{
    constructor(s,b,h){
        super(s,b)
        this.height=h

    }
    area_triangle(){
        return (0.5*this.height*this.width)
    }
}

// Triangle inherit by Cuboid (consist property of all three Triangle,Rectangle and Square)

class Cuboid extends Triangle{
    constructor(l,b,h){
        super(l,b,h)
    }
    volume(){
        return this.side*this.width*this.height
    }
}

// Square properties
let sqr = new Square(5)
console.log(sqr)
console.log("Area of square:",sqr.area_square())

// Rectangle properties
let rec = new Rectangle(8,6)
console.log(rec) 
console.log("Area of rectangle:",rec.area_rectangle())
console.log("Area of square:",rec.area_square())

// Triangle properties
let triangle = new Triangle(10,20,30)
console.log(triangle)
console.log("Area of triangle:",triangle.area_triangle())
console.log("Area of rectangle:",triangle.area_rectangle())
console.log("Area of square:",triangle.area_square())


// Cuboid properties
let volume_cuboid = new Cuboid(2,3,4)
console.log(volume_cuboid)
console.log("Volume of Cuboid:",volume_cuboid.volume())
console.log("Area of triangle:",volume_cuboid.area_triangle())
console.log("Area of rectangle:",volume_cuboid.area_rectangle())
console.log("Area of square:",volume_cuboid.area_square())


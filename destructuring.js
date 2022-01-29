//1. destructure the name and password from *****************************************************

let detail = {
    name:"masai",
    password:"admin@123",
    hostname:"masaischool",
    client:"chrome"

}

var {name,password}=detail
console.log("name:",name)
console.log("password:",password)

// 2.destructure the pincode and rename to pin*****************************************************

let detail1 = {
    name:"masai",
    password:"admin@123",
    hostname:"masaischool",
    client:"chrome",
    address:{pincode:560095}

}

// var {pincode:pin}=detail1.address
// console.log("pincode:",pin)

let {address} = detail1
let {pincode:pin}=detail1.address
 console.log("pin:",pin)

// 3. destructure the first value and second value of the array**************************************


let array = [100,200,500,600]

let [a,b,...x]= array
console.log(a)
console.log(b)
//console.log(...x)

//4 destructure to get the value 50 from this array****************************************************


let array1 = [100,[50,60,70]]
let[c,d]= array1
//console.log(c)
//console.log(d)

let[e,...y]=d
console.log(e)
//console.log(y)

// 5 destructure to get the value 2,3 into a new array**************************************************
var array3 = [  1, {  
    arr: [ 1, 2, 3 ]
  }
]

let [first,second]= array3
//console.log(first)
//console.log(second)

let {arr} = second
//console.log(arr)
let [start,...z]=arr
console.log(z)
//console.log(start)




 
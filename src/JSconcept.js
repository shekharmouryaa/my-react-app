import React from 'react'

export const JSconcept = () => {

  // Variables

  // let a = 10;
  // const b= 15;
  // let c;

  // a = 12; //  Assignment to new value 
  // b = 20; Error : Assignment to constant variable. 

  // console.log(a) //12
  // console.log(b) // 15
  // console.log(c) // Undefined

  // Data Types

  //    String , Number , Boolean , null , undefined 

  //COPIED FROM CONSOLE

  // let user = "Rohit"
  // undefined
  // user.toUpperCase()
  // 'ROHIT'
  // user.toLowerCase()
  // 'rohit'
  // user.concat(" Sharma")
  // 'Rohit Sharma'
  // user.concat(5)
  // 'Rohit5'
  // user.charAt(3)
  // 'i'
  // user.replace("hit" , "han")
  // 'Rohan'
  // let num = 125.54
  // undefined
  // num.toExponential()
  // '1.2554e+2'
  // num.toFixed()
  // '126'
  // num = 125.252552252
  // 125.252552252
  // num.toFixed(2)
  // '125.25'

  // Math.round(x)	Returns x rounded to its nearest integer
  // Math.ceil(x)	    Returns x rounded up to its nearest integer
  // Math.floor(x)	Returns x rounded down to its nearest integer
  // Math.trunc(x)	Returns the integer part of x (new in ES6)


  // Math.round(4.4);
  // 4
  // Math.round(4.9);
  // 5

  // Math.ceil(4.2);
  // 5
  // Math.ceil(4.9);
  // 5

  // Math.floor(4.2);
  // 4
  // Math.floor(4.9);
  // 4

  // JavaScript Assignment Operators

  // Operator	        Example	    Same As
  // =	            x = y	    x = y
  // +=	            x += y	    x = x + y
  // -=	            x -= y	    x = x - y
  // *=	            x *= y	    x = x * y
  // /=	            x /= y	    x = x / y
  // %=	            x %= y	    x = x % y
  // **=	            x **= y	    x = x ** y

  // Example

  // x = 10
  // 10
  // y = 2
  // 2
  // let z = x + y
  // undefined
  // z
  // 12
  // x += y 
  // 12
  // x
  // 12
  // y += x 
  // 14

  // JavaScript Comparison Operators

  // ==	equal to
  // ===	equal value and equal type
  // !=	not equal
  // !==	not equal value or not equal type
  // >	greater than
  // <	less than
  // >=	greater than or equal to
  // <=	less than or equal to
  // ?	ternary operator

  // JavaScript Logical Operators
  // Operator	    Description
  // &&	        logical and
  // ||	        logical or
  // !	        logical not

  // OR (||)

  // true + false = true
  // true + true = true
  // false + true = true

  // false + false = false

  // AND (&&)

  // true + false = false
  // false + true = false
  // false + false = false

  // true + true = true 

  // global scope and function scope in javascript

  // let a = "hello";   // GLOBAL SCOPE

  // function greet() {
  //     a = 3;
  // let num = 25; // FUNCTIONAL SCOPE
  // }


  // change in global variable
  // // before the function call
  // console.log(a);
  // console.log(num);

  // //after the function call
  // greet();
  // console.log(a); // 3


  // ARRAY METHODS

  // const food = ['pizza 0', 'cake 1 ', 'salad 2', 'cookie 3', 'biscuit 4', 'bread 5'];

  // SLICE METHOD
  // const newFood = food.slice(1)
  // const newFood = food.slice(2,4)

  // slice( 2 ("starting elements need to remove"), 4 ("remove elements from this index"))

  // SPLICE METHOD

  // food.splice(2,3)
  // food.splice(2,3,"Cheesse 1", "Cheesse 2", "Cheesse 3")  modified items
  // const newFood = food.splice(2,3,"Cheesse 1", "Cheesse 2", "Cheesse 3") // Remaining items


  // splice(start from, delete count)
  // DIFFERENCE -  splice modify existing Array but slice doesn't

  // console.log("food",food);
  // console.log("newFood",newFood);



  // SWITCH CASE

  // const Calculate = (operation, a, b) => {

  //   switch (operation) {
  //     case "add":
  //       return Number(a) + Number(b)

  //     case "subtract":
  //       return Number(a) - Number(b)

  //     case "multiply":
  //       return Number(a) * Number(b)
  //     default:
  //       return "Opertaion not found"
  //   }
  // }

  // let results = Calculate("add", 10 ,"7")  //output -  17
  // let results = Calculate("multiply", 10 , 7) //output -  70
  // let results = Calculate("subtract", 10 , 7) // output - 3

  // let results = Calculate("divide", 10 , 7) // output - Opertaion not found

  // console.log(results)


  //DOM - EXAMPLE

//   let pTag = document.getElementsByTagName("p")
//   let PTagHtml = pTag[1].innerHTML
//   let PTagText = pTag[1].innerText
  
//  console.log("PTagHtml",PTagHtml);
//  console.log("PTagText",PTagText);


// LOOP CONCEPTS

// let numberForTable = 3
// let upto = 10
// let i = 1

// for(let i = 1; i <= upto ;i++){
//     let tableRow = `${numberForTable} * ${i} = ${numberForTable*i}`
//     console.log(tableRow)
// }

// while(i <= upto ){
//     let tableRow = `${numberForTable} * ${i} = ${numberForTable*i}`
//     console.log(tableRow)
//     i++;
// }

// do{
//     let tableRow = `${numberForTable} * ${i} = ${numberForTable*i}`
//     console.log(tableRow)
//     i++;
// }while(i <= upto )

// let weekName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// for(let i = 0; i <= weekName.length ;i++){
//     let tableRow = `${i+1} day of week is ${weekName[i]}`
//     console.log(tableRow)
// }

// weekName.forEach((val,index) =>{
//     console.log(`${index+1} day of week is ${val}`)
// })


// **************** OBJECT and Object Methods ***********************

// const userDetails =  { 
//   "name": 'Dave',
//   "job": 'Front End Development',
//   "age": 26,
//   "monthly salary": {
//       "basic" : 12000,
//       "allowance" :1250
//   },
//   "address" : {
//       "city" : "indore",
//       "state" : "MP",
//       }
// }

// userDetails.email = "abc@test.com";
// userDetails.address.pincode = 125212
// delete userDetails["monthly salary"].allowance
// console.log(userDetails);
// console.log(userDetails.hasOwnProperty("job"));

// const userAddress = {
//   "city" : "indore",
//   "state" : "MP",
// }

//--------------> Update the existing object
// userDetails.address = userAddress
// console.log(userDetails)


//---------> Create a new copy of object
// const updatedUser = {...userDetails, address : userAddress }
// console.log(updatedUser)

  return (
    <div>
      {/* <p>
        this is a  p tag text
        <span>this is span inside the p tag</span>
      </p>
      <b>
        this is a b tag
      </b>
      <span id="span-tag">
        this is span with id span-tag
      </span> */}
    </div>
  )
}

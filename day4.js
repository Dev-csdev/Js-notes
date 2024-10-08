// // destructors in arrays
// const fruits = ["apple", "banana", "cherry"];
// // Destructuring the array
// const [first, second, third] = fruits;
// console.log(first);  // "apple"
// console.log(second); // "banana"
// console.log(third);  // "cherry"

// // destructors in objects
// const course = {
//     coursename : "Javascript",
//     price : "990",
//     courseInstructor: "Devashish"
// }
// const {courseInstructor} = course
// console.log(courseInstructor) // to get specific values from key-name
// console.log(course) //print whole object

// const {courseInstructor: superior} = course
// console.log(superior) // to change key name and get specific value



// // function and parameter 
// function sayMyName(){
//     console.log("Devashish")
// }

// sayMyName() //basic function and syntax

// //func to join 2 num
// function addTwoNum(num1,num2) { //parameters
//     console.log(num1 + num2)
// }
// addTwoNum(2,3) //arguments

// const result = addTwoNum(3,5)
// console.log("result:", result)

// //return statement
// function addTwoNum(num1,num2) {
//     let result = num1 + num2
//     return result
// }
// const result = addTwoNum(3,5)
// console.log("result:", result)

// function calculateCartPrice(...num1) { // ... is known as rest operator (combine all elements into array)
//     return num1
// }
// console.log(calculateCartPrice(200,400,500))

// // functions with object
// const user = { //object declaration
//     username: "Devashish",
//     price: 299
// }
// function handleObject(anyObject) { //function created
//     console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
// }
// handleObject(user)

// //or second way
// function handleObject(anyObject) { //function created
//     console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
// }
// handleObject({
//     username: "Devashiq",
//     price: 459
// })
//symbol 
// const mySymbol = Symbol("key1")

// // object literals (determine objects)
// const jsUser = {
//     name : "Devashish", //name key itself is string by default
//     "full name" : "Devashish Kaushik",
//     [mySymbol] : "symbol used", //symbol syntax
//     age : 19,
//     address : "Sidhbali Marg Kotdwar",
//     email : "Devauthorisedmail@gmail.com",
//     isLoggedIn : false
// }

// Object.freeze(jsUser) // now no changes will execute
// console.log(jsUser.name) //only only access default keys
// console.log(jsUser["email"])
// console.log(jsUser["full name"]) //only this method can access string keys
// console.log(jsUser[mySymbol]) //symbol print syntax
// console.log(jsUser)

// jsUser.greetings = function() {
//     console.log("HELLO JS USER")
// }
// console.log(jsUser.greetings())

// jsUser.greetings2 = function() {
//     console.log("HELLO JS USER2")
// }
// console.log(`Hello Js User, ${this.email}`)
// console.log(jsUser.greetings2())

// //singleton: one and only object similar to itself 
// const user = new Object()
// //non singleton operator
// const user2 = {}

// const tinderUser = {}
// tinderUser.id = "2024"
// tinderUser.name = "Devashish"
// tinderUser.city = "ktdw"
// tinderUser.isLoggedIn = false
// console.log(typeof tinderUser)

// const regularUser = {
//     email: "devauthorisedmail@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "Devashish",
//             lastname: "Kaushik"
//         }
//     }
// }
// console.log(regularUser)

// const obj1 = {1:"a" , 2:"b" }
// const obj2 = {3:"a" , 4:"b" }
// // const obj3 = {obj1, obj2}
// // const obj3 = Object.assign(obj1,obj2)
// const obj3 = {...obj1, ...obj2} // object join and assignment 
// console.log(obj3)

// // syntax example 
// const users =[
//     {
//         //array of objets
//     }
// ]

// const people = [
//     { name: "John", age: 30, profession: "Engineer" },
//     { name: "Sara", age: 25, profession: "Designer" },
//     { name: "Mike", age: 35, profession: "Doctor" }
// ]; // Accessing an object in the array
// // console.log(people[1].name) // Output: Sara
// // console.log(people[2].profession)
// // console.log(people) //print whole object array
// console.log(Object.keys(people))
// people.forEach(person => console.log(Object.keys(person))); //Print all keys of array


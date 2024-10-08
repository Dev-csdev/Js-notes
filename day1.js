/*

const accountId = 123456 //immutable variable declaration.
let accountEmail = "devauthorisedmail@gmail.com" //mutable var declaration.
var accountPassword = "dummypass" //should not use, no scope resolution.
accountCity = "kotdwar"
let accountType //the default value will be undefined

// accountId = 789456 //Error: cause const is immutable
accountEmail = "dummy@gmail.com"
accountPassword = "passchanged"
accountCity = "kotdwara"

console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
console.log(accountType) 
//or we can print the second way
console.log(accountEmail,accountId,accountPassword,accountCity)
//or we can print the third way
console.table([accountEmail,accountId,accountPassword,accountCity])

// console.table method: will print output in a tabular format.
var fruits = ['apple','banana','mango','orange']
console.table(fruits)
console.table(typeof(fruits))
*/

/*
// type conversion
let dummy = null
let dummyTest = Boolean(dummy)
console.log(dummyTest)

let value = 2
let negValue = -value //convert +ive to -ive
console.log(typeof negValue)
*/


// // Symbol is a unique and immutable primitive data type
// const id = Symbol('123') //datatypes first letter shold be capital
// const anotherId = Symbol('123')
// console.log(id === anotherId)

// let userOne = {
//     email: "dummymail@google.com",
//     upi: "dummypay@ybl"
// }
// // string interpolation method 
// const name = "Devashish"
// const repoCount = 33
// console.log(`hello my name is ${name} 
//     and repo count is ${repoCount}`)
//         // print statement can be pused into multiple lines

// const url = "https://google.com/hello%33world"
// console.log(url.replace('%33', '-'))
// console.log(url.includes('google'))
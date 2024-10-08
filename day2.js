/*const balance = new Number(100)
console.log(balance)

// date and time
let myDate = new Date()
let myCreateDate = new Date(2023,1,23)
console.log(myCreateDate.toDateString())
*/

// // array 
// const myArray = [0,1,2,3,4,5,true,"hello"]
// console.log(myArray[7])
// myArray.push("dev") //add elements in array
// myArray.push("random")
// myArray.pop() //remove last element
// console.log(myArray)
// console.log(myArray.includes("dev"))
// console.log(myArray.indexOf("dev")) //find index of val

// const mynewarray = myArray //create a copy of array
// console.log(mynewarray) 

// const newArray = myArray.join() //turns array into string
// console.log(typeof newArray)
// console.log(newArray)
// console.log("A", myArray)
// const myn1 = myArray.slice(1,4) //give only index specific value
// console.log(myn1)
// const myn2 = myArray.splice(1,4)
// console.log("B",myn2)


// //array more operations examples
// const marvel_heros = ["ironman","thor","hulk"]
// const dc_heros = ["batman","flash","superman"]

// marvel_heros.push(dc_heros) //created nested array
// console.log(marvel_heros[3][2]) //get value of array in nested array
// console.log(marvel_heros.concat(dc_heros)) //concat/merge both array
// const allHeros = [...marvel_heros,...dc_heros] //spread operator. scatters the elements of given values(arrays)
// console.log(allHeros) //allHeros is third variable to store values
// const anotherArray = [1,2,3,4,5, ["a","b",[8,9,10],"c"],6,7] //nested array
// const forAnotherArray = anotherArray.flat(Infinity) //scatter all elements in one according to users depth instruction
// //depth can be 1 to infinity (depth means number of nested array to scatter)
// console.log(forAnotherArray)
// console.log(Array.from("Devashish")) //array.from turns string into array

// let score1 = [11,12,13]
// let score2 = 22
// let score3 = 33
// console.log(Array.of(score1, score2, score3)) //merge given variables

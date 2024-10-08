/*
// var declaration method
let a = 10 //variable declared outside function is global scope
const  b = 20 
var c = 30 //var returns the value without even calling it and that's a problem

// scopes (global/local) {}
if (true) {
    let num = 22 //var declared inside function like 
    console.log(num)
}

function one() {
    const username = "Devashish-Kaushik"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);

    two()
}
one()
*/

// Scope error tracking 
if (true) {
    const username = "Devashish"
    if (username === "Devashish") {
        const website = "google"
    }
    // console.log(website) //will throw error cause website declared is in local scope
}
// console.log(username) //will throw error cause username declared is in local scope

console.log(addOne(22))
function addOne(num) {
    return num + 1
}
const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(22))
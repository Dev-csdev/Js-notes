// // arrow function .... used to write shorter code
// const hello = () => {
//     return "Hello World!";
//   }

// console.log(hello)

// return `${}` //string interpolation: we use dollar sign + curly bracs to pass variable

// Immidiately invoked function expression (IIFE)
(function Dev(){ //named IIFE
  console.log(`Dev Function Executed`)
}) (); //function is covered with paranthesis and called by paranthesis itself.
//should end the function call with semicolon(;) to use two or more IIFE

( () => { //unnamed IIFE
  console.log(`New function executed`)
}) ()

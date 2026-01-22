/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

function emotions(feeling, laughCallback) {
  console.log(`I am ${feeling}, ${laughCallback(3)}`)
}

emotions("happy", function (num) {
  let str = ''

  let i = 1
  while (i <= num) {
    str += 'ha'
    i++
  }

  return `${str}!`
})

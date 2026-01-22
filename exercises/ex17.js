/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

const laugh = function (num) {
  let str = ''

  let i = 1
  while (i <= num) {
    str += 'ha'
    i++
  }

  console.log(`${str}!`)
}

laugh(4)

/*

Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"

Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

const shirtWidth = 23; // size L (large)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.71; // size L (large)

Then print L to the console.

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. For example, if...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.

*/

const shirtWidth = 18
const shirtLength = 29
const shirtSleeve = 8.47

let sizeByShirtSize
let sizeByShirtLength
let sizeByShirtSleeve

if (shirtWidth >= 28) {
  sizeByShirtSize = "3XL"
} else if (shirtWidth >= 26) {
  sizeByShirtSize = "2XL"
} else if (shirtWidth >= 24) {
  sizeByShirtSize = "XL"
} else if (shirtWidth >= 22) {
  sizeByShirtSize = "L"
} else if (shirtWidth >= 20) {
  sizeByShirtSize = "M"
} else if (shirtWidth >= 18) {
  sizeByShirtSize = "S"
}

if (shirtLength >= 34) {
  sizeByShirtLength = "3XL"
} else if (shirtLength >= 33) {
  sizeByShirtLength = "2XL"
} else if (shirtLength >= 31) {
  sizeByShirtLength = "XL"
} else if (shirtLength >= 30) {
  sizeByShirtLength = "L"
} else if (shirtLength >= 29) {
  sizeByShirtLength = "M"
} else if (shirtLength >= 28) {
  sizeByShirtLength = "S"
}

if (shirtSleeve >= 10.13) {
  sizeByShirtSleeve = "3XL"
} else if (shirtSleeve >= 9.63) {
  sizeByShirtSleeve = "2XL"
} else if (shirtSleeve >= 8.88) {
  sizeByShirtSleeve = "XL"
} else if (shirtSleeve >= 8.63) {
  sizeByShirtSleeve = "L"
} else if (shirtSleeve >= 8.38) {
  sizeByShirtSleeve = "M"
} else if (shirtSleeve >= 8.13) {
  sizeByShirtSleeve = "S"
}

if (sizeByShirtSize === sizeByShirtLength && sizeByShirtSize === sizeByShirtSleeve) {
  console.log(sizeByShirtSize)
} else {
  console.log("NA")
}

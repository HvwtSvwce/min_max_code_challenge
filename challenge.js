var fs = require("fs")

var int_array = [
  3,
  7,
  2,
  1,
  9,
  3,
  2,
  9,
  5,
  4,
  7,
  6,
  18,
  17,
  27,
  24
]

/**
 * 
 * @param {number} interval 
 * @param {Int8Array} integer_array 
 * 
 * @description Iterates on provided integer_array, creating sets of size interval.
 * Assumes single-digit integers.
 */
function array_challenge(interval, integer_array) {
  //define output array
  let output = []
  //define array to populate each pass
  var pass_array = []
  //define array to hold all passes
  var output_array = []
  
  //external iterator for interval
  let j = 0

  // For loop, running on each 
  for (var i = 0; i < integer_array.length; i++) {
    if (j == 0) {
      if (i == integer_array.length - 1) {
        pass_array.push(integer_array[i])
        output_array.push(pass_array)
        pass_array = []
      } else {  
        pass_array.push(integer_array[i])
        j++
      }
    } else if (j == interval - 1) {
      
      pass_array.push(integer_array[i])
      output_array.push(pass_array)
      pass_array = []
      j = 0
    } else if (i == integer_array.length - 1) {
      
      pass_array.push(integer_array[i])
      output_array.push(pass_array)
    } else {
      pass_array.push(integer_array[i])
      j++
    }
  }
  for (var i = 0; i < output_array.length; i++) {
    let sorted = output_array[i].sort((a, b) => a - b)
    output.push({pass: i + 1, i_min: sorted[0], i_max: sorted[sorted.length - 1]})
  }
  console.log(integer_array)
  console.log(output)
}

array_challenge(3, int_array)
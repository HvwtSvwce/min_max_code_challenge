var int_array = [3, 7, 2, 1, 9, 3, 2, 9, 5, 4, 7, 6, 18, 17, 27, 24, 82, 97, 104, 332, 28, 872, 99, 34, 93, 84]

/**
 * 
 * @param {Number} interval 
 * @param {Array} integer_array 
 */
function array_challenge(interval, integer_array) {
  var start = 0
  
  while (start < integer_array.length) {
    console.log(integer_array.slice(start, start + interval))
    let sorted = integer_array.slice(start, start + interval).sort((a, b) => a - b)
    // console.log(sorted)
    console.log("min: " + sorted[0] + ", max: " + sorted[sorted.length - 1])
    start += interval
  }
}

array_challenge(3, int_array)
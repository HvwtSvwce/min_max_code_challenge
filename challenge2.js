function array_challenge(interval, integer_array) {
  console.time("exec")
  var start = 0
  while (start < integer_array.length) {
    let sorted = integer_array.slice(start, start + interval).sort((a, b) => a - b)
    //console.log("min: " + sorted[0] + ", max: " + sorted[sorted.length - 1])
    start += interval
  }
  console.log("Input array length: " + integer_array.length)
  console.timeEnd("exec")
}
var int_array = []
for (var lol = 1; lol < 21; lol++) {
  for (var i = 0; i < 100000 * lol; i++) {
    int_array.push(Math.ceil(Math.random() * 10))
  }
  array_challenge(50, int_array)
  int_array = []
}
//find the integer that appears an odd number of times
function findOdd(A) {

//define an empty object
  let counts = {};

//loop through array, count occurences of a value 
  for (var i = 0; i < A.length; i++) {
    let num = A[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

//search the values for the number that doesnt factor to 0
  let result = Object.keys(counts).find(key => counts[key] % 2 > 0);
  
  //parse the key value to turn the key string into an integer
  return parseInt(result);
}

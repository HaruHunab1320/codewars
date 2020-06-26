//find the integer that appears an odd number of times
function findOdd(A) {

  let counts = {};

  for (var i = 0; i < A.length; i++) {
    let num = A[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  let result = Object.keys(counts).find(key => counts[key] % 2 > 0);
  
  return parseInt(result);

}

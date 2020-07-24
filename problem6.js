/*Project Euler: Problem 6: Sum square difference
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.*/

function sumSquareDifference(n) {
  let sumsqrt=0;
  let sub=0;
  let sumsqrt2=0;
  for(var i=1; i<=n; i++){
    sumsqrt=sumsqrt+Math.pow(i,2);
  }
  for(var j=1; j<=n; j++){
    sub=sub+j;
  }
  sumsqrt2=Math.pow(sub,2);
  return sumsqrt2-sumsqrt;
}
sumSquareDifference(10)
sumSquareDifference(20)
console.log(sumSquareDifference(100));
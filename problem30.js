/*Project Euler: Problem 30: Digit n powers
Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 14 + 64 + 34 + 44
8208 = 84 + 24 + 04 + 84
9474 = 94 + 44 + 74 + 44
As 1 = 14 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of 5th powers of their digits.
*/
function digitnPowers(n) {
  let result=0;
  for (var i=2; i<=300000; i++) {
    if (i==sumPowers(i,n)) {
      result=result+i;
    }
  }
  return result;
}

function sumPowers(num,pow){
  var digit=0;
  var result=0;
  var i=1;
  while (Math.floor(num/(Math.pow(10,i-1)))>0) {
    digit=Math.floor(num/(Math.pow(10,i-1)))%10;
    result=result+Math.pow(digit,pow);
    i++;
  }
  return result;
}

console.log(digitnPowers(5));


/*Project Euler: Problem 28: Number spiral diagonals
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13
It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in an 1001 by 1001 spiral formed in the same way?*/

function spiralDiagonals(n) {
  let result=1;
  let num1=1;
  let num2=1;
  for (var i=2; i<=n; i++){
    num1=num1+2*(i-1);
    result=result+num1;
    num2=num2+4*Math.floor(i/2);
    result=result+num2;
    //console.log(num1,num2);
  }
  return result;
}

console.log(spiralDiagonals(1001));
﻿/*Project Euler: Problem 1: Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number.*/

function multiplesOf3and5(number) {
  // Good luck!
  let result = 0;
  for (var i = 1; i < number; i++) {
    if (i%3==0 || i%5==0){
      result = result + i;
    }
  }
  console.log(result);
  return result;
}

multiplesOf3and5(1000);
multiplesOf3and5(10);
multiplesOf3and5(49);
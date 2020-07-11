﻿/*Project Euler: Problem 2: Even Fibonacci Numbers
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.*/

function fiboEvenSum(n) {
  // You can do it!
  let result = 0;
  let fibonum = [1,2];
  var i=1
  while (fibonum[i]<n) {
    if (fibonum[i]%2==0){
      result = result + fibonum[i]
    }
    fibonum.push(fibonum[i]+fibonum[i-1]);
    i++;
  }
  return result;
}

fiboEvenSum(10);
fiboEvenSum(60);
fiboEvenSum(1000);
fiboEvenSum(100000);
fiboEvenSum(4000000);
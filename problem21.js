/*Project Euler: Problem 21: Amicable numbers
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

If d(a) = b and d(b) = a, where a ? b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.*/

function sumAmicableNum(n) {
  let result=0;
  for (var i=1; i<=n; i++){
    let a=SumDivisors(i);
    let b=SumDivisors(a);
    if(i==b && a<n && a!=b){
      result=result+i;
    }
  }
  return result;
}

function SumDivisors(n){
  let num=0;
  for(var i=1; i<=Math.floor(n/2); i++){
    if (n%i==0) {
      num=num+i;
    }
  }
  return num;
}

sumAmicableNum(1000);
sumAmicableNum(2000);
sumAmicableNum(5000);
console.log(sumAmicableNum(10000));
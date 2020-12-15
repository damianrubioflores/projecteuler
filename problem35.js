/*Project Euler: Problem 35: Circular primes
The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below n, whereas 100 ≤ n ≤ 1000000?


Note:

Circular primes individual rotation can exceed n.
*/
function circularPrimes(n) {
  let result=1;
  for(var i=3; i<n; i+=2){
    if(isCircularPrime(i)){
      result++;
    }
  }
  return result;
}

function isCircularPrime(n){
  var num=n.toString();
  var result=0;
  for(let i=0; i<num.length; i++){
    num=(num+num[0]).substr(1,num.length);
    if(isPrime(num)){
      result++;
    }
  }
  if (result==num.length){
    return true;
  } else {
    return false;
  }
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

console.log(circularPrimes(1000000));
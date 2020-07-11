/*Project Euler: Problem 10: Summation of primes
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.*/

function primeSummation(n) {
  let result=0;
  for (var i=0; i<n; i++){
    if(isPrime(i)){
      result=result+i;
    }
  }
  return result;
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
primeSummation(17);
primeSummation(2001);
primeSummation(140759);
primeSummation(2000000);
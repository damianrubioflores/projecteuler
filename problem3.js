/*Project Euler: Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?*/

function largestPrimeFactor(number) {
  let p = 2;
  while (p*p <= number){
    if (number % p == 0) {
      number = number / p;
    } else {
      if (p > 2) {
        p += 2;
      } else {
        p += 1;
      }
    }
  }
  return number;
}

largestPrimeFactor(2);
largestPrimeFactor(3);
largestPrimeFactor(5);
largestPrimeFactor(7);
largestPrimeFactor(8);
largestPrimeFactor(13195);
console.log(largestPrimeFactor(600851475143));
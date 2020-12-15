/*Project Euler: Problem 37: Truncatable primes
The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only n (8 ≤ n ≤ 11) primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.*/

function truncatablePrimes(n) {
  let num=11;
  let numberPrimes=0;
  let result=0;
  let numStr=num.toString();
  while(numberPrimes<n){
	
		if(istruncPrime(num)==true){
		  result+=num;
		  numberPrimes++;
		}
		num+=2;
	}
  
  return result;
}

function istruncPrime(n){
  var num=n.toString();
  var result=0;
  var num2=num;
  for(let i=0; i<num.length; i++){
    if(isPrime(parseInt(num2))){
      result++;
    }
    num2=num2.substr(1,num2.length);
  }
  num2=num;
  for(let i=0; i<num.length; i++){
    if(isPrime(parseInt(num2))){
      result++;
    }
    num2=num2.substr(0,num2.length-1);
  }
  if (result==2*(num.length)){
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

console.log(truncatablePrimes(11));

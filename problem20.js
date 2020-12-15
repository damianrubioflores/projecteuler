/*Problem 20: Factorial digit sum
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100! */

function sumFactorial(n){
	let result=BigInt(0);
	let bignum=Factorial(n);
	while(bignum>0){
		result=result+(bignum%BigInt(10));
		bignum=(bignum-bignum%BigInt(10))/BigInt(10);
	}
	return result;
}	


function Factorial(n) {
	let result=1n;
	while (n>1){
		result=result*BigInt(n);
		n--;
	}
	return result;
}

//console.log(Factorial(100));
console.log(sumFactorial(100));
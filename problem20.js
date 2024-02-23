/*Problem 20: Factorial digit sum
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100! */

function sumFactorialDigits(n) {
	let result = 0;
	let bignum=Factorial(n);
	let arrayOfDigits = Array.from(String(bignum), Number); //Convierto el Factorial en un array de dígitos simples
	for (let i=0; i<arrayOfDigits.length; i++){
		result= result + arrayOfDigits[i];
	};
	return result;
}

function Factorial(n) {
	let result=1n; //result será un BigInt
	while (n>1){
		result=result*BigInt(n);
		n--;
	}
	return result;
}

//console.log(Factorial(100));
console.log(sumFactorial(100));
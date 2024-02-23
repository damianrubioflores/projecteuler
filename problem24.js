/* Problem 24 - Lexicographic permutations
A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9? */

function lexicoPerm(n){
	let result='';
	let carry=0;
	let digitos=[0,1,2,3,4,5,6,7,8,9];
	let i=0;
	while (result.length<10){
		if ( (n > carry) && (n >= carry + Factorial(digitos.length - 1)) ){
			console.log(result, n, carry, (carry + Factorial(digitos.length - 1)));
			carry+=Factorial(digitos.length - 1);
			i++;
		} else {
			console.log(result, "Nuevo digito:", digitos[i] ,n, carry, (carry + Factorial(digitos.length - 1)));
			result=result+digitos[i];
			digitos.splice(i,1);
			i=0;
			//carry+=Factorial(digitos.length - 1);
		}
	}
	return result;
}

function Factorial(n){
	let result=1;
	if (n > 1){
		for (let i=2; i<=n; i++){
			result*=i;
		};
	};
	return result;
}

console.log((0+(5*Factorial(9))));

console.log(lexicoPerm(1000000));
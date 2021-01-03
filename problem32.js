/*Problem 32 - Pandigital products
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.*/

function pandigitalProducts(){
	let result=0;
	for(let i=1000; i<=10000; i++){
		if(hasPandigitalProduct(i)){
			result+=i;
		}
	}
	return result;
}

function hasPandigitalProduct(n){
	for (let i=1; i<=n; i++){
		if (n%i==0){
			let s1=n.toString();
			let s2=i.toString();
			let s3=(n/i).toString();
			if(isPandigitalProduct(s1+s2+s3)){
				return true;
			}
		}
	}
	return false;
}

function isPandigitalProduct(s){
	let temp = s.split("").sort();
	//console.log(JSON.stringify(temp));
	let mod = [ "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
	//console.log(JSON.stringify(mod));
	if (JSON.stringify(temp) === JSON.stringify(mod)){
		return true;
	} else{
		return false;
	}
}

/*console.log(['4','3','7','0'].sort());
console.log("875306".split("").sort());
console.log(isPandigitalProduct("875306"));
console.log("895672341".split("").sort());
console.log(isPandigitalProduct("895672341"));*/

console.log(pandigitalProducts());
/*Problem 36 - Double-base palindromes
The decimal number, 585 = 1001001001 2 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)*/


function doubleBasePalindrome(){
	let result=0;
	for(let i=1; i<=1000000; i++){
		if( isPalindrome(i.toString()) && isPalindrome(i.toString(2)) ){
			result+=i;
		}
	}
	return result;
}

function isPalindrome(n){
	let ispal=true;
	//let rstring = n.toString();
	for (var i=0; i<(n.length)/2; i++){
		if (n[i] != n[n.length-1-i]){
			ispal = false;
		}
	}
	return ispal;
}

/*n=585;
console.log(typeof n);
console.log(n.toString(2));
console.log(typeof n.toString(2));
console.log(isPalindrome("585"), isPalindrome("847"));*/
console.log(doubleBasePalindrome());
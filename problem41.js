/*Problem 41 - Pandigital prime
We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

What is the largest n-digit pandigital prime that exists?*/

function pandigitalPrime(){
	// Como los únicos primos pandigitales solo pueden ser de 4 y 7 cifras, solo buscaremos entre las de 7 cifras empezando por el pandigital más alto: 7654321
	let stop=false;
	let i=7654321;
	while(stop==false){
		if ( isPandigital(i.toString()) ){
			//console.log(i, " es pandigital");
			if( isPrime(i) ){
				//console.log("y además es primo!");
				stop=true;
			}
		}
		i--;
	}
	return i+1;
}

function isPandigital(s){
	let temp = s.split("").sort();
	//console.log(JSON.stringify(temp));
	let mod = [ "1", "2", "3", "4", "5", "6", "7"];
	//console.log(JSON.stringify(mod));
	if (JSON.stringify(temp) === JSON.stringify(mod)){
		return true;
	} else{
		return false;
	}
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

console.log(pandigitalPrime());
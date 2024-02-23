/*Problem 50 - Consecutive prime sum
The prime 41, can be written as the sum of six consecutive primes:

41 = 2 + 3 + 5 + 7 + 11 + 13
This is the longest sum of consecutive primes that adds to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most consecutive primes?*/

function consecutivePrimes(n){
	let primes=[]
	let result=0;
	let i=2;
	let sumand=0;
	let finalresult=0;
	while(result<n){
		if(isPrime(i)){
			result+=i;
			primes.push(i);
			if(isPrime(result)){
				sumand=primes.length; //sumand es siempre el mayor en este caso concreto
				finalresult=result;
			}else{
				[sum,maxnum]=maxSumPrimes(result,primes,n);
				if(sum>sumand){
					sumand=sum;
					finalresult=maxnum;
				}
			}
			//console.log(i , result , primes);
		}
		i++;
	}
	
	return finalresult;
}

function maxSumPrimes(result,primes,n){
	//Esta función elimina los primos más pequeños de la suma uno a uno hasta que el resultado sea primo y devuelve tanto el número consecutivo de primos como el resultado
	let stop = false;
	i=0;
	while(stop ==false){
		result-=primes[i];
		//console.log(result , isPrime(result));
		if ( isPrime(result) && result < n ) {
			stop = true;
		}
		i++;
	}
	return [primes.length-i,result];
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

console.log(consecutivePrimes(100));
console.log(consecutivePrimes(1000));
console.log(consecutivePrimes(1000000));
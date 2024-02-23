/*Problem 25 - 1000-digit Fibonacci number
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.
What is the index of the first term in the Fibonacci sequence to contain 1000 digits?*/



/*function digitFib(n){
	let i=1n;
	let compute=fib(i).toString().length;
	while( compute < n ){
		//console.log(i, compute);
		i++;
		compute=fib(i).toString().length;
	}
	return i;
}

const fib = (n,memo={}) => {
	if (n in memo) return memo[n];
	if (n<=2n) return 1n;
	
	memo[n]=fib(n-1n,memo) + fib(n-2n,memo);
	return memo[n];
};*/

function digitFib(n){
	let i=2n;
	let bef1=0n;
	let bef2=1n;
	let fib=bef1+bef2;
	while (fib.toString().length < n){
		//console.log(i, fib ,fib.toString().length)
		i++;
		bef1=bef2;
		bef2=fib;
		fib=bef1+bef2;
	}
	return i;
}

console.log(digitFib(20));
console.log(digitFib(1000));
//console.log(fib(1500n));
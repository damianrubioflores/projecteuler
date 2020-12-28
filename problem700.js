/*Problem 700: Eulercoin
Leonhard Euler was born on 15 April 1707.

Consider the sequence 1504170715041707n mod 4503599627370517.

An element of this sequence is defined to be an Eulercoin if it is strictly smaller than all previously found Eulercoins.

For example, the first term is 1504170715041707 which is the first Eulercoin. The second term is 3008341430083414 which is greater than 1504170715041707 so is not an Eulercoin. However, the third term is 8912517754604 which is small enough to be a new Eulercoin.

The sum of the first 2 Eulercoins is therefore 1513083232796311.

Find the sum of all Eulercoins.*/

const euler=1504170715041707n;
const dividend=4503599627370517n;

function eulerCoin(n){
	let result=euler;
	let pre=1504170715041707n;
	for(let i=2n; i<=n; i++){
		let neweuler=(euler*i) % dividend;
		if( neweuler < pre ){
			result += neweuler;
			pre = neweuler;
			console.log(i,pre);
		}
	}
	return result;
}

//console.log("Suma total de euler coins:" + eulerCoin(100000000));
console.log(6774182671763475755468397152519n/euler);
/*Problem 31 - Coin sums
In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?*/

function coinSums(n){
	//Es un problema clásico de programación dinámica
	let coins=[1,2,5,10,20,50,100,200];
	let ways=[];
	//En esta parte estoy inicializando el array que actuará como árbol
	for (let m=0; m<=coins.length+1; m++){
		ways.push([]);
		for (let p=0; p<=n; p++){
			ways[m].push(0);
		}	
	}
	//Aquí es donde se resuelve
	ways[0][0]=1;
	for (let i=0; i<coins.length;i++){
		let coin=coins[i];
		for(let j=0;j<=n; j++){
			ways[i+1][j]=ways[i][j]+(j >= coin ? ways[i+1][j-coin]:0);
		}
	}

	return ways[coins.length][n]
}

console.log(coinSums(200));
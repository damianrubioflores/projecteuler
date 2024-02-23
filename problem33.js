/*Problem 33 - Digit cancelling fractions
The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.*/

function cancelFrac(){
	// Todas las soluciones deben de ser de la forma ni/id==n/d y los digitos 1 <= n,d,i <= 9 y n<d<i
	let prodden=1;
	let prodnum=1;
	for (let i=1; i<=9; i++){
		for (let d=1; d<i; d++){
			for (let n=1; n<d; n++){
				if( d*(10*n+i)==n*(10*i+d) ){
					prodden*=d;
					prodnum*=n;
				}
			}	
		}	
	}
	prodden /= MCD(prodden,prodnum);
	return prodden;
}

function MCD(a,b){
	//Calcula el Máximo Común Divisor entre dos numeros
	let x=0; let y=0;
	if (a>b){
		x=a;
		y=b;
	} else {
		x=b;
		y=a;
	}
	while (x % y != 0) {
        let temp = x;
        x = y;
        y = temp % x;
    }
    return y;
}

console.log(cancelFrac());
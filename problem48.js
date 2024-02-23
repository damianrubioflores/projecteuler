/*Problem 48: Self powers
The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.*/

function selfPowers(power, lastDigits) {
  //power=BigInt(power);
  //lastDigits=BigInt(lastDigits);
  let result=0n;
  for(i=1n;i<=power;i++){
	let num=1n;
	for(j=1n;j<=i;j++){
		num=num*i;
	}
	result=result+num;
	console.log(result)
  }
  let num=1n;
  for(j=1n;j<=lastDigits;j++){
		num=num*10n;
	}
  return result%num;
}

console.log(selfPowers(1000n, 10n));
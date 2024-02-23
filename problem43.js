/*Problem 43 - Sub-string divisibility
The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

d2d3d4=406 is divisible by 2
d3d4d5=063 is divisible by 3
d4d5d6=635 is divisible by 5
d5d6d7=357 is divisible by 7
d6d7d8=572 is divisible by 11
d7d8d9=728 is divisible by 13
d8d9d10=289 is divisible by 17
Find the sum of all 0 to 9 pandigital numbers with this property.*/



/*function isPandigital(s){
	let temp = s.split("").sort();
	//console.log(JSON.stringify(temp));
	let mod = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	//console.log(JSON.stringify(mod));
	if (JSON.stringify(temp) === JSON.stringify(mod)){
		return true;
	} else{
		return false;
	}
}

s=8905671234;
console.log(isPandigital(s.toString()));*/

function subStringDivisible(){
	let listnum=permute([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
	let result=0;
	for (let i=0; i<listnum.length; i++){
		if (listnum[i][0] > 0){
			if( (listnum[i][1]*100 + listnum[i][2]*10 + listnum[i][3])%2 == 0 ){
				if( (listnum[i][2]*100 + listnum[i][3]*10 + listnum[i][4])%3 == 0 ){
					if( (listnum[i][3]*100 + listnum[i][4]*10 + listnum[i][5])%5 == 0 ){
						if( (listnum[i][4]*100 + listnum[i][5]*10 + listnum[i][6])%7 == 0 ){
							if( (listnum[i][5]*100 + listnum[i][6]*10 + listnum[i][7])%11 == 0 ){
								if( (listnum[i][6]*100 + listnum[i][7]*10 + listnum[i][8])%13 == 0 ){
									if( (listnum[i][7]*100 + listnum[i][8]*10 + listnum[i][9])%17 == 0 ){
										result+=listnum[i][0]*1000000000 + listnum[i][1]*100000000 + listnum[i][2]*10000000 + listnum[i][3]*1000000 + listnum[i][4]*100000 + listnum[i][5]*10000 + listnum[i][6]*1000 + listnum[i][7]*100 + listnum[i][8]*10 + listnum[i][9];
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return result;
}

function permute(permutation) {
  var length = permutation.length,
      result = [permutation.slice()],
      c = new Array(length).fill(0),
      i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

//console.log(permute([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(subStringDivisible());
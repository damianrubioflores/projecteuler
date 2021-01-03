/*Problem 38 - Pandigital multiples
Take the number 192 and multiply it by each of 1, 2, and 3:

192 × 1 = 192
192 × 2 = 384
192 × 3 = 576
By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?*/

function pandigitalMultiples(){
	let result=0;
	let s="";
	for (let i=1; i<10000; i++){
		let j=1;
		s=s+(i*j).toString();
		while(s.length<=9){
			if (s.length==9 && isPandigitalProduct(s)){
				s=Number(s);
				if (result<s) {
					result=s;
				}
			}else{
				j++;
				s=s+(i*j).toString();
			}
		}
		s="";
	}
	return result;
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

console.log(pandigitalMultiples());
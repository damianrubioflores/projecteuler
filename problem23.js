﻿/*Problem 23 - Non-abundant sums
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.*/



function nonAbundantSums(){
	let result=0;
	let listA=[];
	for (let i=1; i<=20162; i++){
		if (i < SumDivisors(i)){
			listA.push(i);
		}
		if (CheckASums(i,listA)==false){
			console.log("Encontrado: " + i);
			result+=i;
		}
	}
	return result;
}

function CheckASums(n,list){
	//Funciona muy lento en general. Optimizar más tarde.
	let check=false;
	if (list.length==0){
		check=false;
	}else{
		for (let i=0; i<list.length; i++){
			for (let j=0; j<list.length; j++){
				if (list[i]+list[j]==n){
					check=true;
				}
			}	
		}
	}
	return check;
}

function SumDivisors(n){
	let num=0;
	for(var i=1; i<=Math.floor(n/2); i++){
		if (n%i==0) {
			num=num+i;
		}
	}
  return num;
}

console.log(nonAbundantSums());
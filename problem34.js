/*Problem 34
145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: As 1! = 1 and 2! = 2 are not sums they are not included.*/

function digitFactorial() {
  // Good luck!
  var sum=0;
  var numbers = [];
  for (var i=10; i<100000; i++){
    if (i==factorialDigitSum(i)){
      sum+=i;
	    numbers.push(i);
      console.log(numbers);
    }
  }
  return {sum, numbers} ;
}

function factorialDigitSum(number){
  let num=0;
  let FACTORIAL = [1,1,2,6,24,120,720,5040,40320,362880];
  while(number!=0){
    num+=FACTORIAL[number%10];
    number /= 10;
    number = parseInt(number);
  }
  return num;
}

digitFactorial();

console.log(digitFactorial());
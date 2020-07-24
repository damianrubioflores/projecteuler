/*Project Euler: Problem 5: Smallest multiple
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?*/

function smallestMult(n) {
  let result = 1
  let carry = [];
  for (var i=2; i<=n; i++){
      if (carry.length==0){
        carry.push(i);
        result= result*carry[carry.length-1];
      }else{
        carry.push(i);
        for(var j=0; j<carry.length-2; j++){
          if (carry[carry.length-1]%carry[j]==0) {
          carry[carry.length-1]=carry[carry.length-1]/carry[j];
          }
        }
      result= result*carry[carry.length-1];
      }
      
  }
  return result;
}

smallestMult(5);
smallestMult(7);
smallestMult(10);
smallestMult(13);
console.log(smallestMult(20));
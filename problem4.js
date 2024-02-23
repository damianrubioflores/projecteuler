/*Project Euler: Problem 4: Largest palindrome product
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.*/

function largestPalindromeProduct(n) {
  let n1 = Math.pow(10,n)-1;
  let result = 1;
  for (let i=n1; i>=1; i--){
    for (let j=n1; j>=1; j--){
      if(isPalindrome(i,j) && result < (i*j)){
        result = i*j;
      }
    }
  }
  return result;
}

function isPalindrome(number1, number2){
  let ispal=true;
  let result=number1*number2;
  let rstring = result.toString();
  for (var i=0; i<(rstring.length)/2; i++){
    if (rstring[i] != rstring[rstring.length-1-i]){
      ispal = false;
    }
  }
  return ispal;
}
largestPalindromeProduct(2);
console.log(largestPalindromeProduct(3));
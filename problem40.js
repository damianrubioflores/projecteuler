/*
Project Euler: Problem 40: Champernowne's constant
An irrational decimal fraction is created by concatenating the positive integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If dn represents the nth digit of the fractional part, find the value of the following expression.

d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000


*/
function champernownesConstant(n) {
  var d=0;
  var num="";
  var result=1;
  while (num.length<=n){
    num=num + d.toString();
    d++;
  }
  for(var i=0; i<=Math.log10(n);i++){
    result*=parseInt(num[Math.pow(10,i)]);
  }
  return result;
}

console.log(champernownesConstant(100));
console.log(champernownesConstant(1000));
console.log(champernownesConstant(1000000));
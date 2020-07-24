/*Project Euler: Problem 9: Special Pythagorean triplet
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.*/

function specialPythagoreanTriplet(n) {
 //let sumOfabc = n;
 let a=Math.floor(n/3)-1; let b=Math.floor(n/3); let c=n-a-b; let result=1;
 while (a<b && a>0){
   while(b<=c && b>0 && a<b){
     if (a*a+b*b==c*c){
       return a*b*c;  
     }
     b--;c++;
   }
   a--;b=Math.floor((n-a)/2);c=n-a-b
 }
}

specialPythagoreanTriplet(24);
specialPythagoreanTriplet(120);
console.log(specialPythagoreanTriplet(1000));
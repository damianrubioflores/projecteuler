/*Problem 26: Reciprocal cycles

A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:
1/2 = 0.5
1/3 = 0.(3)
1/4 = 0.25
1/5 = 0.2
1/6 = 0.1(6)
1/7 = 0.(142857)
1/8 = 0.125
1/9 = 0.(1)
1/10 = 0.1

Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < n for which 1/d contains the longest recurring cycle in its decimal fraction part.*/

function reciprocalCycles(n) {
  let result=0;
  let decAnt=0; 
  let dec=0;
  for (let i=2; i<n; i++){
    dec = decimalValue(i).length;
    if (dec > decAnt){
      decAnt=dec;
      result= i;
    }
  }
  return result;
}

function decimalValue(n) {
  let result=[];
  let resto=1;
  let decimal=0;
  if (n%2==0 || n%5==0){
    result = 0;
  } else {
    do {
      decimal = Math.floor((resto*10)/n);
      result.push(decimal);
      resto=(resto*10)%n;
    } while (resto < 1 || resto > 1);
  }
  return result
}

console.log(reciprocalCycles(1000));

/*Project Euler: Problem 22: Names scores
Using names, an array defined in the background (names.txt in projecteuler.net) containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the array?*/

function namesScores(arr) {
  let scoreword=0;
  let score=0;
  arr=arr.sort();
  for(var i=0; i<arr.length;i++){
    scoreword=0;
    for(var j=0; j<arr[i].length;j++){
      scoreword=scoreword+arr[i][j].charCodeAt()-64;
    }
    score=score+scoreword*(i+1);
  }
  return score;
}

// Only change code above this line
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

console.log(namesScores(test1));
console.log(namesScores(test2));
console.log(namesScores(names));
//console.log("A".charCodeAt()-64);
function lexicographicPermutations(n) {
  let arr=[0,1,2,3,4,5,6,7,8,9];
  let perm=permute(arr);
  return perm[n+1];
}


function permute(input) {
  var permArr = [],  usedChars = [];
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};

console.log(lexicographicPermutations(999999));
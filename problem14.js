/*Problem 14: Longest Collatz sequence

The following iterative sequence is defined for the set of positive integers:

n ? n/2 (n is even)
n ? 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 ? 40 ? 20 ? 10 ? 5 ? 16 ? 8 ? 4 ? 2 ? 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.*/

function longestCollatzSequence(limit) {
  let maxchain=1;
  let result=0;
  let cache=[]; //La cache almacena resultados anteriores, si es -1 no está calculado todavía
  for (var j = 0; j < limit; j++) {
    cache.push(-1);
  }
  cache[1] = 1; 
  for (var i=2; i<=limit; i++){
    let seq=i;
    cache[i]=1;
    while(seq!=1){
      if(seq%2==0){
        seq=seq/2;
        cache[i]++;
      }else if (seq%2==1){
        seq=3*seq+1;
        cache[i]++;
      }
      //Si algún resultado anterior aparece en la caché la suma inmediatamente y me salgo del bucle
      if (cache[seq]>=1){
        cache[i]=cache[i]+cache[seq];
        seq=1;
      }
    }
    //Comprueba si el resultado es el mayor y la almacena
    if (maxchain<cache[i]){
      maxchain=cache[i];
      result=i;
    }
    
  }
  return result;
}

console.log(longestCollatzSequence(14));
console.log(longestCollatzSequence(5847));
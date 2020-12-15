function goldbachsOtherConjecture() {
  var notFound=true;
  var k=3;
  
  var result=0;
  while(notFound){
    var p=2;
    for (let i=p; i<k; i++){
      if(isPrime(i)){
        if(Number.isInteger(Math.sqrt((k-i)/2))){
		  console.log(k, " y " , i);	
          k+=2;
          break;
        };
      };
    }
    notFound==false;
  }
  return k;
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

console.log(goldbachsOtherConjecture());
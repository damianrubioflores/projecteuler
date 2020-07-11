/*Project Euler: Problem 17: Number letter counts
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to given limit inclusive were written out in words, how many letters would be used?

Note: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.*/

function numberLetterCounts(limit) {
  let table=[[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90,100,1000],["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","thirty","forty", "fifty","sixty","seventy","eighty","ninety","hundred","thousand"]];
  //console.log(table[0].length,table[1].length);
  let index=0;
  let num=0;
  let c=0; let b=0; let a=0;
  for(var i=1; i<=limit; i++){
    if(i>=1 && i<=20){
      index=table[0].indexOf(i);
      num=num+table[1][index].length;
      console.log(i, table[1][index].length, num);
    }
    if(i>=21 && i<=99){
      a=i%10;
      b=i-a;
      console.log(b,a);
      index=table[0].indexOf(b);
      num=num+table[1][index].length;
      index=table[0].indexOf(a);
      num=num+table[1][index].length;
      console.log(i, table[1][index].length, num);
    }
    if(i>=100 && i<=999){
      a=i%10;
      b=i%100-a;
      c=i-b-a;
      console.log(c,b,a);
      index=table[0].indexOf(c/100);
      num=num+table[1][index].length;
      index=table[0].indexOf(100);
      num=num+table[1][index].length;
      if((b+a)>=1 && (b+a)<=20){
        index=table[0].indexOf((b+a));
        num=num+table[1][index].length+3;
        console.log(i, table[1][index].length, num);
      }else if((b+a)>=21 && (b+a)<=99){
        console.log(b,a);
        index=table[0].indexOf(b);
        num=num+table[1][index].length+3;
        index=table[0].indexOf(a);
        num=num+table[1][index].length;
        console.log(i, table[1][index].length, num);
      } 
    }
    if (i==1000){
      index=table[0].indexOf(i);
      num=num+table[1][index].length+3;
      console.log(i, table[1][index].length, num);
    };
  }
  return num;
}

numberLetterCounts(5);
numberLetterCounts(150);
numberLetterCounts(1000);
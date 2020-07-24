/*Project Euler: Problem 25: 1000-digit Fibonacci number
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn-1 + Fn-2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?*/

function digitFibonacci(n) {
  let mult=Math.pow(10,n-1);
  let i=999999999999999999999999;
  while(fibonacci(i)<=mult){
    i++;
  }
  return i;
}

function fibonacci(n) {
  let fib=1;
  let before=0;
  let ne=0;
  if (n>=2){
    let count=2;
    while(count <= n){
      ne=fib+before;
      before=fib;
      fib=ne;
      count++;
    }
  }
  return fib;
}

//digitFibonacci(5)
//digitFibonacci(10)
//digitFibonacci(15)
//digitFibonacci(20);
console.log(digitFibonacci(1000));
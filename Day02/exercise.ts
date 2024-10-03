/**
1. write code to check whether the number is odd or even. 
Example: 25 → odd number, 2 → even number
2. Write a code to check whether the number is prime number or not. 
Example: 7 → 7 is a prime number
Example: 6 → 6 is not a prime number
3. Write a code to find the sum of the numbers 1 to N. 
Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
Example: 3 → 1 + 2 + 3 = 6
4. Write a code to find factorial of a number. 
Example: 4! → 4 x 3 x 2 x 1 = 24
Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
5. Write a code to print the first N fibonacci numbers
Example: 15 → 610
*/

//soal 1
let number1: number = 25
if (number1%2===0) {console.log(`${number1} is even`);}
else {console.log(`${number1} is odd`);
}

//soal 2
let number2: number = 7
for(let i=2;i<number2;i++){
    if(number2%i===0){
        console.log("not prime")
        break
    } 
}

let number3: number = 6
for(let i=2;i<number3;i++){
    if(number3%i===0){
        console.log("not prime")
        break
    }
}

//soal 3
let nomor: number = 5; 
let sum: number = 0;
for (let i = 1; i <= nomor; i++) {
  sum = sum + i;
}
console.log(sum); 

let nomor2: number = 3; 
let sum2: number = 0; 
for (let i2 = 1; i2 <= nomor2; i2++) {
  sum2 = sum2 + i2; 
}
console.log(sum2);

// soal 4
const _n5 = 4
let fact = _n5
console.log(_n5);
for (let i = _n5 - 1; i >= 1; i--) {
  console.log(i);
  fact *= i;
}
console.log(fact);

const _n4 = 6
let _fact = _n4
console.log(_n4);
for (let i = _n4 - 1; i >= 1; i--) {
  console.log(i);
  _fact *= i;
}
console.log(_fact);

//soal 5
const _n6 = 15;
let _fib = 0;
let _fib1 = 0;
let _fib2 = 1;
for (let i = 1; i <=_n6; i++) {
  console.log(_fib1);
  console.log(_fib2);
  _fib = _fib1 + _fib2;
  console.log(_fib);
  _fib1 = _fib2;
  _fib2 =_fib;
  console.log(_fib1);
}
let a = 10;
let b = 20;
let c = 5;
let d = 40;
let e = 15;

let sum = a + b + c + d + e;
console.log(sum);

let lar = a;

if (b > a) lar = b;
if (c > lar) lar = c;
if (d > lar) lar = d;
if (e > lar) lar = e;

console.log(lar);

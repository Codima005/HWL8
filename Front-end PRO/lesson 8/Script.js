let A = [23, 1, 2, 52, 5, 34, 23, 6, 53, 436, 89];
let B = [];

function isPrime(number) {
  if (number <= 0 || number === 1) {
    return false;
  }

  if (number === 2) {
    return true;
  }
  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 0; i < A.length; i++) {
  let peremennaya = A[i];
  A[i] = peremennaya;
  if (isPrime(peremennaya)) {
    B.push(peremennaya);
  }
}

let min = B[0];
let max = min;

for (i = 1; i < B.length; i++) {
  if (B[i] > max) {
    max = B[i];
  }
  if (B[i] < min) {
    min = B[i];
  }
}

console.log(B);
console.log(min);
console.log(max);



let NewA = [66, -89, 77, 98, 55, 576, -7, 33];
let NewB = [];


for (i = 1, NewMinI = NewMaxI = 0; i < NewA.length; i++) {
  if (NewA[i] > NewA[NewMaxI]) {
    NewMaxI = i;
  }
  if (NewA[i] < NewA[NewMinI]) {
    NewMinI = i;
  }
}

NachaloI = NewMinI<NewMaxI ? NewMinI : NewMaxI;
KonecI = NewMaxI>NewMinI ? NewMaxI : NewMinI;

for (; NachaloI<=KonecI; NachaloI++){
    NewB.push(NewA[NachaloI]);
}

console.log(NewA);
console.log(NewB);



let noviyA = [66, 55, 77, 98, -89, 576, -7, 33];

let noviyMinI = noviyA.indexOf(Math.min(...noviyA));
let noviyMaxI = noviyA.indexOf(Math.max(...noviyA));

let buffer = noviyA[noviyMaxI];
noviyA[noviyMaxI] = noviyA[noviyMinI];
noviyA[noviyMinI] = buffer;

console.log (noviyA);


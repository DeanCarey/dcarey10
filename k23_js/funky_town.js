// Team HairyCrabs: Carlos Hernandez and Dean Carey
// SoftDev pd0
// K23 -- Basic functions in JavaScript
// 2021-04-15
// --------------------------------------------------

//CARRY OVER YOUR BEST JS fxns here

let factI = (n) => {
  let prod = 1;
  // for loops like c
  for (let i = 1; i <= n; i++) {
    prod *= i;
  }
  // while (n > 0) {
  //   prod *= n
  //  n--;
  // }
  return prod;
};

// console.log(factI(6));

let factR = (n) => {
  // three equals means check type and value
  if (n === 1 || n == 0) {
    return 1;
  } else {
    return factR(n - 1) * n;
  }
};

// console.log(factR(6));

let fibI = (n) => {
  if (n < 2) {
    return 0;
  }
  let previous = 0;
  let current = 1;
  let sum = 0;
  for (let i = 2; i < n; i++) {
    sum = previous + current;
    previous = current;
    current = sum;
  }
  return sum;
};

// console.log(fibI(5));

let fibR = (n) => {
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  } else {
    return fibR(n - 1) + fibR(n - 2);
  }
};

// console.log(fibR(4));

// ~~~ NEXT STEPS  ~~~
// as a duo...
// pair programming style

//Develop, then implement gcd(a,b), which returns the greatest common divisor of a and b.

let gcd = (a, b) => {
  gcd = 1;
  count = 1;
  while (a >= count && b >= count) {
    if (a % count == 0 && b % count == 0) {
      gcd = count;
    }
    count++;
  }
  return gcd;
};

// console.log(gcd(5, 25))

//Develop, then implement randomStudent(), which returns a randomly selected name from a list.
//You may want to create helper functions or external list variables here.
const array = ["Karl", "Dean", "SK", "Gopher"];

// we weren't sure if we were allowed to use JS's Math. Hopefully that's okay.
// Other solutions would be just painful
let randomStudent = (list) => {
  let random = Math.floor(Math.random() * list.length);
  return list[random];
};

// console.log(randomStudent(array));


//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.

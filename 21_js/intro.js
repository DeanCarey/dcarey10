/* 
Team Cornwall Guppies - Arib Chowdhury, Michelle Thaung, Dean Carey
SoftDev
K21 - Get Scripty
2021-04-12
*/ 

function factI(n) { // return factorial of n iteratively
    let x = 1;

    for (w = 2; w <= n; w++) {
        x *= w; 
    }

    return x;
}

// console.log(factI(5));

function factR(n) { // return factorial of n recursively
    if (n == 0) return 1;

    return n * factR(n - 1);
}

// console.log(factR(0));
// console.log(factR(4));

function fibI(n) { // return nth Fibonacci number iteratively; 0 is the first number
    let [a, b] = [0, 1];

    for (i = 1; i < n; i++) {
        [a, b] = [b , a + b]
    }

    return a;
}

// console.log(fibI(5));

function fibR(n) {  // return nth Fibonacci number recursively; 0 is the first number
    if (n == 1) return 0;
    if (n == 2) return 1;

    return fibR(n-1) + fibR(n-2);
}

// console.log(fibI(6));

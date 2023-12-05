// Summation of Primes
// Find the sum of all the primes below two million

import { isPrime } from "./helpers.js";

let sum = 0;
for (let i = 0; i < 2e6; i++) {
	if (isPrime(i)) sum += i;
}
console.log(sum);

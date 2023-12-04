// Largest Prime Factor
// What is the largest prime factor of the number 600851475143?

import { isPrime } from "./helpers.js";

const num = 600851475143;
let max;
for (let i = 1; i <= Math.sqrt(num); i++) {
	if (num % i === 0 && isPrime(i)) max = i;
}

console.log(max);

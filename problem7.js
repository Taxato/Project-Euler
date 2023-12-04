import { isPrime } from "./helpers.js";

let primeCount = 0;
let i = 1;
while (primeCount < 10_001) {
	i++;
	if (isPrime(i)) primeCount++;
}
console.log(i);

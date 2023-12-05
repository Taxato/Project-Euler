// Even Fibonacci Numbers
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

const timeStart = new Date();

function fibonacci(n, cache = {}) {
	if (n < 2) return 1;
	else if (n in cache) return cache[n];

	cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);

	return cache[n];
}

let sum = 0;
let num = 0;
const cache = {};
for (let i = 1; num < 4e6; i++) {
	num = fibonacci(i, cache);
	if (/[02468]$/.test(num + "")) sum += num;
}
console.log(sum);

console.log(Date.now() - timeStart, "ms");

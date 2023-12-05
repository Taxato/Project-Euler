export function isPrime(num) {
	if (num < 2) return false;

	let prime = true;
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			prime = false;
			break;
		}
	}
	return prime;
}

export function reverseStr(str) {
	let res = "";
	for (let i = str.length - 1; i >= 0; i--) {
		res += str.at(i);
	}
	return res;
}

export const isEven = n => /[02468]$/.test(String(n));

export const triangle = n => (n * (n + 1)) / 2;
export const square = n => n * n;
export const pentagonal = n => (n * (3 * n - 1)) / 2;
export const hexagonal = n => n * (2 * n - 1);
export const heptagonal = n => (n * (5 * n - 3)) / 2;
export const octagonal = n => n * (3 * n - 2);

export function sumArr(arr) {
	return arr.reduce((sum, cur) => sum + cur, 0);
}
